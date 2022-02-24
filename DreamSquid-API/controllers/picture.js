const connection = require('../connect');

exports.createPicture = (req, res) => {
  try{
    let picture = `${req.protocol}://${req.get('host')}/images/oeuvres/${req.file.filename}`
    let description = JSON.parse(res.locals.result)
    let type = description.name
    delete description.name
    description = JSON.stringify(description)
    
    connection.execute(
      "INSERT INTO picture SET id_user= ?,  picture= ?, type= ?, description= ?;",
      [res.locals.id, picture, type, description],
      function(err, result){
        if(err){
          res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
        }
        else if(result){
          connection.execute(
            "UPDATE users SET last_description = NULL WHERE id = ? AND pseudo = ?;",
            [res.locals.id,req.headers.pseudo],
            function(err, result){
              if(err){
                return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
              }
              else{
                res.status(200).json({message: "oeuvre posté !"});
              }
          })
        }
    })
  }
  catch(e){
    console.log(e)
    return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
  }
};

exports.createPictureWithDescri = (req, res) => {
  try{
    let picture = `${req.protocol}://${req.get('host')}/images/oeuvres/${req.file.filename}`
    let description = res.locals.description
    let type = description.name
    delete description.name
    let listDescription = res.locals.listDescription
    description = JSON.stringify(description)
    connection.execute(
      "INSERT INTO picture SET id_user= ?,  picture= ?, type= ?, description= ?;",
      [res.locals.id, picture, type, description],
      function(err, result){
        if(err){
          res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
        }
        else if(result){
          connection.execute(
            "UPDATE users SET description_registred = ? WHERE id = ? AND pseudo = ?;",
            [listDescription, res.locals.id, req.headers.pseudo],
            function(err, result){
              if(err){
                return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
              }
              else{
                res.status(200).json({message: "oeuvre posté !"});
              }
          })
        }
    })
  }
  catch(e){
    console.log(e)
    return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
  }
};

exports.all = (req, res) => {
  try{
    connection.execute(
      "SELECT picture.id as id, users.pseudo as pseudo, picture.picture as picture FROM picture INNER JOIN users on picture.id_user = users.id ORDER BY date DESC LIMIT 20 OFFSET ?;",
      [req.query.page],
      function(err, result){
        if(result){
          res.status(200).json({result});
        }
      })
  }
  catch(e){
    console.log(e)
    return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
  }
};


exports.onePicture = (req, res) => {
  try{
    connection.execute(
      "SELECT picture.id as id, users.pseudo as pseudo, picture.picture as picture, picture.description as description, picture.date as date FROM picture INNER JOIN users on picture.id_user = users.id WHERE picture.id = ?",
      [req.query.picture],
      function(err, result){
        if(result != undefined){
          res.status(200).json({result});
        }
        else{
          return res.status(500).json({error: "Cette oeuvre n'existe pas."});
        }
      })
  }
  catch(e){
    console.log(e)
    return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
  }
};