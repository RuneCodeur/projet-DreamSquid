let monType = document.getElementById('monType');
let maBestiole = document.getElementById('maBestiole');
let quality = document.getElementById('quality');
let button = document.getElementById('random');
let poketype = ["normale","Feu","combat","eau","vol","plante","Poison","Electrik","sol","Psy","Roche","glace","insecte","Dragon","spectre","ténèbre","acier","Fée"];
let  bestioleList = ["un dinosaure","un kangourou", "un elementaire", "un genre de singe", "un guerrier", "une espèce de serpent", "un gros lézard", "un fauve", "un bovin", "un oiseau", "un poisson", "un truc bricolé par l'homme", "un rongeur", "un molusque"];
let qualityList = ["avec des gros bras", "avec un seule oeil", "un peu musical sur les bords", "mais concrètement, c'est genre de la bouffe", "avec des cornes ou des pics partout", "trop mignon", "mais il est un peu zarb", " mais en fait c'est un dieu", "qui fait de la magie", "avec un gros visage", "en version gros balèze", "mais c'est un genre d'esprit", "mais il est un peu flippant", "mais il est un peu moche"];

calculator();
button.onclick = calculator;

function calculator(){
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
                maBestiole.innerHTML = "un mix entre " + bestioleList[bestioleAleatoire] + " et " + bestioleList[bestioleAleatoireBonus] + ", " + qualityList[qualityAleatoire];
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