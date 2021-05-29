let descriGen = document.getElementById('descri-general');
let descriEquip = document.getElementById('descri-equip');
let descriCorps = document.getElementById('descri-corps');
let descriFace = document.getElementById('descri-face');
let descriPoils = document.getElementById('descri-poils');
let descriCompo = document.getElementById('descri-compo');
let align =document.getElementById('align');

let fo = document.getElementById('fo');
let dex = document.getElementById('dex');
let co = document.getElementById('co');
let int = document.getElementById('int');
let sag = document.getElementById('sag');
let cha = document.getElementById('cha');

let raceM = ['humain', 'demi-elfe', 'elfe', 'elfe des bois', 'haut elfe', 'nain', 'demi-orque', 'orque','ogre', 'gobelin', 'elfe noir', 'gnome', 'hobbit', 'homme-lézard'];
let raceF = ['humaine', 'demi-elfe', 'elfe', 'elfe des bois', 'haute elfe', 'naine','demi-orque', 'orque', 'ogresse', 'gobeline', 'elfe noir', 'gnome', 'hobbit', 'femme-lézard' ];
let classeM = ['barbare', 'clerc', 'paladin', 'voleur', 'magicien', 'druide', 'moine', 'guerrier', 'pirate', 'rodeur', 'barde','menestrel', 'assassin', 'ingenieur', 'mage', 'paysan', 'bourgeois', 'marchand', 'prêtre', 'ranger', 'nécromancien'];
let classeF = ['barbare', 'clerc', 'paladine', 'voleuse', 'magicienne', 'druide', 'moniale', 'guerrière', 'pirate', 'rodeuse', 'barde','menestrelle', 'assassine', 'ingenieuse', 'mage', 'paysane', 'bourgeoise', 'marchande', 'prêtresse', 'ranger', 'nécromancienne'];
let maitrise = ['la magie du feu', 'la magie du froid', ' la magie démoniaque',"l'art de se camoufler comme personne", "l'art du lancer de couteau", "le tir à l'arc comme personne", "la cuisine comme personne", "l'art de la bagare", "l'art du combat à l'épée"];
let armor = ["une armure de plaque", "des habits de pouilleux", "des vetements enchantés", "une tenue de garde", "une armure draconnique", "l'équipement classique d'un aventurier" ];
let atirail = ["une sacoche", "un sac à dos", "une cape", "une bague magique", "un bandana", "un colier magique", "un superbe casque", "un grimoire"];
let music = ["une flûte", "une flûte de pan", "un tambour", "un luth", "une cornemuse", "une lyre", "un violon" ];
let weapon = ["d'un arc magique", "d'un arc avec un carquois et des flèches", "d'une simple épée", "d'un bâton de combat", "d'une épée et d'un bouclier", "d'une épée à deux mains", "d'une dague", "de deux dagues de combats", "d'une épée fine", "d'un bâton magique", "d'une lance", "d'un marteau de guerre", "d'une hache de guerre", "d'une masse et d'un bouclier", "d'une masse","d'une masse et d'un bouclier", "d'un gourdin", "d'un fleuret", "d'un sabre", "d'une épée magique", "d'une lance magique"];
let tailleF = ["très grande", "de taille moyenne", "petite"];
let tailleM = ["très grand", "de taille moyen", "petit"];
let muscle = ["beaucoup de muscle", "un peu de muscle", "un corps fin", "un peu de ventre", "un corps svelte",];
let boobs = ["une petite poitrine", "une poitrine avantageuse", "une grosse poitrine", "une absence complète de poitrine"];
let face = ["carré", "fin", "rond"];
let distinct = ["une cicatrice", "des tâches de rousseurs", "un piercing à l'oreil", "un piercing au nez"];
let colorEyes = ["vert", "marron", "bleu", "gris", "verron", "jaune", "rouge", "violet" ];
let formEyes = ["en amande", "espacés", "ronds"];
let colorHairM = ["châtain", "blond", "roux", "brun"];
let colorHairF = ["châtain", "blonde", "rousse", "brune"];
let hair = ["un chignon", "un mohawk", "des cheveux en bataille", "des couettes", "une queue de cheval", "des cheveux courts", "de long cheveux", "la coupe affro"];
let beard = ["pas de barbe ni de moustache", "une barbe collier", "la moustache", "le bouc", "des rouflaquettes", "une barbe tressé", "une très longue barbe", "une barbe bien fournis", "une barbe épaise", "une barbe de 3 jours"];
let comportment = ["qui a les mains baladeuses", "qui a la critique facile","qui n'est pas très doué avec les autres", "qui se fait facilement detester par les autres", " qui a des problèmes avec ses parents", "un peu flemmarde","qui a beaucoup de préjugés"," qui ne sais pas lire","très tactile", "sait reconnaitre la valeur des choses"];
let emotion = ["un peu simplet","un peu colèrique"," un peu bourru", "tout le temps en train de sourire", " tout le temps stoïc",];

let alignementList = ["loyal bon", "neutre bon", "chaotique bon", " loyal neutre", "neutre", "chaotique neutre", "loyal mauvais", "neutre mauvais", "chaotique mauvais"];
//imagine: un HUMAIN GUERRIER de 19 ans qui maitrise LA MAGIE DU FEU. il porte UNE ARMURE avec UN SAC et UNE CAPE, et il est équipé DUNE HACHE DE GUERRE. il est TR7S GRAND, avec BEAUCOUP DE MUSCLE. il a un visage CARR2E et une CICATRICE. ses yeux sont VERT et EN AMMANDE. il PORTE UNE CR7TE VERTE avec UNE MOUSTACHE. c'est un personnage UN PEU BOURRU, mais il est TR7S DOU2 AVEC LES FILLES.

