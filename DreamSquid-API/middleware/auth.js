const jwt = require('jsonwebtoken');
const connection = require('../connect');

exports.getAuth= (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, '487b05ac-0e11-4720-a02b-c36806ea094c');
        const userId = decodedToken.id;
        if( req.body.id && req.body.id != userId ){
            return res.status(500).json({error: "Identifiant non valide."});
        }
        else{
            next();
        }
    }
    catch(e){
        console.log(e)
        return res.status(401).json({error: "Requête non authentifiée !"});
    }
};

exports.getAuthPicture= (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, '487b05ac-0e11-4720-a02b-c36806ea094c');
        const userId = decodedToken.id;
        if( req.body.id && req.body.id != userId ){
            return res.status(500).json({error: "Identifiant non valide."});
        }
        else{
            if( typeof req.headers.pseudo == 'string'){
                connection.execute(
                    "SELECT last_description FROM users WHERE id = ? AND pseudo = ?;",
                    [userId, req.headers.pseudo],
                    function(err, response){
                        if(response[0] != undefined){
                            res.locals.result = response[0]['last_description']
                            res.locals.id = userId
                            next();
                        }
                        else{
                            return res.status(405).json({error: "Vous devez d'abord générer une description."});
                        }
                })
            }
            else{
                return res.status(500).json({error: "les informations envoyés ne sont pas corrects."});
            }
        }
    }
    catch(e){
        console.log(e)
        return res.status(401).json({error: "Requête non authentifiée !"});
    }
};


exports.getAuthPictureWithDescri= (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, '487b05ac-0e11-4720-a02b-c36806ea094c');
        const userId = decodedToken.id;
        if( req.body.id && req.body.id != userId ){
            return res.status(500).json({error: "Identifiant non valide."});
        }
        else{
            if( typeof req.headers.pseudo == 'string'){
                connection.execute(
                    "SELECT description_registred FROM users WHERE id = ? AND pseudo = ?;",
                    [userId, req.headers.pseudo],
                    function(err, response){
                        if(err){
                            return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
                        }
                        else{
                            let listDescription = JSON.parse(response[0].description_registred)
                            if(listDescription == null){
                                return res.status(405).json({error: "vous n'avez pas enregistré de description"});
                            }
                            else{
                                let description = listDescription[req.headers.iddescription]
                                if(description == null){
                                    return res.status(405).json({error: "La description selectionée n'existe pas"});
                                }
                                else{
                                    listDescription.splice(req.headers.iddescription, 1)
                                    res.locals.description = description;
                                    res.locals.listDescription = JSON.stringify(listDescription);
                                    res.locals.id = userId;
                                    next();
                                }
                            }
                        }
                    })
            }
            else{
                res.status(500).json({error: "les informations envoyés ne sont pas corrects."});
            }
        }
    }
    catch(e){
        console.log(e)
        return res.status(401).json({error: "Requête non authentifiée !"});
    }
};