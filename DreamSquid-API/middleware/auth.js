const jwt = require('jsonwebtoken');
const connection = require('../connect');

exports.getAuth= (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, '487b05ac-0e11-4720-a02b-c36806ea094c');
        const userId = decodedToken.id;
        if( req.body.id && req.body.id != userId ){
            return res.status(500).json({error: "Identifiant non valide."});
        }else{
            next();
        }
    }catch{
        return res.status(401).json({error: "Requête non authentifiée !"});
    }
};