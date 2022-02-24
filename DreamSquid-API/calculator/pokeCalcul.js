let typeList = ["normale","Feu","combat","eau","vol","plante","Poison","Electrik","sol","Psy","Roche","glace","insecte","Dragon","spectre","ténèbre","acier","Fée"];
let bestioleList = ["un dinosaure","un kangourou", "un elementaire", "un singe", "un guerrier", "un serpent", "un lézard", "un fauve", "un bovin", "un oiseau", "un poisson", "un objet", "un rongeur", "un molusque"];
let qualityList = ["avec des gros bras", "avec un seul oeil", "qui aime la musique", "avec un attribut culinaire", "avec des cornes ou des pics partout", "trop mignon", "divin", "qui fait de la magie", "avec un gros visage", "en version gros balèze", "spectral", "un peu flippant", "un peu moche"];

function bonuschimery(){
    let bestioleAleatoire = Math.floor(Math.random() * bestioleList.length);
    let qualityAleatoire = Math.floor(Math.random() * qualityList.length);
    let bestioleAleatoireBonus = Math.floor(Math.random() * bestioleList.length);

    if(bestioleAleatoireBonus !== bestioleAleatoire){
      return "un mix entre " + bestioleList[bestioleAleatoire] + " et " + bestioleList[bestioleAleatoireBonus] + " " + qualityList[qualityAleatoire] + ".";
    }
    else{
      return bonuschimery();
    }
  };

exports.description = (req, res, next) => {
    try{
        let pokeAleatoire1 = Math.floor(Math.random() * typeList.length);
        let pokeAleatoire2 = Math.floor(Math.random() * typeList.length);
        let numberType = Math.floor(Math.random()*2);
        let chimery = Math.floor(Math.random()*4);
        let descri = '';
        let type = '';

        //la tronche de la bestiole
        if( chimery == 0){
            descri = bonuschimery();
            
        }else{
            let bestioleAleatoire = Math.floor(Math.random() * bestioleList.length);
            let qualityAleatoire = Math.floor(Math.random() * qualityList.length);
            descri = bestioleList[bestioleAleatoire] + " " + qualityList[qualityAleatoire] + ".";
        }

        //le type
        if( numberType == 1){
            if(typeList[pokeAleatoire1] === typeList[pokeAleatoire2]){
            type = typeList[pokeAleatoire1];
            }else{
            type = typeList[pokeAleatoire1] + ' et ' + typeList[pokeAleatoire2];
            }
        }else if(numberType === 0){
            type = typeList[pokeAleatoire1];
        }

        //RENVOIE LE BAZAR
        res.locals.result = {
            name:'pokemon',
            description : descri,
            type: type,
        }
        next()
    }    
    catch(e){
        console.log(e)
        return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
    }
};