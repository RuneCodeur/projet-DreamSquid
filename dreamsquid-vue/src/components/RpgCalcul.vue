<template>
    <div id="rpgGen">
        <p class="descriptionGen"> Clique sur le bouton, et le générateur te donnera la description aléatoire d'un personnage de JDR, avec ses propre stats et son alignement !</p>
        
        <div id="description">
            <div v-if="descriGen === ''">Clique sur le bouton, si tu veux une description !</div>
            <div v-if="descriGen != ''">Imagine : <br> {{descriGen}}</div>
            <div v-if="descriEquip != ''">{{descriEquip}}</div>
            <div v-if="descriCorps != ''">{{descriCorps}}</div>
            <div v-if="descriFace != ''">{{descriFace}}</div>
            <div v-if="descriPoils != ''">{{descriPoils}}</div>
            <div v-if="descriExtra != ''">{{descriExtra}}</div>
        </div>

        <div id="titleAlign">Alignement</div>
        <div id="align">{{align}}</div>

        <div id="titleStat">Statistiques</div>
        <ul>
            <li>
                <p>Force</p>
                <div>{{fo}}</div>
            </li>
            <li>
                <p>Dexterité</p> 
                <div>{{dex}}</div>
            </li>
            <li>
                <p>Constitution</p> 
                <div>{{co}}</div>
            </li>
            <li>
                <p>Intelligence</p> 
                <div>{{int}}</div>
            </li>
            <li>
                <p>Sagesse</p> 
                <div>{{sag}}</div>
            </li>
            <li>
                <p>Charisme</p> 
                <div>{{cha}}</div>
            </li>
        </ul>
    </div>
  <input id="random" type="button" value="Un autre !" @click="calcul()">    
</template>

