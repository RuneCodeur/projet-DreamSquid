let raceM ={ 
    'humain' : {'fo':0, 'dex':0, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'demi-elfe' : {'fo':0, 'dex':1, 'co':0, 'int':0, 'sag':1, 'cha':1},
    'elfe' : {'fo':-1, 'dex':1, 'co':0, 'int':1, 'sag':0, 'cha':2},
    'elfe des bois' : {'fo':0, 'dex':2, 'co':1, 'int':0, 'sag':1, 'cha':-1},
    'haut elfe' : {'fo':-1, 'dex':0, 'co':-1, 'int':3, 'sag':-1, 'cha':2},
    'nain' : {'fo':1, 'dex':0, 'co':2, 'int':0, 'sag':0, 'cha':-1},
    'demi-orque' : {'fo':1, 'dex':0, 'co':0, 'int':0, 'sag':1, 'cha':-1},
    'orque' : {'fo':2, 'dex':0, 'co':0, 'int':-2, 'sag':0, 'cha':-2},
    'ogre' : {'fo':4, 'dex':0, 'co':2, 'int':-2, 'sag':-2, 'cha':-2},
    'gobelin' : {'fo':-2, 'dex':0, 'co':3, 'int':0, 'sag':1, 'cha':-2},
    'elfe noir' : {'fo':0, 'dex':0, 'co':1, 'int':1, 'sag':0, 'cha':-1},
    'gnome' : {'fo':-2, 'dex':0, 'co':1, 'int':2, 'sag':0, 'cha':0},
    'hobbit' : {'fo':-1, 'dex':1, 'co':2, 'int':0, 'sag':-1, 'cha':0},
    'homme-lézard' : {'fo':0, 'dex':1, 'co':3, 'int':-1, 'sag':0, 'cha':0},
    };
let raceF ={
    'humaine' : {'fo':0, 'dex':0, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'demi-elfe' : {'fo':0, 'dex':1, 'co':0, 'int':0, 'sag':1, 'cha':1},
    'elfe' : {'fo':-1, 'dex':1, 'co':0, 'int':1, 'sag':0, 'cha':2},
    'elfe des bois' : {'fo':0, 'dex':2, 'co':1, 'int':0, 'sag':1, 'cha':-1},
    'haute elfe' : {'fo':-1, 'dex':0, 'co':-1, 'int':3, 'sag':-1, 'cha':2},
    'naine' : {'fo':1, 'dex':0, 'co':2, 'int':0, 'sag':0, 'cha':-1},
    'demi-orque' : {'fo':1, 'dex':0, 'co':0, 'int':0, 'sag':1, 'cha':-1},
    'orque' : {'fo':2, 'dex':0, 'co':0, 'int':-2, 'sag':0, 'cha':-2},
    'ogresse' : {'fo':4, 'dex':0, 'co':2, 'int':-2, 'sag':-2, 'cha':-2},
    'gobeline' : {'fo':-2, 'dex':0, 'co':3, 'int':0, 'sag':1, 'cha':-2},
    'elfe noir' : {'fo':0, 'dex':0, 'co':1, 'int':1, 'sag':0, 'cha':-1},
    'gnome' : {'fo':-2, 'dex':0, 'co':1, 'int':2, 'sag':0, 'cha':0},
    'hobbit' : {'fo':-1, 'dex':1, 'co':2, 'int':0, 'sag':-1, 'cha':0},
    'femme-lézard' : {'fo':0, 'dex':1, 'co':3, 'int':-1, 'sag':0, 'cha':0},
};
let classM ={
    'barbare' : {'fo':2, 'dex':0, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'clerc' : {'fo':0, 'dex':0, 'co':0, 'int':0, 'sag':2, 'cha':0},
    'paladin' : {'fo':1, 'dex':0, 'co':0, 'int':0, 'sag':1, 'cha':0},
    'voleur' : {'fo':0, 'dex':2, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'magicien' : {'fo':0, 'dex':0, 'co':0, 'int':2, 'sag':0, 'cha':0},
    'druide' : {'fo':0, 'dex':0, 'co':2, 'int':0, 'sag':0, 'cha':0},
    'moine' : {'fo':0, 'dex':1, 'co':0, 'int':0, 'sag':1, 'cha':0},
    'guerrier' : {'fo':1, 'dex':0, 'co':1, 'int':0, 'sag':0, 'cha':0},
    'pirate' : {'fo':0, 'dex':1, 'co':1, 'int':0, 'sag':0, 'cha':0},
    'rodeur' : {'fo':1, 'dex':1, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'barde' : {'fo':0, 'dex':0, 'co':0, 'int':0, 'sag':0, 'cha':2},
    'menestrel' : {'fo':0, 'dex':0, 'co':0, 'int':0, 'sag':0, 'cha':2},
    'assassin' : {'fo':0, 'dex':2, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'ingenieur' : {'fo':0, 'dex':1, 'co':0, 'int':1, 'sag':0, 'cha':0},
    'mage' : {'fo':0, 'dex':0, 'co':0, 'int':1, 'sag':1, 'cha':0},
    'bourgeois' : {'fo':0, 'dex':0, 'co':0, 'int':1, 'sag':0, 'cha':1},
    'marchand' : {'fo':0, 'dex':0, 'co':0, 'int':1, 'sag':0, 'cha':1},
    'prêtre' : {'fo':0, 'dex':0, 'co':1, 'int':0, 'sag':1, 'cha':0},
    'ranger' : {'fo':1, 'dex':1, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'nécromancien' : {'fo':0, 'dex':0, 'co':0, 'int':2, 'sag':0, 'cha':0},
    'alchimiste' : {'fo':0, 'dex':1, 'co':0, 'int':1, 'sag':0, 'cha':0},
    'chaman' : {'fo':0, 'dex':0, 'co':2, 'int':0, 'sag':0, 'cha':0},
};
let classF ={
    'barbare' : {'fo':2, 'dex':0, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'clerc' : {'fo':0, 'dex':0, 'co':0, 'int':0, 'sag':2, 'cha':0},
    'paladine' : {'fo':1, 'dex':0, 'co':0, 'int':0, 'sag':1, 'cha':0},
    'voleuse' : {'fo':0, 'dex':2, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'magicienne' : {'fo':0, 'dex':0, 'co':0, 'int':2, 'sag':0, 'cha':0},
    'druide' : {'fo':0, 'dex':0, 'co':2, 'int':0, 'sag':0, 'cha':0},
    'moniale' : {'fo':0, 'dex':1, 'co':0, 'int':0, 'sag':1, 'cha':0},
    'guerrière' : {'fo':1, 'dex':0, 'co':1, 'int':0, 'sag':0, 'cha':0},
    'pirate' : {'fo':0, 'dex':1, 'co':1, 'int':0, 'sag':0, 'cha':0},
    'rodeuse' : {'fo':1, 'dex':1, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'barde' : {'fo':0, 'dex':0, 'co':0, 'int':0, 'sag':0, 'cha':2},
    'menestrelle' : {'fo':0, 'dex':0, 'co':0, 'int':0, 'sag':0, 'cha':2},
    'assassine' : {'fo':0, 'dex':2, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'ingenieur' : {'fo':0, 'dex':1, 'co':0, 'int':1, 'sag':0, 'cha':0},
    'mage' : {'fo':0, 'dex':0, 'co':0, 'int':1, 'sag':1, 'cha':0},
    'bourgeoise' : {'fo':0, 'dex':0, 'co':0, 'int':1, 'sag':0, 'cha':1},
    'marchande' : {'fo':0, 'dex':0, 'co':0, 'int':1, 'sag':0, 'cha':1},
    'prêtresse' : {'fo':0, 'dex':0, 'co':1, 'int':0, 'sag':1, 'cha':0},
    'ranger' : {'fo':1, 'dex':1, 'co':0, 'int':0, 'sag':0, 'cha':0},
    'nécromancienne' : {'fo':0, 'dex':0, 'co':0, 'int':2, 'sag':0, 'cha':0},
    'alchimiste' : {'fo':0, 'dex':1, 'co':0, 'int':1, 'sag':0, 'cha':0},
    'chamane' : {'fo':0, 'dex':0, 'co':2, 'int':0, 'sag':0, 'cha':0},
};
let maitrise = ['la magie du feu', 'la magie du froid', 'la magie démoniaque', "l'art de se camoufler comme personne", "l'art du lancer de couteau", "le tir à l'arc comme personne", "la cuisine comme personne", "l'art de la bagarre", "parfaitement son arme", "les arts martiaux"];
let armor= ["une armure de plaque", "des habits de pouilleux", "des vetements enchantés", "une tenue de garde", "une armure draconnique", "l'équipement classique d'un aventurier", "une armure rouillé", "des vetements de paysans", "des vetements de riche", "une belle armure ornée"];
let atirail= ["une sacoche", "un sac à dos", "une cape", "une bague enchantée", "un bandana", "un collier magique", "des breloques mystique", "un superbe casque", "un grimoire"];
let music= ["une flûte", "une flûte de pan", "un tambour", "un luth", "une cornemuse", "une lyre", "un violon"];
let weapon= ["d'un arc magique", "d'un merlin", "d'un couteau de cuisine", "d'un arc avec un carquois et des flèches", "d'une simple épée", "d'un bâton de combat", "d'une épée et d'un bouclier", "d'une épée à deux mains", "d'une dague", "de deux dagues de combats", "d'une épée fine", "d'un bâton magique", "d'une lance", "d'un marteau de guerre", "d'une grosse hache de guerre", "d'une hachette de combat", "d'une hachette et d'un bouclier", "d'une hachette et d'une épée", "d'une hachette et d'une dague", "de deux hachettes de combat", "d'une masse et d'un bouclier", "d'une masse", "d'un gourdin", "d'un fleuret", "d'un sabre", "d'une épée magique", "de deux épées", "de deux épées magique", "d'une épée et d'une dague de combat", "d'une lance magique", "d'un fléau d'arme", "d'un fléau d'arme et d'un bouclier", "d'une hallebarde", "de ses propres poings"];
let tailleF= ["très grande", "de taille moyenne", "petite"];
let tailleM= ["très grand", "de taille moyen", "petit"];
let muscle= ["beaucoup de muscle", "un peu de muscle", "un corps fin", "un peu de ventre", "un corps svelte"];
let boobs= ["une petite poitrine", "une poitrine avantageuse", "une grosse poitrine", "une absence complète de poitrine"];
let face= ["un visage carré", "un visage fin", "un visage rond", "un visage ovale", "les joues creuses", "un visage crispé", "un visage allongé", "un visage lisse"];
let distinct= ["une cicatrice", "recouvert de cicatrices", "des tâches de rousseurs", "un piercing à l'oreille", "un piercing au nez", "un piercing aux oreilles", "un piercing aux oreilles et au nez", "un piercing à l'oreille et au nez", "plein de piercing partout", "un long nez", "un gros nez", "un petit nez"];
let colorEyes= ["vert", "marron", "bleu", "gris", "vairon", "jaune", "rouge", "violet" ];
let formEyes= ["en amande", "espacés", "de forme rondes", "menaçant", "perçant", "bridés", "rapprochés"];
let cachEye= ["cache-oeil", "bandeau"];
let MultiCachEye= ["un double cache-oeil", "un bandeau", "un masque", "un demi-masque"];
let Direction= ["gauche", "droit"];
let colorHairM= ["châtain", "blond", "roux", "brun"];
let colorHairF= ["châtain", "blonde", "rousse", "brune"];
let hair= ["un chignon", "un mohawk", "des cheveux en bataille", "une queue de cheval", "des cheveux courts", "des cheveux frisés", "de long cheveux", "de long cheveux ondulés", "de long cheveux frisés", "la coupe affro"];
let beard= ["pas de barbe ni de moustache", "une barbe collier", "la moustache", "une moustache bien fourni","une petite moustache", "le bouc", "des rouflaquettes", "une barbe tressé", "une très longue barbe", "une barbe bien fournis", "une barbe épaise", "une barbe de 3 jours"];
let comportment= ["qui a les mains baladeuses", "qui a la critique facile","qui n'est pas très doué avec les autres", "qui se fait facilement detester par les autres", " qui a des problèmes avec ses parents", "un peu flemmarde","qui a beaucoup de préjugés"," qui ne sais pas lire","très tactile", "qui sait reconnaitre la valeur des choses"];
let emotion= ["un peu simplet","un peu colèrique"," un peu bourru", "tout le temps en train de sourire", " tout le temps stoïque"];
let alignementList= ["loyal bon", "neutre bon", "chaotique bon", " loyal neutre", "neutre", "chaotique neutre", "loyal mauvais", "neutre mauvais", "chaotique mauvais"];

exports.description = (req, res, next) => {
    try{
        let randomRaceM = Math.floor(Math.random() * Object.keys(raceM).length);
        let randomRaceF = Math.floor(Math.random() * Object.keys(raceF).length);
        let randomClassF = Math.floor(Math.random() * Object.keys(classM).length);
        let randomClassM = Math.floor(Math.random() * Object.keys(classF).length);
        let randomSex = Math.floor(Math.random() *2);
        let randomAge = Math.floor(Math.random() * 70 + 12);
        let randomMaitrise = Math.floor(Math.random() * maitrise.length);
        let randomArmor = Math.floor(Math.random() * armor.length);
        let randomAtiral = Math.floor(Math.random() * atirail.length);
        let randomWeapon = Math.floor(Math.random() * weapon.length);

        let loveMusic = Math.floor(Math.random() *5);
        let masterRandomClass = Math.floor(Math.random() *19);
        let masterRandomCorp = Math.floor(Math.random() *19);
        let masterRandomFace = Math.floor(Math.random() *19);
        let masterRandompoil = Math.floor(Math.random() *19);
        let masterRandomComp = Math.floor(Math.random() *19);

        let randomalign = Math.floor(Math.random() * alignementList.length);

        let randomFo = Math.floor(Math.random() * 7);
        let randomDex = Math.floor(Math.random() * 7);
        let randomCo = Math.floor(Math.random() * 7);
        let randomInt = Math.floor(Math.random() * 7);
        let randomSag = Math.floor(Math.random() * 7);
        let randomCha = Math.floor(Math.random() * 7);

        let descri = 'Imagine : ' ;

        let fo = 8 + randomFo ;
        let dex = 8 + randomDex ;
        let co = 8 + randomCo ;
        let int = 8 + randomInt ;
        let sag = 8 + randomSag ;
        let cha = 8 + randomCha ;

        let alignement = '' ;

        //////    description femme    //////
        if(randomSex === 0){
            //intro
            if (masterRandomClass === 0){
                descri = descri + "<\n\n>" + "Une " + Object.keys(raceF)[randomRaceF] + " de " + randomAge + " ans qui maitrise " + maitrise[randomMaitrise] + " !";
            }
            else{
                descri= descri + "\n\n" + "Une "+ Object.keys(classF)[randomClassF] + ' ' + Object.keys(raceF)[randomRaceF] + " de " + randomAge + " ans qui maitrise " + maitrise[randomMaitrise] + " !";
            }

            //si elle a un instument de musique
            if(Object.keys(classF)[randomClassF] === 'barde' || Object.keys(classF)[randomClassF] === 'menestrelle' || loveMusic == 0){
                let randomMusic = Math.floor(Math.random() * music.length);
                descri= descri + "\n\n" + "Elle porte " + armor[randomArmor] + " avec " + atirail[randomAtiral] + " et " + music[randomMusic] + ", et elle est équipé " + weapon[randomWeapon] + ".";
            }
            else{
                descri= descri + "\n\n" + "Elle porte " + armor[randomArmor] + " avec " + atirail[randomAtiral] + ", et elle est équipé " + weapon[randomWeapon] + ".";
            }

            //description du corps
            if(masterRandomCorp > 0){
                let randomTaille = Math.floor(Math.random() * tailleF.length);
                let randomBoobs = Math.floor(Math.random() * boobs.length);
                let randomMuscle = Math.floor(Math.random() * muscle.length);
                descri= descri + "\n\n" + "Elle est " + tailleF[randomTaille] + " avec " + muscle[randomMuscle]+ " et " + boobs[randomBoobs] + ".";
            }

            //description du visage
            if(masterRandomFace > 0){
                let randomeye =  Math.floor(Math.random() * 5); // rajouter la possibilité que le perso aie le visage completement recouvert ???
                let randomFace = Math.floor(Math.random() * face.length);
                let randomDistinct = Math.floor(Math.random() * distinct.length);
                //sans yeux
                if(randomeye === 0){
                    let randomMultiCachEye = Math.floor(Math.random() * MultiCachEye.length);
                    descri= descri + "\n\n" + "Elle a " + face[randomFace] + " et " + distinct[randomDistinct] + ". Elle a ses yeux complètement recouvert par " + MultiCachEye[randomMultiCachEye] + ".";
                }
                //manque 1 oeil
                else if(randomeye === 1){
                    let randomDirection = Math.floor(Math.random() * Direction.length);
                    let randomCachEye = Math.floor(Math.random() * cachEye.length);
                    let randomColorEyes = Math.floor(Math.random() *colorEyes.length);
                    if(colorEyes[randomColorEyes] === 'vairon'){
                        descri= descri + "\n\n" + "Elle a " + face[randomFace] + " et " + distinct[randomDistinct] + ". Son oeil " + Direction[randomDirection] + " est marron, tandis que son autre oeil est recouvert d'un " + cachEye[randomCachEye] + ".";
                    }
                    else{
                        descri= descri + "\n\n" + "Elle a " + face[randomFace] + " et " + distinct[randomDistinct] + ". Son oeil " + Direction[randomDirection] + " est " + colorEyes[randomColorEyes] + ", tandis que son autre oeil est recouvert d'un " + cachEye[randomCachEye] + ".";
                    }
                }
                //tout les yeux
                else{
                    let randomColorEyes = Math.floor(Math.random() * colorEyes.length);
                    let randomformEyes = Math.floor(Math.random() * formEyes.length);
                    descri= descri + "\n\n" + "Elle a " + face[randomFace] + " et " + distinct[randomDistinct] + ". Ses yeux sont " + colorEyes[randomColorEyes] + " et " + formEyes[randomformEyes] + ".";
                }
            }

            //description cheveux
            if (masterRandompoil > 0 || Object.keys(raceF)[randomRaceF] != 'femme-lézard'){
                let randomChauve = Math.floor(Math.random() * 5);
                //si elle est chauve
                if(randomChauve === 0){
                    descri= descri + "\n\n" + "Elle est complètement chauve.";
                }
                else{
                    let randomColorHair = Math.floor(Math.random() * colorHairF.length);
                    let randomHair = Math.floor(Math.random() * hair.length);
                    descri= descri + "\n\n" + "Elle est " + colorHairF[randomColorHair] + " et porte " + hair[randomHair] + "."; 
                }
            }

            //description du comportement
            if(masterRandomComp > 0){
                let randomComportment = Math.floor(Math.random() * comportment.length);
                let randomEmotion = Math.floor(Math.random() * emotion.length);
                descri= descri + "\n\n" + "C'est une personne " + comportment[randomComportment] + ", et qui est " + emotion[randomEmotion] + ".";
            }   
        }

        //////    description homme    //////
        if (randomSex === 1){
            //intro
            if(masterRandomClass === 0){
                descri= descri + "\n\n" + "Un " + Object.keys(raceM)[randomRaceM] + " de " + randomAge + " ans qui maitrise " + maitrise[randomMaitrise] + " !";
            }
            else{
                descri= descri + "\n\n" + "Un "+ Object.keys(classM)[randomClassM] +' ' + Object.keys(raceM)[randomRaceM] + " de " + randomAge + " ans qui maitrise " + maitrise[randomMaitrise] + " !";
            }

            // si il a un instrument de musique
            if(Object.keys(classM)[randomClassM] === 'barde' || Object.keys(classM)[randomClassM ] === 'menestrel' || loveMusic == 0){
                let randomMusic = Math.floor(Math.random() * music.length);
                descri= descri + "\n\n" + "Il porte " + armor[randomArmor] + " avec " + atirail[randomAtiral] +" et " + music[randomMusic] + ", et il est équipé " + weapon[randomWeapon] + ".";
            }
            else{
                descri= descri + "\n\n" + "Il porte " + armor[randomArmor] + " avec " + atirail[randomAtiral] + ", et il est équipé " + weapon[randomWeapon] + ".";
            }

            //description du corps
            if(masterRandomCorp > 0){
                let randomTaille = Math.floor(Math.random() * tailleM.length);
                let randomMuscle = Math.floor(Math.random() * muscle.length);
                descri= descri + "\n\n" + "Il est " + tailleM[randomTaille] + " avec " + muscle[randomMuscle] + ".";
            }

            //description du visage
            if(masterRandomFace > 0){
                let randomeye =  Math.floor(Math.random() * 5);
                let randomFace = Math.floor(Math.random() * face.length);
                let randomDistinct = Math.floor(Math.random() * distinct.length);
                //sans yeux
                if(randomeye === 0){
                    let randomMultiCachEye = Math.floor(Math.random() * MultiCachEye.length);
                    descri= descri + "\n\n" + "Il a " + face[randomFace] + " et " + distinct[randomDistinct] + ". Il a ses yeux complètement recouvert par " + MultiCachEye[randomMultiCachEye] + ".";
                }
                //manque 1 oeil
                else if(randomeye === 1){
                    let randomDirection = Math.floor(Math.random() * Direction.length);
                    let randomCachEye = Math.floor(Math.random() * cachEye.length);
                    let randomColorEyes = Math.floor(Math.random() * colorEyes.length);
                    if(colorEyes[randomColorEyes] === 'verron'){
                        descri= descri + "\n\n" + "Il a " + face[randomFace] + " et " + distinct[randomDistinct] + ". Son oeil " + Direction[randomDirection] + " est marron, tandis que son autre oeil est recouvert d'un " + cachEye[randomCachEye] + ".";
                    }
                    else{
                        descri= descri + "\n\n" + "Il a " + face[randomFace] + " et " + distinct[randomDistinct] + ". Son oeil " + Direction[randomDirection] + " est " + colorEyes[randomColorEyes] + ", tandis que son autre oeil est recouvert d'un " + cachEye[randomCachEye] + ".";
                    }
                }
                //tout les yeux
                else{
                    let randomColorEyes = Math.floor(Math.random() * colorEyes.length);
                    let randomformEyes = Math.floor(Math.random() * formEyes.length);
                    descri= descri + "\n\n" + "Il a " + face[randomFace] + " et " + distinct[randomDistinct] + ". Ses yeux sont " + colorEyes[randomColorEyes] + " et " + formEyes[randomformEyes] + ".";
                }
            }

            //description des cheveux et barbe
            if (masterRandompoil > 0 && Object.keys(raceM)[randomRaceM] != 'homme-lézard'){
                let randomChauve = Math.floor(Math.random() * 5);
                //si il est chauve
                if(randomChauve === 0){
                    let randomBeard = Math.floor(Math.random() * beard.length);
                    //si il est chauve et sans barbe
                    if (randomBeard === 0){
                        descri= descri + "\n\n" + "Il est completement chauve, sans barbe ni moustache.";
                    }
                    //si il est juste chauve
                    else{
                        descri= descri + "\n\n" + "Il est completement chauve et porte " + beard[randomBeard] + ".";
                    }
                }
                else{
                    let randomColorHair = Math.floor(Math.random() * colorHairM.length);
                    let randomHair = Math.floor(Math.random() * hair.length);
                    let randomBeard = Math.floor(Math.random() * beard.length);
                    descri= descri + "\n\n" + "Il est " + colorHairM[randomColorHair] + " et porte " + hair[randomHair] + " et " + beard[randomBeard] + ".";
                }
            }

            //description du comportement
            if(masterRandomComp > 0){
                let randomComportment = Math.floor(Math.random() * comportment.length);
                let randomEmotion = Math.floor(Math.random() * emotion.length);
                descri= descri + "\n\n" + "C'est une personne " + comportment[randomComportment] + ", et qui est " + emotion[randomEmotion] + ".";
            }
        }

        //////    bonus femme    //////
        if(randomSex == 0){
            fo = fo + raceF[Object.keys(raceF)[randomRaceF]]['fo'] + classF[Object.keys(classF)[randomClassF]]['fo'];
            dex = dex + raceF[Object.keys(raceF)[randomRaceF]]['dex'] + classF[Object.keys(classF)[randomClassF]]['dex'];
            co = co + raceF[Object.keys(raceF)[randomRaceF]]['co'] + classF[Object.keys(classF)[randomClassF]]['co'];
            int = int + raceF[Object.keys(raceF)[randomRaceF]]['int'] + classF[Object.keys(classF)[randomClassF]]['int'];
            sag = sag + raceF[Object.keys(raceF)[randomRaceF]]['sag'] + classF[Object.keys(classF)[randomClassF]]['sag'];
            cha = cha + raceF[Object.keys(raceF)[randomRaceF]]['cha'] + classF[Object.keys(classF)[randomClassF]]['cha'];
                
            
        }
        //////    bonus homme    //////
        else{
            fo = fo + raceM[Object.keys(raceM)[randomRaceM]]['fo'] + classM[Object.keys(classM)[randomClassM]]['fo'];
            dex = dex + raceM[Object.keys(raceM)[randomRaceM]]['dex'] + classM[Object.keys(classM)[randomClassM]]['dex'];
            co = co + raceM[Object.keys(raceM)[randomRaceM]]['co'] + classM[Object.keys(classM)[randomClassM]]['co'];
            int = int + raceM[Object.keys(raceM)[randomRaceM]]['int'] + classM[Object.keys(classM)[randomClassM]]['int'];
            sag = sag + raceM[Object.keys(raceM)[randomRaceM]]['sag'] + classM[Object.keys(classM)[randomClassM]]['sag'];
            cha = cha + raceM[Object.keys(raceM)[randomRaceM]]['cha'] + classM[Object.keys(classM)[randomClassM]]['cha'];
        }

        //////    calcul de la viellesse (entre 12 et 82 ans)   //////
        if (randomAge < 18){
            fo -= 1;
            sag -= 1;
        }
        else if( randomAge < 20){
           sag -= 1;
        }
        else if (randomAge >= 40 && randomAge < 50){
            co -= 1;
        }
        else if (randomAge >= 50 && randomAge < 60){
            co -= 2;
        }
        else if (randomAge >= 60 && randomAge < 75){
            fo -=1;
            co -= 3;
        }
        else if (randomAge >= 75){
            fo -= 2;
            co -= 4;
        }
        
        //////    alignement    //////
        alignement = alignementList[randomalign];

        //RENVOIE LE BAZAR
        res.locals.result = {
            description : descri,
            alignement : alignement,
            stats : {
                fo: fo,
                dex: dex,
                co: co,
                int: int,
                sag: sag,
                cha: cha,
            },
        }
        return next()
    }    
    catch(e){
        console.log(e)
        return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
    }
};