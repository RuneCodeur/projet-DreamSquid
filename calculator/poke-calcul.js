let monType = document.getElementById('monType');
let maBestiole = document.getElementById('maBestiole');
let quality = document.getElementById('quality');
let poketype = ["normale","Feu","combat","eau","vol","plante","Poison","Electrik","sol","Psy","Roche","glace","insecte","Dragon","spectre","ténèbre","acier","Fée"];
let  bestioleList = ["un dinosaure","un kangourou", "un elementaire", "un singe", "un guerrier", "un serpent", "un lézard", "un fauve", "un bovin", "un oiseau", "un poisson", "un objet", "un rongeur", "un molusque"];
let qualityList = ["avec des gros bras", "avec un seul oeil", "qui aime la musique", "avec un attribut culinaire", "avec des cornes ou des pics partout", "trop mignon", "divin", "qui fait de la magie", "avec un gros visage", "en version gros balèze", "spectral", "un peu flippant", "un peu moche"];

pokeCalcul();

function pokeCalcul(){
    let pokeAleatoire1 = Math.floor(Math.random() * poketype.length);
    let pokeAleatoire2 = Math.floor(Math.random() * poketype.length);
    let qualityAleatoire = Math.floor(Math.random() * qualityList.length);
    let bestioleAleatoire = Math.floor(Math.random() * bestioleList.length);
    let numberType = Math.floor(Math.random()*2);
    let chimery = Math.floor(Math.random()*4);
    let bestioleAleatoireBonus = 0;
    
    //la tronche de la bestiole
    if( chimery == 0){
        bonuschimery();
        function bonuschimery(){
            bestioleAleatoireBonus = Math.floor(Math.random() * bestioleList.length);
            if(bestioleAleatoireBonus !== bestioleAleatoire){
                maBestiole.innerHTML = "un mix entre " + bestioleList[bestioleAleatoire] + " et " + bestioleList[bestioleAleatoireBonus] + " " + qualityList[qualityAleatoire];
            }else if(bestioleAleatoireBonus == bestioleAleatoire){
                bonuschimery();
            }
        }
    }else{
        maBestiole.innerHTML= bestioleList[bestioleAleatoire] + " " + qualityList[qualityAleatoire];
    }

    //le type
    if( numberType == 1){
        if(poketype[pokeAleatoire1] === poketype[pokeAleatoire2]){
            monType.innerHTML = poketype[pokeAleatoire1];
        }else{
            monType.innerHTML = poketype[pokeAleatoire1] + ' et ' + poketype[pokeAleatoire2];
        }
    }else if(numberType == 0){
        monType.innerHTML = poketype[pokeAleatoire1];
    }
}