<script>
export default {
    data() {
        return{
            descriGen:'',
            descriEquip:'',
            descriCorps:'',
            descriFace:'',
            descriPoils:'',
            descriExtra:'',
            align:'neutre',
            fo:'0',
            dex:'0',
            co:'0',
            int:'0',
            sag:'0',
            cha:'0',

            replaceRaceM:{ 
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
                },
            replaceRaceF:{
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
            },
            replaceClassM:{
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
            },
            replaceClassF:{
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
            },
            maitrise: ['la magie du feu', 'la magie du froid', 'la magie démoniaque', "l'art de se camoufler comme personne", "l'art du lancer de couteau", "le tir à l'arc comme personne", "la cuisine comme personne", "l'art de la bagarre", "parfaitement son arme", "les arts martiaux"],
            armor: ["une armure de plaque", "des habits de pouilleux", "des vetements enchantés", "une tenue de garde", "une armure draconnique", "l'équipement classique d'un aventurier", "une armure rouillé", "des vetements de paysans", "des vetements de riche", "une belle armure ornée"],
            atirail: ["une sacoche", "un sac à dos", "une cape", "une bague enchantée", "un bandana", "un collier magique", "des breloques mystique", "un superbe casque", "un grimoire"],
            music: ["une flûte", "une flûte de pan", "un tambour", "un luth", "une cornemuse", "une lyre", "un violon"],
            weapon: ["d'un arc magique", "d'un merlin", "d'un couteau de cuisine", "d'un arc avec un carquois et des flèches", "d'une simple épée", "d'un bâton de combat", "d'une épée et d'un bouclier", "d'une épée à deux mains", "d'une dague", "de deux dagues de combats", "d'une épée fine", "d'un bâton magique", "d'une lance", "d'un marteau de guerre", "d'une grosse hache de guerre", "d'une hachette de combat", "d'une hachette et d'un bouclier", "d'une hachette et d'une épée", "d'une hachette et d'une dague", "de deux hachettes de combat", "d'une masse et d'un bouclier", "d'une masse", "d'un gourdin", "d'un fleuret", "d'un sabre", "d'une épée magique", "de deux épées", "de deux épées magique", "d'une épée et d'une dague de combat", "d'une lance magique", "d'un fléau d'arme", "d'un fléau d'arme et d'un bouclier", "d'une hallebarde", "de ses propres poings"],
            tailleF: ["très grande", "de taille moyenne", "petite"],
            tailleM: ["très grand", "de taille moyen", "petit"],
            muscle: ["beaucoup de muscle", "un peu de muscle", "un corps fin", "un peu de ventre", "un corps svelte"],
            boobs: ["une petite poitrine", "une poitrine avantageuse", "une grosse poitrine", "une absence complète de poitrine"],
            face: ["un visage carré", "un visage fin", "un visage rond", "un visage ovale", "les joues creuses", "un visage crispé", "un visage allongé", "un visage lisse"],
            distinct: ["une cicatrice", "recouvert de cicatrices", "des tâches de rousseurs", "un piercing à l'oreille", "un piercing au nez", "un piercing aux oreilles", "un piercing aux oreilles et au nez", "un piercing à l'oreille et au nez", "plein de piercing partout", "un long nez", "un gros nez", "un petit nez"],
            colorEyes: ["vert", "marron", "bleu", "gris", "vairon", "jaune", "rouge", "violet" ],
            formEyes: ["en amande", "espacés", "de forme rondes", "menaçant", "perçant", "bridés", "rapprochés"],
            cachEye: ["cache-oeil", "bandeau"],
            MultiCachEye: ["un double cache-oeil", "un bandeau", "un masque", "un demi-masque"],
            Direction: ["gauche", "droit"],
            colorHairM: ["châtain", "blond", "roux", "brun"],
            colorHairF: ["châtain", "blonde", "rousse", "brune"],
            hair: ["un chignon", "un mohawk", "des cheveux en bataille", "une queue de cheval", "des cheveux courts", "des cheveux frisés", "de long cheveux", "de long cheveux ondulés", "de long cheveux frisés", "la coupe affro"],
            beard: ["pas de barbe ni de moustache", "une barbe collier", "la moustache", "une moustache bien fourni","une petite moustache", "le bouc", "des rouflaquettes", "une barbe tressé", "une très longue barbe", "une barbe bien fournis", "une barbe épaise", "une barbe de 3 jours"],
            comportment: ["qui a les mains baladeuses", "qui a la critique facile","qui n'est pas très doué avec les autres", "qui se fait facilement detester par les autres", " qui a des problèmes avec ses parents", "un peu flemmarde","qui a beaucoup de préjugés"," qui ne sais pas lire","très tactile", "qui sait reconnaitre la valeur des choses"],
            emotion: ["un peu simplet","un peu colèrique"," un peu bourru", "tout le temps en train de sourire", " tout le temps stoïque"],
            alignementList: ["loyal bon", "neutre bon", "chaotique bon", " loyal neutre", "neutre", "chaotique neutre", "loyal mauvais", "neutre mauvais", "chaotique mauvais"],
        }
    },
    methods: {

        calcul(){
            let randomRaceM = Math.floor(Math.random() * Object.keys(this.replaceRaceM).length);
            let randomRaceF = Math.floor(Math.random() * Object.keys(this.replaceRaceF).length);
            let randomClassF = Math.floor(Math.random() * Object.keys(this.replaceClassM).length);
            let randomClassM = Math.floor(Math.random() * Object.keys(this.replaceClassF).length);
            let randomSex = Math.floor(Math.random() *2);
            let randomAge = Math.floor(Math.random() * 70 + 12);
            let randomMaitrise = Math.floor(Math.random() * this.maitrise.length);
            let randomArmor = Math.floor(Math.random() * this.armor.length);
            let randomAtiral = Math.floor(Math.random() * this.atirail.length);
            let randomWeapon = Math.floor(Math.random() * this.weapon.length);

            let loveMusic = Math.floor(Math.random() *5);
            let masterRandomClas = Math.floor(Math.random() *19);
            let masterRandomCorp = Math.floor(Math.random() *19);
            let masterRandomFace = Math.floor(Math.random() *19);
            let masterRandompoil = Math.floor(Math.random() *19);
            let masterRandomComp = Math.floor(Math.random() *19);

            let randomalign = Math.floor(Math.random() * this.alignementList.length);
            let randomFo = Math.floor(Math.random() * 7);
            let randomDex = Math.floor(Math.random() * 7);
            let randomCo = Math.floor(Math.random() * 7);
            let randomInt = Math.floor(Math.random() * 7);
            let randomSag = Math.floor(Math.random() * 7);
            let randomCha = Math.floor(Math.random() * 7);

            //////    remis à zero du génerateur    //////
            this.descriGen = "";
            this.descriEquip = "";
            this.descriCorps = "";
            this.descriFace = "";
            this.descriPoils = "";
            this.descriExtra = "";

            //////    description femme    //////
            if(randomSex === 0){
                //intro sans classe
                if (masterRandomClas === 0){
                    this.descriGen = "Une " + Object.keys(this.replaceRaceF)[randomRaceF] + " de " + randomAge + " ans qui maitrise " + this.maitrise[randomMaitrise] + " !";
                }
                // intro avec classe
                if (masterRandomClas > 0){
                    this.descriGen = "Une "+ Object.keys(this.replaceClassF)[randomClassF] + ' ' + Object.keys(this.replaceRaceF)[randomRaceF] + " de " + randomAge + " ans qui maitrise " + this.maitrise[randomMaitrise] + " !";
                }
                //description general
                this.descriEquip = "Elle porte " + this.armor[randomArmor] + " avec " + this.atirail[randomAtiral] + ", et elle est équipé " + this.weapon[randomWeapon] + ".";
                //si elle a un instument de musique
                if(Object.keys(this.replaceClassF)[randomClassF] === 'barde' || Object.keys(this.replaceClassF)[randomClassF ] === 'menestrelle' || loveMusic == 0){
                    let randomMusic = Math.floor(Math.random() * this.music.length);
                    this.descriEquip = "Elle porte " + this.armor[randomArmor] + " avec " + this.atirail[randomAtiral] + " et " + this.music[randomMusic] + ", et elle est équipé " + this.weapon[randomWeapon] + ".";
                }
                //description du corps
                if(masterRandomCorp > 0){
                    let randomTaille = Math.floor(Math.random() * this.tailleF.length);
                    let randomBoobs = Math.floor(Math.random() * this.boobs.length);
                    let randomMuscle = Math.floor(Math.random() * this.muscle.length);
                    this.descriCorps = "Elle est " + this.tailleF[randomTaille] + " avec " + this.muscle[randomMuscle]+ " et " + this.boobs[randomBoobs] + ".";
                }
                //description du visage
                if(masterRandomFace > 0){
                    let randomeye =  Math.floor(Math.random() * 5); // rajouter la possibilité que le perso aie le visage completement recouvert ???
                    let randomFace = Math.floor(Math.random() * this.face.length);
                    let randomDistinct = Math.floor(Math.random() * this.distinct.length);
                    //sans yeux
                    if(randomeye === 0){
                        let randomMultiCachEye = Math.floor(Math.random() * this.MultiCachEye.length);
                        this.descriFace = "Elle a " + this.face[randomFace] + " et " + this.distinct[randomDistinct] + ". Elle a ses yeux complètement recouvert par " + this.MultiCachEye[randomMultiCachEye] + ".";
                    //manque 1 oeil
                    }else if(randomeye === 1){
                        let randomDirection = Math.floor(Math.random() * this.Direction.length);
                        let randomCachEye = Math.floor(Math.random() * this.cachEye.length);
                        let randomColorEyes = Math.floor(Math.random() * this.colorEyes.length);
                        if(this.colorEyes[randomColorEyes] === 'vairon'){
                            this.descriFace = "Elle a " + this.face[randomFace] + " et " + this.distinct[randomDistinct] + ". Son oeil " + this.Direction[randomDirection] + " est marron, tandis que son autre oeil est recouvert d'un " + this.cachEye[randomCachEye] + ".";
                        }else{
                            this.descriFace = "Elle a " + this.face[randomFace] + " et " + this.distinct[randomDistinct] + ". Son oeil " + this.Direction[randomDirection] + " est " + this.colorEyes[randomColorEyes] + ", tandis que son autre oeil est recouvert d'un " + this.cachEye[randomCachEye] + ".";
                        }
                    //tout les yeux
                    }else if(randomeye >= 2){
                        let randomColorEyes = Math.floor(Math.random() * this.colorEyes.length);
                        let randomformEyes = Math.floor(Math.random() * this.formEyes.length);
                        this.descriFace = "Elle a " + this.face[randomFace] + " et " + this.distinct[randomDistinct] + ". Ses yeux sont " + this.colorEyes[randomColorEyes] + " et " + this.formEyes[randomformEyes] + ".";
                    }
                }
                //description cheveux
                if (masterRandompoil > 0){
                    let randomChauve = Math.floor(Math.random() * 5);
                    //si elle est chauve
                    if(randomChauve === 0){
                        this.descriPoils = "Elle est complètement chauve.";
                    //si elle n'est pas lezard
                    }else if (Object.keys(this.replaceRaceF)[randomRaceF] != 'femme-lézard'){
                        let randomColorHair = Math.floor(Math.random() * this.colorHairF.length);
                        let randomHair = Math.floor(Math.random() * this.hair.length);
                        this.descriPoils = "Elle est " + this.colorHairF[randomColorHair] + " et porte " + this.hair[randomHair] + "."; 
                    }
                }
                //description du comportement
                if(masterRandomComp > 0){
                    let randomComportment = Math.floor(Math.random() * this.comportment.length);
                    let randomEmotion = Math.floor(Math.random() * this.emotion.length);
                    this.descriExtra = "C'est une personne " + this.comportment[randomComportment] + ", et qui est " + this.emotion[randomEmotion] + ".";
                }
            
            //////    description homme    //////
            }if (randomSex === 1){
                //intro sans classe
                if(masterRandomClas === 0){
                    this.descriGen = "Un " + Object.keys(this.replaceRaceM)[randomRaceM] + " de " + randomAge + " ans qui maitrise " + this.maitrise[randomMaitrise] + " !";
                }
                //intro avec classe
                if(masterRandomClas > 0){
                    this.descriGen = "Un "+ Object.keys(this.replaceClassM)[randomClassM] +' ' + Object.keys(this.replaceRaceM)[randomRaceM] + " de " + randomAge + " ans qui maitrise " + this.maitrise[randomMaitrise] + " !";
                }
                //description general
                this.descriEquip = "Il porte " + this.armor[randomArmor] + " avec " + this.atirail[randomAtiral] + ", et il est équipé " + this.weapon[randomWeapon] + ".";
                // si il a un instrument de musique
                if(Object.keys(this.replaceClassM)[randomClassM] === 'barde' || Object.keys(this.replaceClassM)[randomClassM ] === 'menestrel' || this.loveMusic == 0){
                    let randomMusic = Math.floor(Math.random() * this.music.length);
                    this.descriEquip = "Il porte " + this.armor[randomArmor] + " avec " + this.atirail[randomAtiral] +" et " + this.music[randomMusic] + ", et il est équipé " + this.weapon[randomWeapon] + ".";
                }
                //description du corps
                if(masterRandomCorp > 0){
                    let randomTaille = Math.floor(Math.random() * this.tailleM.length);
                    let randomMuscle = Math.floor(Math.random() * this.muscle.length);
                    this.descriCorps = "Il est " + this.tailleM[randomTaille] + " avec " + this.muscle[randomMuscle] + ".";
                }
                //description du visage
                if(masterRandomFace > 0){
                    let randomeye =  Math.floor(Math.random() * 5);
                    let randomFace = Math.floor(Math.random() * this.face.length);
                    let randomDistinct = Math.floor(Math.random() * this.distinct.length);
                    if(randomeye === 0){
                        //sans yeux
                        let randomMultiCachEye = Math.floor(Math.random() * this.MultiCachEye.length);
                        this.descriFace = "Il a " + this.face[randomFace] + " et " + this.distinct[randomDistinct] + ". Il a ses yeux complètement recouvert par " + this.MultiCachEye[randomMultiCachEye] + ".";
                    }else if(randomeye === 1){
                        //manque 1 oeil
                        let randomDirection = Math.floor(Math.random() * this.Direction.length);
                        let randomCachEye = Math.floor(Math.random() * this.cachEye.length);
                        let randomColorEyes = Math.floor(Math.random() * this.colorEyes.length);
                        if(this.colorEyes[randomColorEyes] === 'verron'){
                            this.descriFace = "Il a " + this.face[randomFace] + " et " + this.distinct[randomDistinct] + ". Son oeil " + this.Direction[randomDirection] + " est marron, tandis que son autre oeil est recouvert d'un " + this.cachEye[randomCachEye] + ".";
                        }else{
                            this.descriFace = "Il a " + this.face[randomFace] + " et " + this.distinct[randomDistinct] + ". Son oeil " + this.Direction[randomDirection] + " est " + this.colorEyes[randomColorEyes] + ", tandis que son autre oeil est recouvert d'un " + this.cachEye[randomCachEye] + ".";
                        }
                    }else if(randomeye >= 2){
                        //tout les yeux
                        let randomColorEyes = Math.floor(Math.random() * this.colorEyes.length);
                        let randomformEyes = Math.floor(Math.random() * this.formEyes.length);
                        this.descriFace = "Il a " + this.face[randomFace] + " et " + this.distinct[randomDistinct] + ". Ses yeux sont " + this.colorEyes[randomColorEyes] + " et " + this.formEyes[randomformEyes] + ".";
                    }
                }
                //description des cheveux et barbe
                if (masterRandompoil > 0){
                    let randomChauve = Math.floor(Math.random() * 5);
                    //si il est chauve
                    if(randomChauve === 0){
                        let randomBeard = Math.floor(Math.random() * this.beard.length);
                        //si il est chauve et sans barbe
                        if (randomBeard === 0){
                            this.descriPoils = "Il est completement chauve, sans barbe ni moustache.";
                        //si il est juste chauve
                        }else{
                            this.descriPoils = "Il est completement chauve et porte " + this.beard[randomBeard] + ".";
                        }
                    //si il n'est pas un lezard
                    }else if (Object.keys(this.replaceRaceM)[randomRaceM] != 'homme-lézard'){
                        let randomColorHair = Math.floor(Math.random() * this.colorHairM.length);
                        let randomHair = Math.floor(Math.random() * this.hair.length);
                        let randomBeard = Math.floor(Math.random() * this.beard.length);
                        this.descriPoils = "Il est " + this.colorHairM[randomColorHair] + " et porte " + this.hair[randomHair] + " et " + this.beard[randomBeard] + ".";
                    }
                }
                //description du comportement
                if(masterRandomComp > 0){
                    let randomComportment = Math.floor(Math.random() * this.comportment.length);
                    let randomEmotion = Math.floor(Math.random() * this.emotion.length);
                    this.descriExtra = "C'est une personne " + this.comportment[randomComportment] + ", et qui est " + this.emotion[randomEmotion] + ".";
                }
            }

            //////    alignement    //////
            this.align = this.alignementList[randomalign];

            //////    bonus femme    //////
            if(randomSex == 0){
                this.fo = 8 + randomFo + this.replaceRaceF[Object.keys(this.replaceRaceF)[randomRaceF]]['fo'] + this.replaceClassF[Object.keys(this.replaceClassF)[randomClassF]]['fo'];
                this.dex = 8 + randomDex + this.replaceRaceF[Object.keys(this.replaceRaceF)[randomRaceF]]['dex'] + this.replaceClassF[Object.keys(this.replaceClassF)[randomClassF]]['dex'];
                this.co = 8 + randomCo + this.replaceRaceF[Object.keys(this.replaceRaceF)[randomRaceF]]['co'] + this.replaceClassF[Object.keys(this.replaceClassF)[randomClassF]]['co'];
                this.int = 8 + randomInt + this.replaceRaceF[Object.keys(this.replaceRaceF)[randomRaceF]]['int'] + this.replaceClassF[Object.keys(this.replaceClassF)[randomClassF]]['int'];
                this.sag = 8 + randomSag + this.replaceRaceF[Object.keys(this.replaceRaceF)[randomRaceF]]['sag'] + this.replaceClassF[Object.keys(this.replaceClassF)[randomClassF]]['sag'];
                this.cha = 8 + randomCha + this.replaceRaceF[Object.keys(this.replaceRaceF)[randomRaceF]]['cha'] + this.replaceClassF[Object.keys(this.replaceClassF)[randomClassF]]['cha'];
                
            //////    bonus homme    //////
            }else{
                this.fo = 8 + randomFo + this.replaceRaceM[Object.keys(this.replaceRaceM)[randomRaceM]]['fo'] + this.replaceClassM[Object.keys(this.replaceClassM)[randomClassM]]['fo'];
                this.dex = 8 + randomDex + this.replaceRaceM[Object.keys(this.replaceRaceM)[randomRaceM]]['dex'] + this.replaceClassM[Object.keys(this.replaceClassM)[randomClassM]]['dex'];
                this.co = 8 + randomCo + this.replaceRaceM[Object.keys(this.replaceRaceM)[randomRaceM]]['co'] + this.replaceClassM[Object.keys(this.replaceClassM)[randomClassM]]['co'];
                this.int = 8 + randomInt + this.replaceRaceM[Object.keys(this.replaceRaceM)[randomRaceM]]['int'] + this.replaceClassM[Object.keys(this.replaceClassM)[randomClassM]]['int'];
                this.sag = 8 + randomSag + this.replaceRaceM[Object.keys(this.replaceRaceM)[randomRaceM]]['sag'] + this.replaceClassM[Object.keys(this.replaceClassM)[randomClassM]]['sag'];
                this.cha = 8 + randomCha + this.replaceRaceM[Object.keys(this.replaceRaceM)[randomRaceM]]['cha'] + this.replaceClassM[Object.keys(this.replaceClassM)[randomClassM]]['cha'];
            }

            //////    calcul de la viellesse (entre 12 et 82 ans)   //////
            if (randomAge < 18){
                this.fo -= 1;
                this.sag -= 1;
            }
            else if( randomAge < 20){
                this.sag -= 1;
            }
            else if (randomAge >= 40 && randomAge < 50){
                this.co -= 1;
            }
            else if (randomAge >= 50 && randomAge < 60){
                this.co -= 2;
            }
            else if (randomAge >= 60 && randomAge < 75){
                this.fo -=1;
                this.co -= 3;
            }
            else if (randomAge >= 75){
                this.fo -= 2;
                this.co -= 4;
            }
        }
    },
};

</script>