function rpgCalcul(){
    let randomSex = Math.floor(Math.random() *2);
    let randomAge = Math.floor(Math.random() * 70 + 12);
    let randomMaitrise = Math.floor(Math.random() * maitrise.length);
    let randomArmor = Math.floor(Math.random() * armor.length);
    let randomAtiral = Math.floor(Math.random() * atirail.length);
    let randomWeapon = Math.floor(Math.random() * weapon.length);
    let randomMuscle = Math.floor(Math.random() * muscle.length);
    let randomFace = Math.floor(Math.random() * face.length);
    let randomDistinct = Math.floor(Math.random() * distinct.length);
    let randomColorEyes = Math.floor(Math.random() * colorEyes.length);
    let randomformEyes = Math.floor(Math.random() * formEyes.length);
    let randomHair = Math.floor(Math.random() * hair.length);
    let randomComportment = Math.floor(Math.random() * comportment.length);
    let randomEmotion = Math.floor(Math.random() * emotion.length);

    let randomalign = Math.floor(Math.random() * alignementList.length);
    let randomFo = Math.floor(Math.random() * 7);
    let randomDex = Math.floor(Math.random() * 7);
    let randomCo = Math.floor(Math.random() * 7);
    let randomInt = Math.floor(Math.random() * 7);
    let randomSag = Math.floor(Math.random() * 7);
    let randomCha = Math.floor(Math.random() * 7);

    if(randomSex == 0){
        let randomRace = Math.floor(Math.random() * raceF.length);
        let randomClass = Math.floor(Math.random() * classeF.length);
        descriGen.style.margin = "10px 0px";
        descriGen.innerHTML = "Imagine : <br> Une "+ classeF[randomClass] + ' ' + raceF[randomRace] + " de " + randomAge + " ans qui maitrise " + maitrise[randomMaitrise] + " !";
        
        descriEquip.style.margin = "10px 0px";
        descriEquip.innerHTML = "Elle porte " + armor[randomArmor] + " avec " + atirail[randomAtiral] + ", et elle est équipé " + weapon[randomWeapon] + ".";
       
        let randomTaille = Math.floor(Math.random() * tailleF.length);
        let randomBoobs = Math.floor(Math.random() * boobs.length);
        descriCorps.style.margin = "10px 0px";
        descriCorps.innerHTML = " Elle est " + tailleF[randomTaille] + " avec " + muscle[randomMuscle]+ " et " + boobs[randomBoobs] + ".";
        
        descriFace.style.margin ="10px 0px";
        descriFace.innerHTML = "Elle a un visage " + face[randomFace] + " et " + distinct[randomDistinct] + ". Ses yeux sont " + colorEyes[randomColorEyes] + " et " + formEyes[randomformEyes] + ".";
        
        let randomColorHair = Math.floor(Math.random() * colorHairF.length);
        descriPoils.style.margin ="10px 0px";
        descriPoils.innerHTML = "Elle est " + colorHairF[randomColorHair] + " et porte " + hair[randomHair] + ".";
        
        descriCompo.style.margin ="10px 0px";
        descriCompo.innerHTML = "C'est une persone " +comportment[randomComportment] + ", et qui est " + emotion[randomEmotion] + ".";
    
    
    }else{
        let randomRace = Math.floor(Math.random() * raceM.length);
        let randomClass = Math.floor(Math.random() * classeM.length);
        descriGen.style.margin = "10px 0px";
        descriGen.innerHTML = "Imagine : <br> Un "+ classeM[randomClass] +' ' + raceM[randomRace] + " de " + randomAge + " ans qui maitrise " + maitrise[randomMaitrise] + " !";
       
        descriEquip.style.margin = "10px 0px";
        descriEquip.innerHTML = "Il porte " + armor[randomArmor] + " avec " + atirail[randomAtiral] + ", et il est équipé " + weapon[randomWeapon] + ".";
        
        let randomTaille = Math.floor(Math.random() * tailleM.length);
        descriCorps.style.margin = "10px 0px";
        descriCorps.innerHTML = " Il est " + tailleM[randomTaille] + " avec " + muscle[randomMuscle] + ".";
        
        descriFace.style.margin ="10px 0px";
        descriFace.innerHTML = "Il a un visage " + face[randomFace] + " et " + distinct[randomDistinct] + ". Ses yeux sont " + colorEyes[randomColorEyes] + " et " + formEyes[randomformEyes] + ".";
        
        let randomColorHair = Math.floor(Math.random() * colorHairM.length);
        let randomBeard = Math.floor(Math.random() * beard.length);
        descriPoils.style.margin ="10px 0px";
        descriPoils.innerHTML = "Il est " + colorHairM[randomColorHair] + " et porte " + hair[randomHair] + " et " + beard[randomBeard] + ".";
        
        descriCompo.style.margin ="10px 0px";
        descriCompo.innerHTML = "C'est une persone " +comportment[randomComportment] + ", et qui est " + emotion[randomEmotion] + ".";
    }

    align.innerText = alignementList[randomalign];

    fo.innerText = randomFo + 8;
    dex.innerText = randomDex + 8;
    co.innerText = randomCo + 8;
    int.innerText = randomInt + 8;
    sag.innerText = randomSag + 8;
    cha.innerText = randomCha + 8;
}