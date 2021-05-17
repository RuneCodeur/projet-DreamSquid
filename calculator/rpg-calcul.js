let rpgName = document.getElementById('rpgName');
let alertDescription = document.getElementById('alertDescription');
let description = document.getElementById('description');
let fo = document.getElementById('fo');
let dex = document.getElementById('dex');
let co = document.getElementById('co');
let int = document.getElementById('int');
let sag = document.getElementById('sag');
let cha = document.getElementById('cha');

let sexe = ['homme', 'femme', 'androgyne'];
let race = ['humain', 'elfe', 'nain', 'orque','ogre', 'gobelin', 'elfe noir', 'gnome', 'hobbit'];
let classe = ['barbare', 'clerc', 'paladin', 'voleur', 'magicien', 'druide', 'moine', 'guerrier', 'pirate', 'rodeur', 'barde', 'assassin', 'ingenieur', 'mage', 'paysan', 'bourgeois', 'marchand', 'pretre', 'ranger'];
let vetos = [];
let alignement = [];
let age = [];
let generalCaracter = [];

let ecriture = 'dessine un personnage qui...';

function rpgCalcul(){
    if(rpgName.validity.valid == false){
        alertDescription.innerText = "C'est pas un nom, sa ! Utilise seulement des lettres majuscules et minuscules. Tu peux utiliser des espaces et des tirets (-), si tu veux.";
    }else if(rpgName.value == false){
        alertDescription.innerText = "Je veux un nom ! C'est la règle ! >:( ";
    }else{
        let randomRace = Math.floor(Math.random() * race.length);
        let randomFo = Math.floor(Math.random() * 7);
        let randomDex = Math.floor(Math.random() * 7);
        let randomCo = Math.floor(Math.random() * 7);
        let randomInt = Math.floor(Math.random() * 7);
        let randomSag = Math.floor(Math.random() * 7);
        let randomCha = Math.floor(Math.random() * 7);
        let name = rpgName.value;
        
        alertDescription.innerHTML = " ";
        description.innerHTML = "Il était une fois, un " + race[randomRace] + " nommé " + name + ". Et " + name + " s'ennuyait enormément. " + name + " décida alors de perdre son temps sur un générateur à la con au lieu de taffer ou de faire un truc constructif. Va bosser, " + name + " ! ==>";
        fo.innerText = randomFo + 8;
        dex.innerText = randomDex + 8;
        co.innerText = randomCo + 8;
        int.innerText = randomInt + 8;
        sag.innerText = randomSag + 8;
        cha.innerText = randomCha + 8;
    }
}