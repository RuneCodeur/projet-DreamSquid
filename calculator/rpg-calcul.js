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
let classeM = ['barbare', 'clerc', 'paladin', 'voleur', 'magicien', 'druide', 'moine', 'guerrier', 'pirate', 'rodeur', 'barde','menestrel', 'assassin', 'ingenieur', 'mage', 'bourgeois', 'marchand', 'prêtre', 'ranger', 'nécromancien', 'alchimiste'];
let classeF = ['barbare', 'clerc', 'paladine', 'voleuse', 'magicienne', 'druide', 'moniale', 'guerrière', 'pirate', 'rodeuse', 'barde','menestrelle', 'assassine', 'ingenieuse', 'mage', 'bourgeoise', 'marchande', 'prêtresse', 'ranger', 'nécromancienne', 'alchimiste'];
let maitrise = ['la magie du feu', 'la magie du froid', ' la magie démoniaque',"l'art de se camoufler comme personne", "l'art du lancer de couteau", "le tir à l'arc comme personne", "la cuisine comme personne", "l'art de la bagarre", "parfaitement son arme", "les arts martiaux"];
let armor = ["une armure de plaque", "des habits de pouilleux", "des vetements enchantés", "une tenue de garde", "une armure draconnique", "l'équipement classique d'un aventurier", "une armure rouillé", "des vetements de paysans", "des vetements de riche", "une belle armure ornée" ];
let atirail = ["une sacoche", "un sac à dos", "une cape", "une bague magique", "un bandana", "un colier magique","des breloques mystique", "un superbe casque", "un grimoire"];
let music = ["une flûte", "une flûte de pan", "un tambour", "un luth", "une cornemuse", "une lyre", "un violon" ];
let weapon = ["d'un arc enchanté","d'un merlin","d'un couteau de cuisine", "d'un arc avec un carquois et des flèches", "d'une simple épée", "d'un bâton de combat", "d'une épée et d'un bouclier", "d'une épée à deux mains", "d'une dague", "de deux dagues de combats", "d'une épée fine", "d'un bâton magique", "d'une lance", "d'un marteau de guerre", "d'une hache de guerre", "d'une masse et d'un bouclier", "d'une masse","d'une masse et d'un bouclier", "d'un gourdin", "d'un fleuret", "d'un sabre", "d'une épée magique", "d'une lance magique"];
let tailleF = ["très grande", "de taille moyenne", "petite"];
let tailleM = ["très grand", "de taille moyen", "petit"];
let muscle = ["beaucoup de muscle", "un peu de muscle", "un corps fin", "un peu de ventre", "un corps svelte",];
let boobs = ["une petite poitrine", "une poitrine avantageuse", "une grosse poitrine", "une absence complète de poitrine"];
let face = ["carré", "fin", "rond"];
let distinct = ["une cicatrice", "des tâches de rousseurs", "un piercing à l'oreille", "un piercing au nez", "un piercing aux oreilles", "un piercing aux oreilles et au nez",  "un piercing à l'oreille et au nez", "plein de piercing partout", "un long nez", "très basique"];
let colorEyes = ["vert", "marron", "bleu", "gris", "verron", "jaune", "rouge", "violet" ];
let formEyes = ["en amande", "espacés", "ronds"];
let colorHairM = ["châtain", "blond", "roux", "brun"];
let colorHairF = ["châtain", "blonde", "rousse", "brune"];
let hair = ["un chignon", "un mohawk", "des cheveux en bataille", "des couettes", "une queue de cheval", "des cheveux courts", "de long cheveux", "la coupe affro"];
let beard = ["pas de barbe ni de moustache", "une barbe collier", "la moustache", "le bouc", "des rouflaquettes", "une barbe tressé", "une très longue barbe", "une barbe bien fournis", "une barbe épaise", "une barbe de 3 jours"];
let comportment = ["qui a les mains baladeuses", "qui a la critique facile","qui n'est pas très doué avec les autres", "qui se fait facilement detester par les autres", " qui a des problèmes avec ses parents", "un peu flemmarde","qui a beaucoup de préjugés"," qui ne sais pas lire","très tactile", "sait reconnaitre la valeur des choses"];
let emotion = ["un peu simplet","un peu colèrique"," un peu bourru", "tout le temps en train de sourire", " tout le temps stoïc"];

let alignementList = ["loyal bon", "neutre bon", "chaotique bon", " loyal neutre", "neutre", "chaotique neutre", "loyal mauvais", "neutre mauvais", "chaotique mauvais"];

