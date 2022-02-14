let nameF= ['Alice', 'Béatrice', 'Caroline', 'Delphine', 'Elise', 'Françoise', 'Garance', 'Holy', 'Iris', 'Juliette', 'Karine', 'Katéry', 'Lena', 'Mathilde', 'Nancy', 'Océane', 'Patricia', 'Quetty', 'Rose', 'Sarah', 'Tilda', 'Urielle', 'Valérie', 'Wendy', 'Xena', 'Yasmine', 'Zelda'];
let nameM= ['Alfred', 'Bertrand', 'Charles', 'Damien', 'Etienne', 'François','Gabriel', 'Harry','Irvin', 'John', 'José', 'Kevin', 'Lancelot','Maxime', 'Noé', 'Octavien', 'Pascal', 'Quentin', 'Raphael', 'Sebastien', 'Tristan', 'Ulric', 'Victor', 'Wilbert', 'Xavier', 'Younes', 'Zack'];
let age= ['très jeune', 'jeune', "d'âge mûre", 'agée', 'très agée'];
let colorskinF= ['blanche', 'noire', 'métisse', 'asiatique'];
let colorskinM= ['blanc', 'noir', 'métisse', 'asiatique'];
let qualityF= ['propre sur elle', 'un peu simplète', 'très souriante'];
let qualityM= ['propre sur lui', 'un peu simplet', 'très souriant'];
let colorHair= ["châtains", "blonds", "roux", "bruns", "grisonnants", "poivre et sel", "blancs", "aubruns", "cendrés"];
let hairy= ["un chignon", "un mohawk", "des cheveux en bataille", "une queue de cheval", "des cheveux courts", "des cheveux frisés", "de long cheveux", "de long cheveux ondulés", "de long cheveux frisés", "la coupe affro"];
let bear= ["pas de barbe ni de moustache", "une barbe collier", "la moustache", "une moustache bien fourni","une petite moustache", "le bouc", "des rouflaquettes", "une barbe tressé", "une très longue barbe", "une barbe bien fournis", "une barbe épaise", "une barbe de 3 jours"];
let colorEyesP= ["verte", "marron", "bleu", "grise", "vairon", "noisettes"];
let formEyesP= ["en amande", "espacés", "de forme rondes", "menaçant", "perçant", "bridés", "rapprochés"];
let formFace= ["un visage carré", "un visage fin", "un visage rond", "un visage ovale", "les joues creuses", "un visage crispé", "un visage allongé", "un visage lisse"];
let noze= ['nez aquilin', 'gros nez', 'petit nez', 'long nez', 'nez en pointe', "nez bosselé", "nez retroussé", "nez court", "nez droit", "nez large"];
let mouth= ['des petite lèvres', ' des grosses lèvres', 'des lèvres pincées', 'une bouche large', 'une fine bouche', 'des lèvres charnus'];
let menton= ["menton large", "menton fin", "menton fuyant", "menton avec une fossette", "menton fuyant", "menton avancé", "menton pointu", "menton rond"];
let teint= ["un teint blafard", "une peau bronzé", "un teint cireux", "une peau claire", "une peau congestionnée", "une peau éclatante", "un teint frais", "un teint livide", "un teint lumineux", "une peau mat"];
let neck= ["un cou épais", "un cou fin", "un cou large", "un cou musclé"];
let sourcil= ["arqués", "bien dessinés", "broussailleux", "fin", "droits", "en accent circonflexe", "épais"];
let front= ["bas", "bombé", "étroit", "fuyant", "haut", "lisse", "ridé"];
let glassForm= ["petites lunettes de vue", "grosses lunettes de vue", "lunettes de soleil"];
let glassStyle= ["originale", "rectangulaire", "vintage"];
let bijoux= [ "des petites boucles d'oreilles", "des grosses boucles d'oreilles", "des petites boucles d'oreilles argentés", "des grosses boucles d'oreilles argentés", "des petites boucles d'oreilles dorés", "des grosses boucles d'oreilles dorés"];

