const nodemailer = require("nodemailer");
const connection = require('../connect');

const HTMLhead = '<head> <style type="text/css"> body{margin: 0; padding: 0; width: 100%!important;} h1{text-align: center; padding: 20px 0; border: 3px; color:#6846a8;} div{justify-content: center; margin: 10px 0; text-align: center; } a{margin: 20px; display: block;} p{margin: 0;} </style> </head>';

exports.createUser = (req, res) => {

    //récupère l'id
    connection.execute(
    "SELECT id, token_validation from users where pseudo = ? AND mail= ? ;",
    [req.body.pseudo, req.body.mail],
    function(err, user){
        if(user != undefined){
            var transporter = nodemailer.createTransport({
                host: "smtp-dreamsquid.alwaysdata.net",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: 'dreamsquid@alwaysdata.net',
                    pass: 'oblivion-666',
                },
            });
        
            let HTMLbodyCreate = '<body> <h1>Bienvenue sur DreamSquid !</h1> <div> <p>Vous venez de creer un compte utilisateur chez DreamSquid.</p> <p>Pour valider votre compte, merci de cliquer sur le lien ci-dessous.</p> <a href="https://dreamsquid.netlify.app/validation/' + user[0]['id']+ '/' + user[0]['token_validation'] + '/" >Je confirme mon adresse mail</a> </div> </body>';
            // setup e-mail
            let message = transporter.sendMail({
                from: "no-reply@dreamsquid.com",
                to: req.body.mail,
                subject: "Création de compte sur DreamSquid",
                text: "Hello world?",
                html: '<html>' + HTMLhead + HTMLbodyCreate + '</html>',
              });
        
            // send mail with defined transport object
            transporter.sendMail(message, function(error, info){
                res.status(200).json({message: "mail envoyé"});
            });
        }
        else{
            res.status(500).json({error: 'le serveur à rencontré une erreur.'})
        }                   
    })
};