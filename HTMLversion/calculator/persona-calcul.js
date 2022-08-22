let descriGENEperso = document.getElementById('descri-gene-perso');
let descriGENEhair = document.getElementById('descri-gene-hair');
let descriGENEeye = document.getElementById('descri-gene-eye');
let descriGENEneck = document.getElementById('descri-gene-neck');
let descriGENEbottom = document.getElementById('descri-gene-bottom');
let descriGENEtop = document.getElementById('descri-gene-top');
let descriGENEbonus = document.getElementById('descri-gene-bonus');

let nameF = ['Alice', 'Béatrice', 'Caroline', 'Delphine', 'Elise', 'Françoise', 'Garance', 'Holy', 'Iris', 'Juliette', 'Karine', 'Katéry', 'Lena', 'Mathilde', 'Nancy', 'Océane', 'Patricia', 'Quetty', 'Rose', 'Sarah', 'Tilda', 'Urielle', 'Valérie', 'Wendy', 'Xena', 'Yasmine', 'Zelda'];
let nameM = ['Alfred', 'Bertrand', 'Charles', 'Damien', 'Etienne', 'François','Gabriel', 'Harry','Irvin', 'John', 'José', 'Kevin', 'Lancelot','Maxime', 'Noé', 'Octavien', 'Pascal', 'Quentin', 'Raphael', 'Sebastien', 'Tristan', 'Ulric', 'Victor', 'Wilbert', 'Xavier', 'Younes', 'Zack'];
let age = ['très jeune', 'jeune', "d'âge mûre", 'agée', 'très agée'];
let colorskinF = ['blanche', 'noire', 'métisse', 'asiatique'];
let colorskinM = ['blanc', 'noir', 'métisse', 'asiatique'];
let qualityF = ['propre sur elle', 'un peu simplète', 'très souriante'];
let qualityM = ['propre sur lui', 'un peu simplet', 'très souriant'];
let colorHair = ["châtains", "blonds", "roux", "bruns", "grisonnants", "poivre et sel", "blancs", "aubruns", "cendrés"];
let hairy = ["un chignon", "un mohawk", "des cheveux en bataille", "une queue de cheval", "des cheveux courts", "des cheveux frisés", "de long cheveux", "de long cheveux ondulés", "de long cheveux frisés", "la coupe affro"];
let bear = ["pas de barbe ni de moustache", "une barbe collier", "la moustache", "une moustache bien fourni","une petite moustache", "le bouc", "des rouflaquettes", "une barbe tressé", "une très longue barbe", "une barbe bien fournis", "une barbe épaise", "une barbe de 3 jours"];
let colorEyesP = ["verte", "marron", "bleu", "grise", "vairon", "noisettes"];
let formEyesP = ["en amande", "espacés", "de forme rondes", "menaçant", "perçant", "bridés", "rapprochés"];
let formFace = ["un visage carré", "un visage fin", "un visage rond", "un visage ovale", "les joues creuses", "un visage crispé", "un visage allongé", "un visage lisse"];
let noze = ['nez aquilin', 'gros nez', 'petit nez', 'long nez', 'nez en pointe', "nez bosselé", "nez retroussé", "nez court", "nez droit", "nez large"];
let mouth = ['des petite lèvres', ' des grosses lèvres', 'des lèvres pincées', 'une bouche large', 'une fine bouche', 'des lèvres charnus'];
let menton = ["menton large", "menton fin", "menton fuyant", "menton avec une fossette", "menton fuyant", "menton avancé", "menton pointu", "menton rond"];
let teint = ["un teint blafard", "une peau bronzé", "un teint cireux", "une peau claire", "une peau congestionnée", "une peau éclatante", "un teint frais", "un teint livide", "un teint lumineux", "une peau mat"];
let neck = ["un cou épais", "un cou fin", "un cou large", "un cou musclé"];
let sourcil = ["arqués", "bien dessinés", "broussailleux", "fin", "droits", "en accent circonflexe", "épais"];
let front = ["bas", "bombé", "étroit", "fuyant", "haut", "lisse", "ridé"];
let glassForm = ["petites lunettes de vue", "grosses lunettes de vue", "lunettes de soleil"];
let glassStyle = ["originale", "rectangulaire", "vintage"];
let bijoux = [ "des petites boucles d'oreilles", "des grosses boucles d'oreilles", "des petites boucles d'oreilles argentés", "des grosses boucles d'oreilles argentés", "des petites boucles d'oreilles dorés", "des grosses boucles d'oreilles dorés"];

