const bcrypt = require('bcrypt');
const connection = require('../connect');
const jwt = require('jsonwebtoken');

let regex = new RegExp('^([a-zA-Z0-9_-]){3,20}$');
let mailRegex = new RegExp("^[A-Za-z-_0-9.]+@([A-Za-z-_0-9-]+.)+[A-Za-z]$");
let regexMdp = new RegExp ('^.{5,}$');

//crée un nouveau compte utilisateur
exports.signup = (req, res, next) => {
  try{
    if((req.body.mdp && regexMdp.test(req.body.mdp) === true) && (req.body.mail && mailRegex.test(req.body.mail) === true) && (req.body.pseudo && regex.test(req.body.pseudo) === true)){
      
      //verifie le pseudo
      connection.execute(
        "SELECT id from users where pseudo = ? ;",
        [req.body.pseudo],
        function(err, response){
          if(response[0] == undefined){

            //verifie le mail
            connection.execute(
              "SELECT id from users where mail = ? ;",
              [req.body.mail],
              function(err, response){
                if(response[0] == undefined){
                  
                  //crée le token de validation de mail
                  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                  var token = '';
                  for(var i = 0; i < 60; i++) {
                      token += chars[Math.floor(Math.random() * chars.length)];
                  }

                  //enregistre le bazar dans la BDD
                  bcrypt.hash(req.body.mdp, 10)
                    .then(hash =>{
                      connection.execute(
                        "INSERT INTO users SET pseudo = ? , mail= ? , mdp= ? , token_validation = ? ;",
                        [req.body.pseudo, req.body.mail, hash, token],
                        function(err, result){
                          if(err){
                            return res.status(500).json({error: "Pseudo ou mail déja utilisé."});
                          }
                          else{
                            return next();
                          }
                      })
                    })
                  .catch(() => res.status(500).json({ error }));
                }
                else{
                  return res.status(400).json({error: "Cette adresse mail est déja utilisé."});
                }
            });
          }
          else{
            return res.status(400).json({error: "Ce pseudo est déja pris."});
          }
      });
    }
    else{
      return res.status(405).json({error: "Caractères non autorisé."});
    }
  }
  catch{
    return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
  }
};

//valide le compte 
exports.validmail = (req, res) => {
  try{
    connection.execute(
      "SELECT id from users where id = ? AND token_validation = ?;",
      [req.body.id, req.body.token],
      function(err, user){
        if(user[0] != undefined){
          connection.execute(
            "UPDATE users SET token_validation = NULL, date_validation = NOW() WHERE id = ?;",
            [user[0]['id']],
              function(err, response){
                if(err){
                  return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
                }
                else{
                res.status(200).json({message: "Félicitation ! votre compte à été validé !"});
               }
          })
        }
        else{
          return res.status(400).json({error: "cet utilisateur à déja validé son compte."});
        }
    })
  }
  catch{
      return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
  }
};

exports.login = (req, res) => {
  try{
    if((req.query.pseudo && regex.test(req.query.pseudo) === true) && (req.query.mdp && regexMdp.test(req.query.mdp) === true)){
      connection.execute(
        "SELECT * FROM users WHERE pseudo= ? LIMIT 1 ;",
        [req.query.pseudo],
        function(err, user){
          if(user[0] == undefined ){
            res.status(405).json({error: "cet utilisateur n'existe pas"});
          }
          else if(user[0]['date_validation'] == null){
            res.status(405).json({error: "Cet utilisateur n'à pas encore validé son adresse email."});
          }
          else{
            bcrypt.compare(req.query.mdp, user[0].mdp, function(err, result){
              if(result === true){
  
                res.status(200).json({
                  id: user[0].id,
                  pseudo: user[0].pseudo,
                  mail: user[0].mail,
                  token: jwt.sign(
                    {id: user[0].id},
                    '487b05ac-0e11-4720-a02b-c36806ea094c', //clé secrete
                    { expiresIn: '72H' }, //durée d'expiration du token
                    {httpOnly: true}
                  )
                })
  
              }
              else{
                return res.status(401).json({error: "Mot de passe incorrect."});
              }
            })
          }
      })
    }else {
      return res.status(405).json({error: "Caractère non autorisé."});
    }
  }catch{
      return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
  }
};
exports.modifpseudo = (req, res) => {
  try{
    if((req.body.newPseudo && regex.test(req.body.newPseudo) === true) && (req.body.oldPseudo && regex.test(req.body.oldPseudo) === true)){
      connection.execute(
        "SELECT id from users where pseudo = ? ;",
        [req.body.newPseudo],
        function(err, response){
          if(response[0] == undefined){
            connection.execute(
              "UPDATE users SET pseudo = ? WHERE id = ? AND pseudo = ?;",
              [req.body.newPseudo, req.body.id, req.body.oldPseudo],
              function(err, response){
                if(err){
                  return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
                }
                else{
                  res.status(200).json({message: "Félicitation ! vous avez modifié votre pseudo !"});
                }
            })
          }
          else{
            return res.status(400).json({error: "Ce pseudo est déja pris."});
          }
      })
    }
    else{
      return res.status(405).json({error: "Non autorisé."});
    }
  }catch{
      return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
  }
};

exports.modifmail = (req, res) => {
  try{
    if((req.body.newMail && mailRegex.test(req.body.newMail) === true) && (req.body.oldMail && mailRegex.test(req.body.oldMail) === true)){
      connection.execute(
        "SELECT id from users where mail = ? ;",
        [req.body.newMail],
        function(err, response){
          if(response[0] == undefined){
            connection.execute(
              "UPDATE users SET mail = ? WHERE id = ? AND mail = ?;",
              [req.body.newMail, req.body.id, req.body.oldMail],
              function(err, response){
                if(err){
                  return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
                }
                else{
                  res.status(200).json({message: "Félicitation ! vous avez modifié votre adresse E-mail !"});
                }
            })
          }
          else{
            return res.status(400).json({error: "Cette adresse mail est déja utilisée."});
          }
      })
    }
    else{
      return res.status(405).json({error: "Non autorisé."});
    }
  }catch{
      return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
  }
};


exports.modifpassword = (req, res) => {
  try{
    if(req.body.password && regexMdp.test(req.body.password) === true){
      connection.execute(
        "SELECT id from users where id = ? AND pseudo = ?;",
        [req.body.id, req.body.pseudo],
        function(err, response){
          if(response[0] != undefined){
            bcrypt.hash(req.body.password, 10)
            .then(hash =>{
              connection.execute(
                "UPDATE users SET mdp = ? WHERE id = ? AND pseudo = ?;",
                [hash, req.body.id, req.body.pseudo],
                function(err, result){
                  if(err){
                    return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
                  }
                  else{
                    res.status(200).json({message: "Félicitation ! vous avez modifié votre mot de passe !"});
                  }
              })
            })
            .catch(() => res.status(500).json({ error }));
          }
          else{
            return res.status(405).json({error: "Non autorisé."});
          }
      })
    }
    else{
      return res.status(405).json({error: "Non autorisé."});
    }
  }catch{
      return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
  }
};


exports.modifpicture = (req, res) => {
  try{
    if((req.query.pseudo && regex.test(req.query.pseudo) === true) && (req.query.mdp && regexMdp.test(req.query.mdp) === true)){
      console.log('modif la photo')
    }
    else{
      return res.status(405).json({error: "Non autorisé."});
    }
  }catch{
      return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
  }
};