exports.description = (req, res, next) => {
    try{  
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

        let descri = '';

        //////    description femme    //////
        if(randomSex === 0){
            let randomNameF = Math.floor(Math.random() *nameF.length);
            let randomColorskinF = Math.floor(Math.random() *colorskinF.length);
            let randomQualityF = Math.floor(Math.random() *qualityF.length);
            descri = "voici " + nameF[randomNameF] + ". \n\n C'est une femme " + colorskinF[randomColorskinF] + ", " + age[randomAge] + " et " + qualityF[randomQualityF] + ".";
            
            if (masterRandomHair > 0){
                let doyouhaveahair = Math.floor(Math.random() *5);
                if(doyouhaveahair === 0){
                    descri = descri + "\n\n" + "Elle est chauve.";
                }
                else{
                    let randomColorHair = Math.floor(Math.random() *colorHair.length);
                    let randomHairy = Math.floor(Math.random() *hairy.length);
                    descri = descri + "\n\n" + "Elle a les cheveux " + colorHair[randomColorHair] + " et porte " + hairy[randomHairy] + "."
                }
            }

            if (masterRandomEye > 0){
            let randomColorEyesP = Math.floor(Math.random() *colorEyesP.length);
            let randomFormEyesP = Math.floor(Math.random() *formEyesP.length);
            descri = descri + "\n\n" + "Ses yeux sont de couleurs " + colorEyesP[randomColorEyesP] + " et " + formEyesP[randomFormEyesP] + ".";
            }

            if(masterRandomNeck > 0){
            let randomMenton = Math.floor(Math.random() *menton.length);
            let randomNeck = Math.floor(Math.random() *neck.length);
            descri = descri + "\n\n" + "Elle a un " + menton[randomMenton] + " et " + neck[randomNeck] + ".";
            }

            if(masterRandomBottom > 0){
                let randomFormFace = Math.floor(Math.random() *formFace.length);
                let randomNoze = Math.floor(Math.random() *noze.length);
                let randomMouth = Math.floor(Math.random() *mouth.length);
                descri = descri + "\n\n" + "Elle a " + formFace[randomFormFace] + ", " + mouth[randomMouth] + " et un " + noze[randomNoze] + ".";
            }
            if(masterRandomTop > 0){
                let randomSourcil = Math.floor(Math.random() *sourcil.length);
                let randomFront = Math.floor(Math.random() *front.length);
                let randomTeint = Math.floor(Math.random() *teint.length);
                descri = descri + "\n\n" + "Ses sourcils sont " + sourcil[randomSourcil] + ", avec un front " + front[randomFront] + " et " + teint[randomTeint] + ".";            
            }

            if(masterRandomBonus > 5){

                // pas de lunettes
                if (doyouhaveglass === 0){ 

                    if(doyouhavebijou === 0){ 
                        let randomBijoux = Math.floor(Math.random() *bijoux.length);
                        descri = descri + "\n\n" + "Elle porte " + bijoux[randomBijoux] + ".";
                    }  
                }
                //des lunettes
                else {
                    let randomGlassForm = Math.floor(Math.random() *glassForm.length);
                    let randomGlassStyle = Math.floor(Math.random() *glassStyle.length);
                
                    if (doyouhavebijou > 0){
                        descri = descri + "\n\n" + "Elle porte des " + glassForm[randomGlassForm] + " " + glassStyle[randomGlassStyle] + ".";
                    }
                    else {
                        let randomBijoux = Math.floor(Math.random() *bijoux.length);
                        descri = descri + "\n\n" + "Elle porte des " + glassForm[randomGlassForm] + " " + glassStyle[randomGlassStyle] + " ainsi que " + bijoux[randomBijoux] + ".";
                    }
                }
            }
        }

        //////    description homme    //////
        if(randomSex === 1){
            let randomNameM = Math.floor(Math.random() *nameM.length);
            let randomColorskinM = Math.floor(Math.random() *colorskinM.length);
            let randomQualityM = Math.floor(Math.random() *qualityM.length);
            descri = "voici " + nameM[randomNameM] + ". \n\n C'est un homme " + colorskinM[randomColorskinM] + ", " + age[randomAge] + " et " + qualityM[randomQualityM] + ".";
        
            if (masterRandomHair > 0){
                let randomBear =  Math.floor(Math.random() *bear.length);
                doyouhaveahair = Math.floor(Math.random() *5);
                if(doyouhaveahair === 0){
                    descri = descri + "\n\n" + "Il est chauve, et porte " + bear[randomBear] + ".";
                }
                else{
                    let randomColorHair = Math.floor(Math.random() *colorHair.length);
                    let randomHairy = Math.floor(Math.random() *hairy.length);
                    descri = descri + "\n\n" + "Il a les cheveux " + colorHair[randomColorHair] + " et porte " + hairy[randomHairy] + " et " + bear[randomBear] + ".";
                }
            }
            
            if (masterRandomEye > 0){
                let randomColorEyesP = Math.floor(Math.random() *colorEyesP.length);
                let randomFormEyesP = Math.floor(Math.random() *formEyesP.length);
                descri = descri + "\n\n" + "Ses yeux sont de couleurs " + colorEyesP[randomColorEyesP] + " et " + formEyesP[randomFormEyesP] + ".";
            }
            
            if(masterRandomNeck > 0){
                let randomMenton = Math.floor(Math.random() *menton.length);
                let randomNeck = Math.floor(Math.random() *neck.length);
                descri = descri + "\n\n" + "Il a un " +menton[randomMenton] + " et " + neck[randomNeck] + ".";
            }
        
            if(masterRandomBottom > 0){
                let randomFormFace = Math.floor(Math.random() *formFace.length);
                let randomNoze = Math.floor(Math.random() *noze.length);
                let randomMouth = Math.floor(Math.random() *mouth.length);
                descri = descri + "\n\n" + "Il a " + formFace[randomFormFace] + ", " + mouth[randomMouth] + " et un " + noze[randomNoze] + ".";
            }
        
            if(masterRandomTop > 0){
                let randomSourcil = Math.floor(Math.random() *sourcil.length);
                let randomFront = Math.floor(Math.random() *front.length);
                let randomTeint = Math.floor(Math.random() *teint.length);
                descri = descri + "\n\n" + "Ses sourcils sont " + sourcil[randomSourcil] + ", avec un front " + front[randomFront] + " et " + teint[randomTeint] + ".";
            }
            
            if(masterRandomBonus > 5){
          
                // pas de lunettes
                if (doyouhaveglass === 0){ 

                    if(doyouhavebijou === 0){ 
                        let randomBijoux = Math.floor(Math.random() *bijoux.length);
                        descri = descri + "\n\n" + "Il porte " + bijoux[randomBijoux] + ".";
                    }  
                }
                //des lunettes
                else {
                    let randomGlassForm = Math.floor(Math.random() *glassForm.length);
                    let randomGlassStyle = Math.floor(Math.random() *glassStyle.length);
                
                    if (doyouhavebijou > 0){
                        descri = descri + "\n\n" + "Il porte des " + glassForm[randomGlassForm] + " " + glassStyle[randomGlassStyle] + ".";
                    }
                    else {
                        let randomBijoux = Math.floor(Math.random() *bijoux.length);
                        descri = descri + "\n\n" + "Il porte des " + glassForm[randomGlassForm] + " " + glassStyle[randomGlassStyle] + " ainsi que " + bijoux[randomBijoux] + ".";
                    }
                }
            }
        }

        //RENVOIE LE BAZAR
        res.locals.result = {
            description : descri,
        }
        return next()
    }    
    catch(e){
        console.log(e)
        return res.status(500).json({error: "le serveur à rencontré un problème. veuillez réessayer plus tard."});
    }
};