function rpgCalcul(){
    let randomRaceM = Math.floor(Math.random() * raceM.length);
    let randomRaceF = Math.floor(Math.random() * raceF.length);
    let randomClassF = Math.floor(Math.random() * classeF.length);
    let randomClassM = Math.floor(Math.random() * classeM.length);
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

    //////    description femme    //////
    if(randomSex == 0){
        descriGen.style.margin = "10px 0px";
        descriGen.innerHTML = "Imagine : <br> Une "+ classeF[randomClassF] + ' ' + raceF[randomRaceF] + " de " + randomAge + " ans qui maitrise " + maitrise[randomMaitrise] + " !";
        
        descriEquip.style.margin = "10px 0px";
        descriEquip.innerHTML = "Elle porte " + armor[randomArmor] + " avec " + atirail[randomAtiral] + ", et elle est équipé " + weapon[randomWeapon] + ".";
       
        let randomTaille = Math.floor(Math.random() * tailleF.length);
        let randomBoobs = Math.floor(Math.random() * boobs.length);
        descriCorps.style.margin = "10px 0px";
        descriCorps.innerHTML = " Elle est " + tailleF[randomTaille] + " avec " + muscle[randomMuscle]+ " et " + boobs[randomBoobs] + ".";
        
        descriFace.style.margin ="10px 0px";
        descriFace.innerHTML = "Elle a un visage " + face[randomFace] + " et " + distinct[randomDistinct] + ". Ses yeux sont " + colorEyes[randomColorEyes] + " et " + formEyes[randomformEyes] + ".";
        
        if (raceF[randomRaceF] != 'femme-lézard'){
            let randomColorHair = Math.floor(Math.random() * colorHairF.length);
            descriPoils.style.margin ="10px 0px";
            descriPoils.innerHTML = "Elle est " + colorHairF[randomColorHair] + " et porte " + hair[randomHair] + ".";
        }
        if (raceF[randomRaceF] == 'femme-lézard'){
            descriPoils.style.margin ="0px 0px";
            descriPoils.innerHTML = "";
        }

        descriCompo.style.margin ="10px 0px";
        descriCompo.innerHTML = "C'est une personne " +comportment[randomComportment] + ", et qui est " + emotion[randomEmotion] + ".";
    
    //////    description homme    //////
    }else{
        descriGen.style.margin = "10px 0px";
        descriGen.innerHTML = "Imagine : <br> Un "+ classeM[randomClassM] +' ' + raceM[randomRaceM] + " de " + randomAge + " ans qui maitrise " + maitrise[randomMaitrise] + " !";
       
        descriEquip.style.margin = "10px 0px";
        descriEquip.innerHTML = "Il porte " + armor[randomArmor] + " avec " + atirail[randomAtiral] + ", et il est équipé " + weapon[randomWeapon] + ".";
        
        let randomTaille = Math.floor(Math.random() * tailleM.length);
        descriCorps.style.margin = "10px 0px";
        descriCorps.innerHTML = " Il est " + tailleM[randomTaille] + " avec " + muscle[randomMuscle] + ".";
        
        descriFace.style.margin ="10px 0px";
        descriFace.innerHTML = "Il a un visage " + face[randomFace] + " et " + distinct[randomDistinct] + ". Ses yeux sont " + colorEyes[randomColorEyes] + " et " + formEyes[randomformEyes] + ".";
        
        if (raceM[randomRaceM] != 'homme-lézard'){
            let randomColorHair = Math.floor(Math.random() * colorHairM.length);
            let randomBeard = Math.floor(Math.random() * beard.length);
            descriPoils.style.margin ="10px 0px";
            descriPoils.innerHTML = "Il est " + colorHairM[randomColorHair] + " et porte " + hair[randomHair] + " et " + beard[randomBeard] + ".";
        }
        if (raceM[randomRaceM] == 'homme-lézard'){
            descriPoils.style.margin ="0px 0px";
            descriPoils.innerHTML = "";
        }
        descriCompo.style.margin ="10px 0px";
        descriCompo.innerHTML = "C'est une personne " +comportment[randomComportment] + ", et qui est " + emotion[randomEmotion] + ".";
    }

    //////    bonus femme    //////
    if(randomSex == 0){
    // bonus demi-elfe +3
    if (raceF[randomRaceF] == 'demi-elfe'){
        randomSag += 1;
        randomDex += 1;
        randomCha += 1;
    }
    // bonus elfe +3
    if (raceF[randomRaceF] == 'elfe'){
        randomFo -= 1;
        randomDex += 1;
        randomCha += 2;
        randomInt += 1;
    }
    // bonus elfe des bois +3
    if (raceF[randomRaceF] == 'elfe des bois'){
        randomCo -= 1;
        randomDex += 2;
        randomCha += 1;
        randomSag += 1;
    }
    // bonus haut elfe +2
    if (raceF[randomRaceF] == 'haute elfe'){
        randomInt += 3;
        randomCha += 2;
        randomFo -= 1;
        randomCo -= 1;
        randomSag -= 1;
    }
    // bonus nain +2
    if (raceF[randomRaceF] == 'naine'){
        randomFo += 1;
        randomCha -= 1;
        randomCo += 2;
    }
    // bonus demi-orque +1
    if (raceF[randomRaceF] == 'demi-orque'){
        randomSag += 1;
        randomFo += 1;
        randomCha -= 1;
    }
    //bonus orque -2
    if (raceF[randomRaceF] == 'orque'){
        randomFo += 2;
        randomInt -= 2;
        randomCha -= 2;
    }
    //bonus ogre +0
    if (raceF[randomRaceF] == 'ogresse'){
        randomFo += 4;
        randomInt -= 2;
        randomSag -= 2;
        randomCo += 2;
        randomCha -= 2;
    }
    //bonus gobelin +0
    if (raceF[randomRaceF] == 'gobeline'){
        randomFo -= 2;
        randomSag += 1;
        randomCha -= 2;
        randomCo += 3;
    }
    //bonus elfe noir +1
    if (raceF[randomRaceF] == 'elfe noir'){
        randomInt += 1;
        randomCha -= 1;
        randomCo += 1;
    }
    //bonus gnome +1
    if (raceF[randomRaceF] == 'gnome'){
        randomFo -= 2;
        randomInt += 2;
        randomCo += 1;
    }
    //bonus hobbit +1
    if (raceF[randomRaceF] == 'hobbit'){
        randomFo -= 1;
        randomDex +=1;
        randomSag -= 1;
        randomCo += 2;
    }
    //bonus lezard +3
    if (raceF[randomRaceF] == 'femme-lézard'){
        randomDex += 1;
        randomInt -= 1;
        randomCo += 3;
    }
    //////    bonus metier    //////
    if(classeF[randomClassF] =='barbare'){
        randomFo += 2;
    }
    if(classeF[randomClassF] =='clerc'){
        randomSag += 2;
    }
    if(classeF[randomClassF] =='paladine'){
        randomFo += 1;
        randomSag += 1;
    }
    if(classeF[randomClassF] =='voleuse'||classeF[randomClassF] =='assassine'){
        randomDex += 2;
    }
    if(classeF[randomClassF] =='magicienne'||classeF[randomClassF] =='nécromancienne'){
        randomInt += 2;
    }
    if(classeF[randomClassF] =='druide'){
        randomCo += 2;
    }
    if(classeF[randomClassF] =='moniale'){
        randomSag += 1;
        randomDex += 1;
    }
    if(classeF[randomClassF] =='guerrière'){
        randomFo += 1;
        randomCo += 1;
    }
    if(classeF[randomClassF] =='pirate'){
        randomDex += 1;
        randomCo += 1;
    }
    if(classeF[randomClassF] =='rodeuse'||classeF[randomClassF] =='ranger'){
        randomDex += 1;
        randomFo += 1;
    }
    if(classeF[randomClassF] =='barde'||classeF[randomClassF] =='menestrelle'){
        randomCha += 2;
    }
    if(classeF[randomClassF] =='ingenieuse'||classeF[randomClassF] =='alchimiste'){
        randomDex += 1;
        randomInt += 1;
    }
    if(classeF[randomClassF] =='mage'){
        randomSag += 1;
        randomInt += 1;
    }
    if(classeF[randomClassF] =='bourgeoise'||classeF[randomClassF] =='marchande'){
        randomCha += 1;
        randomInt += 1;
    }
    if(classeF[randomClassF] =='prêtresse'){
        randomSag += 1;
        randomCo += 1;
    }

    //////    bonus homme    //////

    }else{
    // bonus demi-elfe +3
    if (raceM[randomRaceM] == 'demi-elfe'){
        randomSag += 1;
        randomDex += 1;
        randomCha += 1;
    }
    // bonus elfe +3
    if (raceM[randomRaceM] == 'elfe'){
        randomFo -= 1;
        randomDex += 1;
        randomCha += 2;
        randomInt += 1;
    }
    // bonus elfe des bois +3
    if (raceM[randomRaceM] == 'elfe des bois'){
        randomCo -= 1;
        randomDex += 2;
        randomCha += 1;
        randomSag += 1;
    }
    // bonus haut elfe +2
    if (raceM[randomRaceM] == 'haut elfe'){
        randomInt += 3;
        randomCha += 2;
        randomFo -= 1;
        randomCo -= 1;
        randomSag -= 1;
    }
    // bonus nain +2
    if (raceM[randomRaceM] == 'nain'){
        randomFo += 1;
        randomCha -= 1;
        randomCo += 2;
    }
    // bonus demi-orque +1
    if (raceM[randomRaceM] == 'demi-orque'){
        randomSag += 1;
        randomFo += 1;
        randomCha -= 1;
    }
    //bonus orque -2
    if (raceM[randomRaceM] == 'orque'){
        randomFo += 2;
        randomInt -= 2;
        randomCha -= 2;
    }
    //bonus ogre +0
    if (raceM[randomRaceM] == 'ogre'){
        randomFo += 4;
        randomInt -= 2;
        randomSag -= 2;
        randomCo += 2;
        randomCha -= 2;
    }
    //bonus gobelin +0
    if (raceM[randomRaceM] == 'gobelin'){
        randomFo -= 2;
        randomSag += 1;
        randomCha -= 2;
        randomCo += 3;
    }
    //bonus elfe noir +1
    if (raceM[randomRaceM] == 'elfe noir'){
        randomInt += 1;
        randomCha -= 1;
        randomCo += 1;
    }
    //bonus gnome +1
    if (raceM[randomRaceM] == 'gnome'){
        randomFo -= 2;
        randomInt += 2;
        randomCo += 1;
    }
    //bonus hobbit +1
    if (raceM[randomRaceM] == 'hobbit'){
        randomFo -= 1;
        randomDex +=1;
        randomSag -= 1;
        randomCo += 2;
    }
    //bonus lezard +3
    if (raceM[randomRaceM] == 'homme-lézard'){
        randomDex += 1;
        randomInt -= 1;
        randomCo += 3;
    }
    //////    bonus metier    //////
    if(classeF[randomClassF] =='barbare'){
        randomFo += 2;
    }
    if(classeF[randomClassF] =='clerc'){
        randomSag += 2;
    }
    if(classeF[randomClassF] =='paladin'){
        randomFo += 1;
        randomSag += 1;
    }
    if(classeF[randomClassF] =='voleur'||classeF[randomClassF] =='assassin'){
        randomDex += 2;
    }
    if(classeF[randomClassF] =='magicien'||classeF[randomClassF] =='nécromancien'){
        randomInt += 2;
    }
    if(classeF[randomClassF] =='druide'){
        randomCo += 2;
    }
    if(classeF[randomClassF] =='moine'){
        randomSag += 1;
        randomDex += 1;
    }
    if(classeF[randomClassF] =='guerrier'){
        randomFo += 1;
        randomCo += 1;
    }
    if(classeF[randomClassF] =='pirate'){
        randomDex += 1;
        randomCo += 1;
    }
    if(classeF[randomClassF] =='rodeur'||classeF[randomClassF] =='ranger'){
        randomDex += 1;
        randomFo += 1;
    }
    if(classeF[randomClassF] =='barde'||classeF[randomClassF] =='menestrel'){
        randomCha += 2;
    }
    if(classeF[randomClassF] =='ingenieur'||classeF[randomClassF] =='alchimiste'){
        randomDex += 1;
        randomInt += 1;
    }
    if(classeF[randomClassF] =='mage'){
        randomSag += 1;
        randomInt += 1;
    }
    if(classeF[randomClassF] =='bourgeois'||classeF[randomClassF] =='marchand'){
        randomCha += 1;
        randomInt += 1;
    }
    if(classeF[randomClassF] =='prêtre'){
        randomSag += 1;
        randomCo += 1;
    }
}
//////    mechanique de la viellesse    //////
//entre 12 et 82 ans
if (randomAge < 18){
    randomFo -= 1;
    randomSag -= 1;
}
if( randomAge < 20){
    randomSag -= 1;
}
if (randomAge >= 40 && randomAge < 50){
    randomCo -= 1;
}
if (randomAge >= 50 && randomAge < 60){
    randomCo -= 2;
}
if (randomAge >= 60 && randomAge < 75){
    randomCo -= 3;
    randomFo -=1;
}
if (randomAge >= 75){
    randomCo -= 4;
    randomFo -= 1;
}

//////    ecriture des stats    //////
    align.innerText = alignementList[randomalign];

    fo.innerText = randomFo + 8;
    dex.innerText = randomDex + 8;
    co.innerText = randomCo + 8;
    int.innerText = randomInt + 8;
    sag.innerText = randomSag + 8;
    cha.innerText = randomCha + 8;
}