function personaCalcul(){
    let randomSex = Math.floor(Math.random() *2);
    let randomAge = Math.floor(Math.random() *age.length);

    let masterRandomHair = Math.floor(Math.random() *19);
    let masterRandomEye = Math.floor(Math.random() *19);
    let masterRandomNeck = Math.floor(Math.random() *19);
    let masterRandomBottom = Math.floor(Math.random() *19);
    let masterRandomTop = Math.floor(Math.random() *19);
    let masterRandomBonus = Math.floor(Math.random() *19);
    let doyouhaveglass = Math.floor(Math.random() *4);
    let doyouhavebijou = Math.floor(Math.random() *4);

    descriGENEperso.style.margin = "0px 0px";
    descriGENEhair.style.margin = "0px 0px";
    descriGENEeye.style.margin = "0px 0px";
    descriGENEneck.style.margin = "0px 0px";
    descriGENEbottom.style.margin = "0px 0px";
    descriGENEtop.style.margin = "0px 0px";
    descriGENEbonus.style.margin = "0px 0px";
    descriGENEperso.innerHTML ="";
    descriGENEhair.innerHTML ="";
    descriGENEeye.innerHTML ="";
    descriGENEneck.innerHTML ="";
    descriGENEbottom.innerHTML ="";
    descriGENEtop.innerHTML ="";
    descriGENEbonus.innerHTML ="";

    if(randomSex === 0){
        let randomNameF = Math.floor(Math.random() *nameF.length);
        let randomColorskinF = Math.floor(Math.random() *colorskinF.length);
        let randomQualityF = Math.floor(Math.random() *qualityF.length);
        descriGENEperso.style.margin = "10px 0px";
        descriGENEperso.innerHTML = "voici " + nameF[randomNameF] + ". <br> C'est une femme " + colorskinF[randomColorskinF] + ", " + age[randomAge] + " et " + qualityF[randomQualityF] + ".";
        if (masterRandomHair > 0){
            let doyouhaveahair = Math.floor(Math.random() *5);
            descriGENEhair.style.margin = "10px 0px";
            if(doyouhaveahair === 0){
                descriGENEhair.innerHTML = "Elle est chauve.";
            }else if(doyouhaveahair > 0){
                let randomColorHair = Math.floor(Math.random() *colorHair.length);
                let randomHairy = Math.floor(Math.random() *hairy.length);
                descriGENEhair.innerHTML = "Elle a les cheveux " + colorHair[randomColorHair] + " et porte " + hairy[randomHairy] + "."
            }
        }
        if (masterRandomEye > 0){
            let randomColorEyesP = Math.floor(Math.random() *colorEyesP.length);
            let randomFormEyesP = Math.floor(Math.random() *formEyesP.length);
            descriGENEeye.style.margin = "10px 0px";
            descriGENEeye.innerHTML = "Ses yeux sont de couleurs " + colorEyesP[randomColorEyesP] + " et " + formEyesP[randomFormEyesP] + ".";
        }
        if(masterRandomNeck > 0){
            let randomMenton = Math.floor(Math.random() *menton.length);
            let randomNeck = Math.floor(Math.random() *neck.length);
            descriGENEneck.style.margin = "10px 0px";
            descriGENEneck.innerHTML = "Elle a un " + menton[randomMenton] + " et " + neck[randomNeck] + ".";
        }
        if(masterRandomBottom > 0){
            let randomFormFace = Math.floor(Math.random() *formFace.length);
            let randomNoze = Math.floor(Math.random() *noze.length);
            let randomMouth = Math.floor(Math.random() *mouth.length);
            descriGENEbottom.style.margin = "10px 0px";
            descriGENEbottom.innerHTML = "Elle a " + formFace[randomFormFace] + ", " + mouth[randomMouth] + " et un " + noze[randomNoze] + ".";
        }
        if(masterRandomTop > 0){
            let randomSourcil = Math.floor(Math.random() *sourcil.length);
            let randomFront = Math.floor(Math.random() *front.length);
            let randomTeint = Math.floor(Math.random() *teint.length);
            descriGENEtop.style.margin = "10px 0px";
            descriGENEtop.innerHTML = "Ses sourcils sont " + sourcil[randomSourcil] + ", avec un front " + front[randomFront] + " et " + teint[randomTeint] + ".";            
        }
        if(masterRandomBonus > 5){
            // t'a pas de lunettes
            if (doyouhaveglass === 0){
                // pas de lunettes ni de bijoux
                if(doyouhavebijou > 0){
                    descriGENEbonus.innerHTML = "";
                }
                //pas de lunettes, mais des bijoux
                else if(doyouhavebijou === 0){
                    let randomBijoux = Math.floor(Math.random() *bijoux.length);
                    descriGENEbonus.innerHTML = "Elle porte " + bijoux[randomBijoux] + ".";
                }
            }
            //t'a des lunettes
            else if (doyouhaveglass > 0){
                let randomGlassForm = Math.floor(Math.random() *glassForm.length);
                let randomGlassStyle = Math.floor(Math.random() *glassStyle.length);
                descriGENEbonus.style.margin = "10px 0px";
                
                //des lunettes mais pas de bijoux
                if (doyouhavebijou > 0){
                    descriGENEbonus.innerHTML = "Elle porte des " + glassForm[randomGlassForm] + " " + glassStyle[randomGlassStyle] + ".";
                }
                //des lunettes et des bijoux
                else if (doyouhavebijou === 0){
                    let randomBijoux = Math.floor(Math.random() *bijoux.length);
                    descriGENEbonus.innerHTML = "Elle porte des " + glassForm[randomGlassForm] + " " + glassStyle[randomGlassStyle] + " ainsi que " + bijoux[randomBijoux] + ".";
                }
            }
        }
    }
    if(randomSex === 1){
        let randomNameM = Math.floor(Math.random() *nameM.length);
        let randomColorskinM = Math.floor(Math.random() *colorskinM.length);
        let randomQualityM = Math.floor(Math.random() *qualityM.length);
        descriGENEperso.style.margin = "10px 0px";
        descriGENEperso.innerHTML = "Voici " + nameM[randomNameM] + ". <br> C'est un homme " + colorskinM[randomColorskinM] + ", " + age[randomAge] + " et " + qualityM[randomQualityM] + ".";
        
        if (masterRandomHair > 0){
            let randomBear =  Math.floor(Math.random() *bear.length);
            let doyouhaveahair = Math.floor(Math.random() *5);
            descriGENEhair.style.margin = "10px 0px";
            if(doyouhaveahair === 0){
                descriGENEhair.innerHTML = "Il est chauve, et porte " + bear[randomBear] + ".";
            }else if( doyouhaveahair > 0){
                let randomColorHair = Math.floor(Math.random() *colorHair.length);
                let randomHairy = Math.floor(Math.random() *hairy.length);
                descriGENEhair.innerHTML = "Il a les cheveux " + colorHair[randomColorHair] + " et porte " + hairy[randomHairy] + " et " + bear[randomBear] + ".";
            }
        }
        if (masterRandomEye > 0){
            let randomColorEyesP = Math.floor(Math.random() *colorEyesP.length);
            let randomFormEyesP = Math.floor(Math.random() *formEyesP.length);
            descriGENEeye.style.margin = "10px 0px";
            descriGENEeye.innerHTML = "Ses yeux sont de couleurs " + colorEyesP[randomColorEyesP] + " et " + formEyesP[randomFormEyesP] + ".";
        }
        if(masterRandomNeck > 0){
            let randomMenton = Math.floor(Math.random() *menton.length);
            let randomNeck = Math.floor(Math.random() *neck.length);
            descriGENEneck.style.margin = "10px 0px";
            descriGENEneck.innerHTML = "Il a un " + menton[randomMenton] + " et " + neck[randomNeck] + ".";
        }
        if(masterRandomBottom > 0){
            let randomFormFace = Math.floor(Math.random() *formFace.length);
            let randomNoze = Math.floor(Math.random() *noze.length);
            let randomMouth = Math.floor(Math.random() *mouth.length);
            descriGENEbottom.style.margin = "10px 0px";
            descriGENEbottom.innerHTML = "Il a " + formFace[randomFormFace] + ", " + mouth[randomMouth] + " et un " + noze[randomNoze] + ".";
        }
        if(masterRandomTop > 0){
            let randomSourcil = Math.floor(Math.random() *sourcil.length);
            let randomFront = Math.floor(Math.random() *front.length);
            let randomTeint = Math.floor(Math.random() *teint.length);
            descriGENEtop.style.margin = "10px 0px";
            descriGENEtop.innerHTML = "Ses sourcils sont " + sourcil[randomSourcil] + ", avec un front " + front[randomFront] + " et " + teint[randomTeint] + ".";
        }
        if(masterRandomBonus > 5){
            // t'a pas de lunettes
            if (doyouhaveglass === 0){
                // pas de lunettes ni de bijoux
                if(doyouhavebijou > 0){
                    descriGENEbonus.innerHTML = "";
                }
                //pas de lunettes, mais des bijoux
                else if(doyouhavebijou === 0){
                    let randomBijoux = Math.floor(Math.random() *bijoux.length);
                    descriGENEbonus.innerHTML = "Il porte " + bijoux[randomBijoux] + ".";
                }
            }
            //t'a des lunettes
            else if (doyouhaveglass > 0){
                let randomGlassForm = Math.floor(Math.random() *glassForm.length);
                let randomGlassStyle = Math.floor(Math.random() *glassStyle.length);
                descriGENEbonus.style.margin = "10px 0px";
                
                //des lunettes mais pas de bijoux
                if (doyouhavebijou > 0){
                    descriGENEbonus.innerHTML = "Il porte des " + glassForm[randomGlassForm] + " " + glassStyle[randomGlassStyle] + ".";
                }
                //des lunettes et des bijoux
                else if (doyouhavebijou === 0){
                    let randomBijoux = Math.floor(Math.random() *bijoux.length);
                    descriGENEbonus.innerHTML = "Il porte des " + glassForm[randomGlassForm] + " " + glassStyle[randomGlassStyle] + " ainsi que " + bijoux[randomBijoux] + ".";
                }
            }
        }
    }
}