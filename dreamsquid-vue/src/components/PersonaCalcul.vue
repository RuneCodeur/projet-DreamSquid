<template>
  <div id="personaGen">
    <p class="descriptionGen">Clique sur le bouton, et le générateur te donnera la description détaillé d'une personne !</p>
    
    <div id="descriPersona">
      <div v-if="descriPerso === ''"> Clique sur le bouton, si tu veux une description ! </div>
      <div v-if="descriPerso != ''"> {{descriName }} <br> {{descriPerso}} </div>
      <div v-if="descriHair != ''"> {{descriHair}} </div>
      <div v-if="descriEye != ''"> {{descriEye}} </div>
      <div v-if="descriNeck != ''"> {{descriNeck}} </div>
      <div v-if="descriBottom != ''"> {{descriBottom}} </div>
      <div v-if="descriTop != ''"> {{descriTop}} </div>
      <div v-if="descriBonus != ''"> {{descriBonus}} </div>
    </div>
  </div>

  <input id="random" type="button" value="Un autre !" @click="calcul()">    
</template>

<script>
export default {
  data() {
    return{
      descriName:'',
      descriPerso:'',
      descriHair:'',
      descriEye:'',
      descriNeck:'',
      descriBottom:'',
      descriTop:'',
      descriBonus:'',
      nameF: ['Alice', 'Béatrice', 'Caroline', 'Delphine', 'Elise', 'Françoise', 'Garance', 'Holy', 'Iris', 'Juliette', 'Karine', 'Katéry', 'Lena', 'Mathilde', 'Nancy', 'Océane', 'Patricia', 'Quetty', 'Rose', 'Sarah', 'Tilda', 'Urielle', 'Valérie', 'Wendy', 'Xena', 'Yasmine', 'Zelda'],
      nameM: ['Alfred', 'Bertrand', 'Charles', 'Damien', 'Etienne', 'François','Gabriel', 'Harry','Irvin', 'John', 'José', 'Kevin', 'Lancelot','Maxime', 'Noé', 'Octavien', 'Pascal', 'Quentin', 'Raphael', 'Sebastien', 'Tristan', 'Ulric', 'Victor', 'Wilbert', 'Xavier', 'Younes', 'Zack'],
      age: ['très jeune', 'jeune', "d'âge mûre", 'agée', 'très agée'],
      colorskinF: ['blanche', 'noire', 'métisse', 'asiatique'],
      colorskinM: ['blanc', 'noir', 'métisse', 'asiatique'],
      qualityF: ['propre sur elle', 'un peu simplète', 'très souriante'],
      qualityM: ['propre sur lui', 'un peu simplet', 'très souriant'],
      colorHair: ["châtains", "blonds", "roux", "bruns", "grisonnants", "poivre et sel", "blancs", "aubruns", "cendrés"],
      hairy: ["un chignon", "un mohawk", "des cheveux en bataille", "une queue de cheval", "des cheveux courts", "des cheveux frisés", "de long cheveux", "de long cheveux ondulés", "de long cheveux frisés", "la coupe affro"],
      bear: ["pas de barbe ni de moustache", "une barbe collier", "la moustache", "une moustache bien fourni","une petite moustache", "le bouc", "des rouflaquettes", "une barbe tressé", "une très longue barbe", "une barbe bien fournis", "une barbe épaise", "une barbe de 3 jours"],
      colorEyesP: ["verte", "marron", "bleu", "grise", "vairon", "noisettes"],
      formEyesP: ["en amande", "espacés", "de forme rondes", "menaçant", "perçant", "bridés", "rapprochés"],
      formFace: ["un visage carré", "un visage fin", "un visage rond", "un visage ovale", "les joues creuses", "un visage crispé", "un visage allongé", "un visage lisse"],
      noze: ['nez aquilin', 'gros nez', 'petit nez', 'long nez', 'nez en pointe', "nez bosselé", "nez retroussé", "nez court", "nez droit", "nez large"],
      mouth: ['des petite lèvres', ' des grosses lèvres', 'des lèvres pincées', 'une bouche large', 'une fine bouche', 'des lèvres charnus'],
      menton: ["menton large", "menton fin", "menton fuyant", "menton avec une fossette", "menton fuyant", "menton avancé", "menton pointu", "menton rond"],
      teint: ["un teint blafard", "une peau bronzé", "un teint cireux", "une peau claire", "une peau congestionnée", "une peau éclatante", "un teint frais", "un teint livide", "un teint lumineux", "une peau mat"],
      neck: ["un cou épais", "un cou fin", "un cou large", "un cou musclé"],
      sourcil: ["arqués", "bien dessinés", "broussailleux", "fin", "droits", "en accent circonflexe", "épais"],
      front: ["bas", "bombé", "étroit", "fuyant", "haut", "lisse", "ridé"],
      glassForm: ["petites lunettes de vue", "grosses lunettes de vue", "lunettes de soleil"],
      glassStyle: ["originale", "rectangulaire", "vintage"],
      bijoux: [ "des petites boucles d'oreilles", "des grosses boucles d'oreilles", "des petites boucles d'oreilles argentés", "des grosses boucles d'oreilles argentés", "des petites boucles d'oreilles dorés", "des grosses boucles d'oreilles dorés"],

    }
  },
  methods: {

    calcul(){
      let randomSex = Math.floor(Math.random() *2);
      let randomAge = Math.floor(Math.random() *this.age.length);

      let masterRandomHair = Math.floor(Math.random() *19);
      let masterRandomEye = Math.floor(Math.random() *19);
      let masterRandomNeck = Math.floor(Math.random() *19);
      let masterRandomBottom = Math.floor(Math.random() *19);
      let masterRandomTop = Math.floor(Math.random() *19);
      let masterRandomBonus = Math.floor(Math.random() *19);
      let doyouhaveglass = Math.floor(Math.random() *4);
      let doyouhavebijou = Math.floor(Math.random() *4);

      this.descriPerso ="";
      this.descriHair ="";
      this.descriEye ="";
      this.descriNeck ="";
      this.descriBottom ="";
      this.descriTop ="";
      this.descriBonus ="";

      if(randomSex === 0){
        let randomNameF = Math.floor(Math.random() *this.nameF.length);
        let randomColorskinF = Math.floor(Math.random() *this.colorskinF.length);
        let randomQualityF = Math.floor(Math.random() *this.qualityF.length);
        this.descriName = "voici " + this.nameF[randomNameF] + ".";
        this.descriPerso = "C'est une femme " + this.colorskinF[randomColorskinF] + ", " + this.age[randomAge] + " et " + this.qualityF[randomQualityF] + ".";
        if (masterRandomHair > 0){
          let doyouhaveahair = Math.floor(Math.random() *5);
          if(doyouhaveahair === 0){
            this.descriHair = "Elle est chauve.";
          }else if(doyouhaveahair > 0){
            let randomColorHair = Math.floor(Math.random() *this.colorHair.length);
            let randomHairy = Math.floor(Math.random() *this.hairy.length);
            this.descriHair = "Elle a les cheveux " + this.colorHair[randomColorHair] + " et porte " + this.hairy[randomHairy] + "."
          }
        }
        if (masterRandomEye > 0){
          let randomColorEyesP = Math.floor(Math.random() *this.colorEyesP.length);
          let randomFormEyesP = Math.floor(Math.random() *this.formEyesP.length);
          this.descriEye = "Ses yeux sont de couleurs " + this.colorEyesP[randomColorEyesP] + " et " + this.formEyesP[randomFormEyesP] + ".";
        }
        if(masterRandomNeck > 0){
          let randomMenton = Math.floor(Math.random() *this.menton.length);
          let randomNeck = Math.floor(Math.random() *this.neck.length);
          this.descriNeck = "Elle a un " + this.menton[randomMenton] + " et " + this.neck[randomNeck] + ".";
        }
        if(masterRandomBottom > 0){
          let randomFormFace = Math.floor(Math.random() *this.formFace.length);
          let randomNoze = Math.floor(Math.random() *this.noze.length);
          let randomMouth = Math.floor(Math.random() *this.mouth.length);
          this.descriBottom = "Elle a " + this.formFace[randomFormFace] + ", " + this.mouth[randomMouth] + " et un " + this.noze[randomNoze] + ".";
        }
        if(masterRandomTop > 0){
          let randomSourcil = Math.floor(Math.random() *this.sourcil.length);
          let randomFront = Math.floor(Math.random() *this.front.length);
          let randomTeint = Math.floor(Math.random() *this.teint.length);
          this.descriTop = "Ses sourcils sont " + this.sourcil[randomSourcil] + ", avec un front " + this.front[randomFront] + " et " + this.teint[randomTeint] + ".";            
        }

        if(masterRandomBonus > 5){

          // pas de lunettes
          if (doyouhaveglass === 0){ 

            // pas de lunettes ni de bijoux
            if(doyouhavebijou > 0){ 
              this.descriBonus = "";

            }else if(doyouhavebijou === 0){ //pas de lunettes, mais des bijoux
              let randomBijoux = Math.floor(Math.random() *this.bijoux.length);
              this.descriBonus = "Elle porte " + this.bijoux[randomBijoux] + ".";
            }

          //des lunettes
          }else if (doyouhaveglass > 0){
            let randomGlassForm = Math.floor(Math.random() *this.glassForm.length);
            let randomGlassStyle = Math.floor(Math.random() *this.glassStyle.length);
                
            //des lunettes mais pas de bijoux
            if (doyouhavebijou > 0){
              this.descriBonus = "Elle porte des " + this.glassForm[randomGlassForm] + " " + this.glassStyle[randomGlassStyle] + ".";
            
            //des lunettes et des bijoux
            }else if (doyouhavebijou === 0){
              let randomBijoux = Math.floor(Math.random() *this.bijoux.length);
              this.descriBonus = "Elle porte des " + this.glassForm[randomGlassForm] + " " + this.glassStyle[randomGlassStyle] + " ainsi que " + this.bijoux[randomBijoux] + ".";
            }
          }
        }
      }
      if(randomSex === 1){
        let randomNameM = Math.floor(Math.random() *this.nameM.length);
        let randomColorskinM = Math.floor(Math.random() *this.colorskinM.length);
        let randomQualityM = Math.floor(Math.random() *this.qualityM.length);
        this.descriName = "voici " + this.nameM[randomNameM] + ".";
        this.descriPerso = "C'est un homme " + this.colorskinM[randomColorskinM] + ", " + this.age[randomAge] + " et " + this.qualityM[randomQualityM] + ".";
        
        if (masterRandomHair > 0){
          let randomBear =  Math.floor(Math.random() *this.bear.length);
          let doyouhaveahair = Math.floor(Math.random() *5);
          if(doyouhaveahair === 0){
            this.descriHair = "Il est chauve, et porte " + this.bear[randomBear] + ".";
          }else if( doyouhaveahair > 0){
            let randomColorHair = Math.floor(Math.random() *this.colorHair.length);
            let randomHairy = Math.floor(Math.random() *this.hairy.length);
            this.descriHair = "Il a les cheveux " + this.colorHair[randomColorHair] + " et porte " + this.hairy[randomHairy] + " et " + this.bear[randomBear] + ".";
          }

        }if (masterRandomEye > 0){
          let randomColorEyesP = Math.floor(Math.random() *this.colorEyesP.length);
          let randomFormEyesP = Math.floor(Math.random() *this.formEyesP.length);
          this.descriEye = "Ses yeux sont de couleurs " + this.colorEyesP[randomColorEyesP] + " et " + this.formEyesP[randomFormEyesP] + ".";
        
        }if(masterRandomNeck > 0){
          let randomMenton = Math.floor(Math.random() *this.menton.length);
          let randomNeck = Math.floor(Math.random() *this.neck.length);
          this.descriNeck = "Il a un " + this.menton[randomMenton] + " et " + this.neck[randomNeck] + ".";
        
        }if(masterRandomBottom > 0){
          let randomFormFace = Math.floor(Math.random() *this.formFace.length);
          let randomNoze = Math.floor(Math.random() *this.noze.length);
          let randomMouth = Math.floor(Math.random() *this.mouth.length);
          this.descriBottom = "Il a " + this.formFace[randomFormFace] + ", " + this.mouth[randomMouth] + " et un " + this.noze[randomNoze] + ".";
        
        }if(masterRandomTop > 0){
          let randomSourcil = Math.floor(Math.random() *this.sourcil.length);
          let randomFront = Math.floor(Math.random() *this.front.length);
          let randomTeint = Math.floor(Math.random() *this.teint.length);
          this.descriTop = "Ses sourcils sont " + this.sourcil[randomSourcil] + ", avec un front " + this.front[randomFront] + " et " + this.teint[randomTeint] + ".";
        
        }if(masterRandomBonus > 5){
          
          // pas de lunettes
          if (doyouhaveglass === 0){
            
            // pas de lunettes ni de bijoux
            if(doyouhavebijou > 0){
              this.descriBonus = "";

            //pas de lunettes, mais des bijoux
            }else if(doyouhavebijou === 0){
              let randomBijoux = Math.floor(Math.random() *this.bijoux.length);
              this.descriBonus = "Il porte " + this.bijoux[randomBijoux] + ".";
            }

          // des lunettes
          }else if (doyouhaveglass > 0){
            let randomGlassForm = Math.floor(Math.random() *this.glassForm.length);
            let randomGlassStyle = Math.floor(Math.random() *this.glassStyle.length);

            //des lunettes mais pas de bijoux
            if (doyouhavebijou > 0){
              this.descriBonus = "Il porte des " + this.glassForm[randomGlassForm] + " " + this.glassStyle[randomGlassStyle] + ".";
            
            //des lunettes et des bijoux
            }else if (doyouhavebijou === 0){
              let randomBijoux = Math.floor(Math.random() *this.bijoux.length);
              this.descriBonus = "Il porte des " + this.glassForm[randomGlassForm] + " " + this.glassStyle[randomGlassStyle] + " ainsi que " + this.bijoux[randomBijoux] + ".";
            }
          }
        }
      }
    }
  },
};

</script>
