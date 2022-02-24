const { json } = require('express');
const SendmailTransport = require('nodemailer/lib/sendmail-transport');
const connection = require('../connect');

exports.send = (req, res) =>{
    return res.status(200).json(res.locals.result)
};

exports.saveAndSend = (req, res) => {
    try{
        connection.execute(
            "SELECT id from users where id = ? AND pseudo = ?;",
            [req.query.id, req.query.pseudo],
            function(err, user){
            if(user[0] != undefined){
                let descri = JSON.stringify(res.locals.result)
                connection.execute(
                    "UPDATE users SET last_description = ? WHERE id = ? AND pseudo = ?;",
                    [descri, req.query.id, req.query.pseudo],
                    function(err, response){
                    if(err){
                        return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
                    }
                    else{
                        return res.status(200).json(res.locals.result)
                    }
                })
            }else{
                return res.status(450).json({error: "un problème est survenue avec votre compte. veuillez réessayer plus tard."});
            }
        })

    }
    catch(e){
        console.log(e)
        return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
    }
}

exports.saveTheLast = (req, res) =>{
    try{
        connection.execute(
            "SELECT last_description, description_registred from users where id = ? AND pseudo = ?;",
            [req.body.id, req.body.pseudo],
            function(err, description){
            if(description[0] != undefined){
                if(description[0]['last_description'] != null){
                    
                    let newDescription = [];
                    if(description[0]['description_registred'] == null){
                        newDescription.push(JSON.parse(description[0]['last_description']))
                    }
                    else{
                        
                        //if descriptionregistred >= 10, renvoie un nope

                        newDescription = JSON.parse(description[0]['description_registred'])
                        newDescription.push(JSON.parse(description[0]['last_description']))
                    }
                    newDescription = JSON.stringify(newDescription)
                    connection.execute(
                        "UPDATE users SET last_description = NULL, description_registred = ? WHERE id = ? AND pseudo = ?;",
                        [newDescription, req.body.id, req.body.pseudo],
                        function(err, response){
                        if(err){
                            console.log(err)
                            return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
                        }
                        else{
                            res.status(200).json({message: "votre description à été sauvegardé ! "});
                        }
                    })
                }else{
                    return res.status(401).json({error: "veuillez generer une description."});
                }
            }else{
                return res.status(450).json({error: "un problème est survenue avec votre compte. veuillez réessayer plus tard."});
            }
        })
    }
    catch(e){
        console.log(e)
        return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
    }
}