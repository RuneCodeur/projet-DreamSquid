<template>
  <div id="chimeraGen">
    <p class="descriptionGen">Clique sur le bouton, et le générateur te donnera la description d'une créature imaginaire !</p>
    
    <div id="descriChimera">
      <div v-if="descriGen === ''"> Clique sur le bouton, si tu veux une description ! </div>
      <div v-if="descriGen != ''"> {{descriGen}} </div>
      <div v-if="descriForm != ''"> {{descriForm}} </div>
      <div v-if="descriSize != ''"> {{descriSize}} </div>
      <div v-if="descriSkin != ''"> {{descriSkin}} </div>
      <div v-if="descriHead != ''"> {{descriHead}} </div>
      <div v-if="descriBonus != ''"> {{descriBonus}} </div>
      <div v-if="descriPaws != ''"> {{descriPaws}} </div>
      <div v-if="descriPawsExtra != ''"> {{descriPawsExtra}} </div>
      <div v-if="descriTail != ''"> {{descriTail}} </div>
    </div>
  </div>

  <input id="random" type="button" value="Un autre !" @click="calcul()">    
</template>

<script>
export default {
  data() {
    return{
      descriGen: '',
      descriForm: '',
      descriSize: '',
      descriSkin: '',
      descriHead: '',
      descriBonus: '',
      descriPaws: '',
      descriPawsExtra: '',
      descriTail: '',
      origin: ["du monde des enfers", "du paradis", "d'une région chaude", "d'une région froide", "d'une forêt", "d'un autre monde", "d'une caverne souteraine"],
      form: ['poisson', 'molusque', 'insecte', 'serpent', 'oiseau'],
      size: ['5 centimètres', '30 centimètres', '1 mètre', '3 mètres', '5 mètres', '10 mètres', '30 mètres'],
      skin: ['ecailleuse','visqueuse', 'douce' ,'couverte de poils', 'couverte de plumes', 'chitineuse', 'couverte de grosses plaques osseuses', 'translucide'],
      colorskin: ['grise', 'rouge', 'orange', 'jaune', 'verte', 'noir', 'blanche', 'bleu', 'violette', 'rose', 'arc-en-ciel'],
      numberEye: [0, 1, 2, 3, 4, 6, 8],
      sizeEye: ["tout petit", "petit","", "gros"],
      multiSizeEye: ["tout petits", "petits","", "gros"],
      jaw: ['machoire','gueule rempli de dent pointu', 'bouche avec une langue préhensile', 'paire de mandibules', 'bec courbé', 'bec pointu', 'bec plat'],
      sizeJaw: ['très petite', 'petite', '', 'grosse', 'énorme'],
      sizeBeak: ['tout petit', 'petit', '', 'gros', 'énorme'],
      ears: ["petites oreilles", "grandes oreilles", "oreilles touffu", "oreilles en pointes", "oreilles rondes", "oreilles en paraboles", "oreilles dréssées", "oreilles tombantes"],
      horn: ["corne torsadée", "corne courbée", "corne en pointe", "longue corne", "corne large", "corne fine", "petite pointe",],
      horns: ["cornes torsadées", "cornes courbées", "cornes en pointes", "longues cornes", "cornes larges", "cornes fines", "petites pointes",],
      tentacle: ['des petites tentacules', 'une petite tentacule', 'des longues tentacules', 'une longue tentacule', 'des grandes tentacules', 'une grande tentacule'],
      pawsLength: [' longues', '', ' petites', ' grandes'],
      pawLength: [' longue', '', ' petite', ' grande'],
      specialpaws: ['tentacule', 'paire d\'ailes', 'nageoires'],
      stylePaws: ['', ' poilus', ' recouvertes de plumes', ' toutes molles', ' très musclées', ' recouvertes de pics', ' recouvertes d\'une petite fourure'],
      stylePaw: ['', ' poilu', ' recouverte de plumes', ' toute molle', ' très musclée', ' recouverte de pics', ' recouverte d\'une petite fourure'],
      ordermix: ['de devant', 'de derrière'],
      stylefinger: ['petits doigts', 'longs doigts', 'doigts', 'griffes', 'petites griffes', 'grosses griffes', 'longues griffes', 'petits doigts griffus', 'gros doigts griffus', 'doigts griffus', 'longs doigts griffus'],
      alterpaws: ['sabots', 'gros sabots', 'petits sabots', 'pinces', 'grosses pinces', 'petites pinces', 'lammes'],
      extratentacle: ['des ventouses', 'un dard empoisonné à l\'extremité', 'une pince à l\'extremité', 'une griffe à l\'extremité', 'plusieurs griffes à l\'extremité', 'plusieurs tentacules à l\'extremité', 'plusieurs ventouses à l\'extremité'],
      extratentacles: ['des ventouses', 'un dard empoisonné aux extremité', 'une pince aux extremité', 'une griffe aux extremité', 'plusieurs griffes aux extremité', 'plusieurs tentacules aux extremité', 'plusieurs ventouses aux extremité'],
      tail: ['', ' plate', ' très courte', ' très longue', ' plate', ' avec des épines', ' avec un dard empoisonée', ' couverte de plumes', ' en forme de pointe'],
      bonus: ['qu\'une carapace', 'qu\'un aileron sur le dos', 'que la capacité de briller dans le noir'],
      bonus2: ['une carapace', 'un aileron sur le dos', 'la capacité de briller dans le noir'],
    }
  },

  methods: {

    //mixage genetique
    bonusMix(race1){
      let race2 = Math.floor(Math.random() *this.form.length);
      if(this.form[race1] === this.form[race2]){
        this.bonusMix(race1);
      }else{
        return race2
      }
    },

    //calcul la 2ème couleur de la peau
    calculColorSkin2 (colorSkin1) {
      let colorSkin2 = Math.floor(Math.random() *this.colorskin.length);
      if(this.colorskin[colorSkin2] == this.colorskin[colorSkin1] || this.colorskin[colorSkin2] == 'arc-en-ciel'){
        this.calculColorSkin2(colorSkin1)
      }else{
        return colorSkin2
      }
    },

    //calcul la 3ème couleur de la peau
    calculColorSkin3(colorSkin1, colorSkin2){
      let colorSkin3 = Math.floor(Math.random() *this.colorskin.length);
      if(this.colorskin[colorSkin3] == this.colorskin[colorSkin1] || this.colorskin[colorSkin3] == this.colorskin[colorSkin2] || this.colorskin[colorSkin3] == 'arc-en-ciel'){
        this.calculColorSkin3(colorSkin1, colorSkin2)
      }else{
        return colorSkin3
      }
    },

    // calcul d'une tentacule spéciale
    extrabonustentacle(tentacles, multiple) {
      if(multiple === 0){
        let bonusTentacle = Math.floor(Math.random() * this.extratentacle.length)
        if(tentacles === bonusTentacle){
          this.extrabonustentacle(tentacles, multiple);
        }else{
          return bonusTentacle
        }
      }else{
        let bonusTentacle = Math.floor(Math.random() * this.extratentacles.length)
        if(tentacles === bonusTentacle){
          this.extrabonustentacle(tentacles, multiple);
        }else{
          return bonusTentacle
        }
      }
    },

    //calcul du nombre de doigts des pattes spéciales
    extraFinger (finger){
      let extraFinger = Math.floor(Math.random() *5);
      if(extraFinger === finger){
        this.extraFinger(finger);
      }else{
        return extraFinger
      }
    },

    //calcul du style des pattes spéciales
    extraStyleFinger(styleFinger){
      let extraStyleFinger = Math.floor(Math.random() * this.stylefinger.length)
      if( extraStyleFinger === styleFinger){
        this.extraStyleFinger(styleFinger);
      }else{
        return extraStyleFinger
      }
    },

    calcul(){
      let randomform1 = Math.floor(Math.random() *this.form.length);
      let randomform2 = Math.floor(Math.random() *this.form.length);
      let randomMix = Math.floor(Math.random() *3);
      let randomOrigin = Math.floor(Math.random() *this.origin.length);
      let randomVarColorskin = Math.floor(Math.random() *5);
      let randomskin = Math.floor(Math.random() *this.skin.length+1);
      let randomSize = Math.floor(Math.random() *this.size.length);
      let randomColorskin1 = Math.floor(Math.random() *this.colorskin.length);
      let randomSizeDirection = Math.floor(Math.random() *2);
      let randomNumEye = Math.floor(Math.random() *this.numberEye.length);
      let randomJaw = Math.floor(Math.random() *this.jaw.length);
      let randomSizeJaw = Math.floor(Math.random() *this.sizeJaw.length);
      let randomBonus = Math.floor(Math.random() *4);
      let ifbonus = Math.floor(Math.random() *3);
      let iftail = Math.floor(Math.random() *2);
      let finalbonus = '';

      this.descriGen = '';
      this.descriForm = '';
      this.descriSize = '';
      this.descriSkin = '';
      this.descriHead = '';
      this.descriBonus = '';
      this.descriPaws = '';
      this.descriPawsExtra = '';
      this.descriTail = '';

      //mixage genetique générale
      this.descriGen = "Voici une créature qui sort " + this.origin[randomOrigin] + ".";
      if(randomMix == 0){
        this.descriForm = "Il a la forme d'un " + this.form[randomform1] + ".";
      }
      if(randomMix == 1){
        this.descriForm = "Il ressemble à un mélange entre un " + this.form[randomform1] + " et un " + this.form[this.bonusMix(randomform1)] + ".";
      }

      //la taille
      if (randomSizeDirection == 0 || this.form[randomform1] === 'serpent'){
        this.descriSize = "Il mesure aproximativemment " + this.size[randomSize] + " de long."
      }
      else if (randomSizeDirection == 1){
        this.descriSize = "Il mesure aproximativemment " + this.size[randomSize] + " de haut."
      }

      //la peau
      if(randomskin == this.skin.length+1){
        if(this.colorskin[randomColorskin1] == 'arc-en-ciel'){
          this.descriSkin = "Sa peau est de couleur arc-en-ciel.";
        }else{
          if(randomVarColorskin == 0){
            this.descriSkin = "Sa peau est de couleur " + this.colorskin[randomColorskin1] + ".";
          }
          if(randomVarColorskin == 1){
            this.descriSkin = "Sa peau est de couleur " + this.colorskin[randomColorskin1] + " avec des parties " + this.colorskin[this.calculcolorSkin2(randomColorskin1)] + ".";
          }
          if(randomVarColorskin == 2){
            let randomColorskin2 = this.calculColorSkin2(randomColorskin1);
            let randomColorskin3 = this.calculColorSkin3(randomColorskin1, randomColorskin2);
            this.descriSkin = "Sa peau est de couleur " + this.colorskin[randomColorskin1] + " avec des parties " + this.colorskin[randomColorskin2] + " et " + this.colorskin[randomColorskin3] + ".";
          }
          if(randomVarColorskin == 3){
            this.descriSkin = "Sa peau est zébré, de couleur " + this.colorskin[randomColorskin1] + " et " + this.colorskin[this.calculColorSkin2(randomColorskin1)] + ".";
          }
          if(randomVarColorskin == 4){
            this.descriSkin = "Sa peau est de couleur " + this.colorskin[randomColorskin1] + " avec des tâches " + this.colorskin[this.calculColorSkin2(randomColorskin1)] + ".";
          }
        }
      }
      // si il a une peau particulière
      if(randomskin < this.skin.length){
        if(this.colorskin[randomColorskin1] == 'arc-en-ciel'){
          this.descriSkin = "Il a une peau " + this.skin[randomskin] + ", de couleur arc-en-ciel.";
        }else{
          if(randomVarColorskin == 0){
            this.descriSkin = "Il a une peau " + this.skin[randomskin] + ", de couleur " + this.colorskin[randomColorskin1] + ".";
          }
          if(randomVarColorskin == 1){
           this.descriSkin = "Il a une peau " + this.skin[randomskin] + ", de couleur " + this.colorskin[randomColorskin1] + " avec des parties " + this.colorskin[this.calculColorSkin2(randomColorskin1)] + ".";
          }
          if(randomVarColorskin == 2){
            let randomColorskin2 = this.calculColorSkin2(randomColorskin1);
            let randomColorskin3 = this.calculColorSkin3(randomColorskin1, randomColorskin2);
            this.descriSkin = "Il a une peau " + this.skin[randomskin] + ", de couleur " + this.colorskin[randomColorskin1] + " avec des parties " + this.colorskin[randomColorskin2] + " et " + this.colorskin[randomColorskin3] + ".";
          }
          if(randomVarColorskin == 3){
            this.descriSkin = "Il a une peau " + this.skin[randomskin] + " zébrée, de couleur " + this.colorskin[randomColorskin1] + " et " + this.colorskin[this.calculColorSkin2(randomColorskin1)] + ".";
          }
          if(randomVarColorskin == 4){
            this.descriSkin = "Il a une peau " + this.skin[randomskin] + ", de couleur " + this.colorskin[randomColorskin1] + " avec des tâches " + this.colorskin[this.calculColorSkin2(randomColorskin1)] + ".";
          }
        }
      }

      //les yeux et la bouche 
      //si il n'a pas d'yeux
      if (randomNumEye == 0 ){
        if(this.jaw[randomJaw].includes("bec")){
          this.descriHead = "Il n'a pas d'yeux, mais il a un " + this.sizeBeak[randomSizeJaw] + " " + this.jaw[randomJaw] + ".";
        }else{
          this.descriHead = "Il n'a pas d'yeux, mais il a une " + this.sizeJaw[randomSizeJaw] + " " + this.jaw[randomJaw] + ".";
        }

      //si il a un seul oeil
      }else if (randomNumEye == 1){
        let randomSizeEye = Math.floor(Math.random() *this.sizeEye.length+1);
        if(randomSizeEye == this.sizeEye.length){
          if(this.jaw[randomJaw].includes("bec")){
            this.descriHead = "Il a un oeil gigantesque et un " + this.sizeBeak[randomSizeJaw] + " " + this.jaw[randomJaw] + ".";
          }else{
            this.descriHead = "Il a un oeil gigantesque et une " + this.sizeJaw[randomSizeJaw] + " " + this.jaw[randomJaw] + ".";
          }
        }else{
          if(this.jaw[randomJaw].includes("bec")){
            this.descriHead = "Il a un " + this.sizeEye[randomSizeEye] + " oeil et un " + this.sizeBeak[randomSizeJaw] + " " + this.jaw[randomJaw] + ".";
          }else{
            this.descriHead = "Il a un " + this.sizeEye[randomSizeEye] + " oeil et une " + this.sizeJaw[randomSizeJaw] + " " + this.jaw[randomJaw] + ".";
          }
        }

      //si il a plusieurs yeux
      }else if (randomNumEye > 1){
        let randomMulitSizeEye = Math.floor(Math.random() *this.multiSizeEye.length+1);
        if (randomMulitSizeEye == this.multiSizeEye.length ){
          if(this.jaw[randomJaw].includes("bec")){
            this.descriHead = "Il a " + this.numberEye[randomNumEye] + " yeux gigantesques et un " + this.sizeBeak[randomSizeJaw] + " " + this.jaw[randomJaw] + ".";
          }else{
            this.descriHead = "Il a " + this.numberEye[randomNumEye] + " yeux gigantesques et une " + this.sizeJaw[randomSizeJaw] + " " + this.jaw[randomJaw] + ".";
          }
        }else{
          if(this.jaw[randomJaw].includes("bec")){
            this.descriHead = "Il a " + this.numberEye[randomNumEye] + " " + this.multiSizeEye[randomMulitSizeEye] + " yeux et un " + this.sizeBeak[randomSizeJaw] + " " + this.jaw[randomJaw] + ".";
          }else{
            this.descriHead = "Il a " + this.numberEye[randomNumEye] + " " + this.multiSizeEye[randomMulitSizeEye] + " yeux et une " + this.sizeJaw[randomSizeJaw] + " " + this.jaw[randomJaw] + ".";
          }
        }
      }

      //bonus sur la tete

      //rien du tout
      if(randomBonus == 0) { 
        let tentacleYN = Math.floor(Math.random() *2);
        if (tentacleYN == 1){
          let randomTentacle = Math.floor(Math.random() *this.tentacle.length);
          this.descriBonus = "Il a aussi " + this.tentacle[randomTentacle] + " sur la tête.";
        }
      }

      //oreilles
      if(randomBonus == 1) { 
        let randomEars = Math.floor(Math.random() *this.ears.length);

        let iftentacle = ""
        let tentacleYN = Math.floor(Math.random() *2);
        if (tentacleYN == 1){
          let randomTentacle = Math.floor(Math.random() *this.tentacle.length);
          iftentacle = " et " + this.tentacle[randomTentacle]
        }
        this.descriBonus ="Il a aussi des " + this.ears[randomEars] + iftentacle + " sur la tête.";
      }

      // cornes
      if(randomBonus == 2) { 
        let ifHorn = "";
        let randomHorn = Math.floor(Math.random() *this.horn.length)+1;
        if (randomHorn < this.horn.length){
          let numberHorn = Math.floor(Math.random() *5) + 1;
          if (numberHorn == 1){
            ifHorn = "une " + this.horn[randomHorn]
          }
          if (numberHorn > 1){
            ifHorn = numberHorn + " " + this.horns[randomHorn]
          }
        }
        if (randomHorn == this.horn.length){
          ifHorn = "des bois";
        }
        let iftentacle = "";
        let tentacleYN = Math.floor(Math.random() *2);
        if (tentacleYN == 1){
          let randomTentacle = Math.floor(Math.random() *this.tentacle.length);
          iftentacle = " et " + this.tentacle[randomTentacle];
        }
        this.descriBonus ="Il a aussi " + ifHorn + iftentacle + " sur la tête.";
      }

      // oreilles et cornes
      if(randomBonus == 3) { 
        let randomEars = Math.floor(Math.random() *this.ears.length);
        
        let ifHorn = "";
        let randomHorn = Math.floor(Math.random() *this.horn.length)+1;
        if (randomHorn < this.horn.length){
          let numberHorn = Math.floor(Math.random() *5) + 1;
          if (numberHorn == 1){
            ifHorn = "qu'une " + this.horn[randomHorn]
          }
          if (numberHorn > 1){
            ifHorn = "que " + numberHorn + " " + this.horns[randomHorn]
          }
        }
        if (randomHorn == this.horn.length){
          ifHorn = " que des bois";
        }

        let iftentacle = "";
        let tentacleYN = Math.floor(Math.random() *2);
        if (tentacleYN == 1){
          let randomTentacle = Math.floor(Math.random() *this.tentacle.length);
          iftentacle = " et " + this.tentacle[randomTentacle];
        }
        this.descriBonus = "Il a aussi des " + this.ears[randomEars] + ", ainsi " + ifHorn + iftentacle + " sur la tête.";
      }

      //les molusques ont-ils des pattes ?
      let ifMoluskAsPaws = 0;
      if((this.form[randomform1] == 'molusque') && (randomMix == 0)){
        ifMoluskAsPaws = Math.floor(Math.random() *2);
      }

      //les pattes (sauf pour les serpents pur et les molusques pur qui n'ont pas de patte)
      if(!(this.form[randomform1] == 'serpent' && (randomMix == 0)) || ifMoluskAsPaws == 1){
        let randomPaws = Math.floor(Math.random() *10);
        let numberPaws = 0;
        let extraRacePaws = "";
        //si c'est insecte, mais qu'il n'a pas de pattes, il a plein de pattes
        if(randomPaws == 0 && (this.form[randomform1] !== 'insect' || this.form[randomform2] !== 'insect')){
          numberPaws = 'beaucoup de';
        
        //calcul des nombres de pattes 
        }else{
          switch(randomPaws){
            case 1:
              numberPaws = 2;
              break;

            case 2:
              numberPaws = 3;
              break;

            case 3:
            case 4: 
            case 5: 
            case 6:
              numberPaws = 4;
              break;

            case 7: 
            case 8:
              numberPaws = 6;
              break;

            default:
              numberPaws = 8;
              break;

          }
        }

        //si c'est un insecte, rajoute des ailes
        if(this.form[randomform1] == 'insect' || this.form[randomform2] == 'insect'){
          let randomInsectWings = Math.floor(Math.random() *3);
          if(randomInsectWings == 0){
            extraRacePaws = "une paire d'ailes et ";
          }if(randomInsectWings == 1){
            extraRacePaws = "plusieurs paires d'ailes et ";
          }
        }
        //si c'est un oiseau, rajoute des ailes
        if(this.form[randomform1] == 'oiseau' || this.form[randomform2] == 'oiseau'){
          let randomBirdWings = Math.floor(Math.random() *3);
          if(extraRacePaws == ""){
            extraRacePaws = "une paire d'ailes  et ";
          }else if(randomBirdWings == 1){
            extraRacePaws = "2 paires d'ailes et ";
          }else if(randomBirdWings == 2){
            extraRacePaws = "3 paires d'ailes  et ";
          }
        }
        // si c'est un poisson, rajoute des nageoires
        if(this.form[randomform1] == 'poisson' || this.form[randomform2] == 'poisson'){
          if(extraRacePaws == ""){
            let randomFishFin = Math.floor(Math.random() *3);
            if(randomFishFin == 0){
              extraRacePaws = "une paire de nageoires et ";
            }
            if(randomFishFin == 1){
              extraRacePaws = "deux paires de nageoires et ";
            }
            if(randomFishFin == 2){
              extraRacePaws = "3 paires de nageoires et ";
            }
          }
          else{
            extraRacePaws = "des nageoires, " + extraRacePaws;
          }
        }

        //calcul des pattes
        if(numberPaws > 0){
          let randomPawlength = Math.floor(Math.random() *this.pawLength.length);
          let ifPawOrTentacle = Math.floor(Math.random() *2);

          //tentacules
          if(ifPawOrTentacle == 0){

            let iftextured = Math.floor(Math.random() *2);
            let texture = '';
            if(iftextured == 1){
              let randomStylePaw = Math.floor(Math.random() *this.stylePaw.length);
              texture == this.stylePaw[randomStylePaw];
            }

            let ifextratentacle = Math.floor(Math.random() *2);
            let bonustentacle = '';
            let randomextratentacle = 0
            let randomextratentacles = 0
            if(ifextratentacle ===1){
              if(numberPaws === 1){
                randomextratentacle = Math.floor(Math.random() *this.extratentacle.length);
                bonustentacle = ' avec ' + this.extratentacle[randomextratentacle];
              }else{
                randomextratentacles = Math.floor(Math.random() *this.extratentacles.length);
                bonustentacle = ' avec ' + this.extratentacles[randomextratentacles];
              }
            }

            //si il y a une seule tentacule
            if(numberPaws == 1){
              this.descriPaws = "Il possède " + extraRacePaws + "une seule " + this.pawLength[randomPawlength] + " tentacule" + texture + bonustentacle + ".";
            //si il y a plusieurs tentacules
            }else{
              this.descriPaws = "Il possède " + extraRacePaws + numberPaws + this.pawsLength[randomPawlength] + " tentacules" +  texture + bonustentacle + ".";
            }

            //si il y a un mix des tentacules
            if(numberPaws >= 3){
              let ifmixed = Math.floor(Math.random() *2);
              if(ifmixed === 1){	
                let oneOrMoreTentacles = Math.floor(Math.random() *2);
                if(oneOrMoreTentacles === 0){
                  this.descriPaws = 'L\'une d\'entre elles possède ' + this.extratentacle[this.extrabonustentacle(randomextratentacle, oneOrMoreTentacles)] + '.';
                }else{
                  this.descriPaws = 'Mais certaines d\'entre elles possèdent ' + this.extratentacles[this.extrabonustentacle(randomextratentacles, oneOrMoreTentacles)] + '.';
                }
              }
            }

          //pattes
          }else{
            let numberfinger = Math.floor(Math.random() *5);
            let randomstylefinger = Math.floor(Math.random() * this.stylefinger.length)
            
            //si il y a une seule patte
            if(numberPaws == 1){
              let randomStylePaw = Math.floor(Math.random() *this.stylePaw.length);
              this.descriPaws = "Il possède " + extraRacePaws + "une seule " + this.pawLength[randomPawlength] + " patte" + this.stylePaw[randomStylePaw] + ' avec ' + (numberfinger + 2) + ' ' + this.stylefinger[randomstylefinger] + ".";

            //si il a plus d'une patte
            }else{
              let randomStylePaws = Math.floor(Math.random() *this.stylePaws.length);
              let mixfinger = 0;

              if (numberPaws >= 4){
                mixfinger = Math.floor(Math.random() *2);
              }

              // si toutes les pattes sont pareils
              if(mixfinger === 0){
                let mixpaws = Math.floor(Math.random() *4);
                let ifspecialpaws = Math.floor(Math.random() *2);
                //si c'est des pattes avec des doigts
                if(ifspecialpaws === 0){
                  if(mixpaws === 0){
                    this.descriPaws = "Il possède " + extraRacePaws + numberPaws + this.pawsLength[randomPawlength] + " pattes" + this.stylePaws[randomStylePaws] + ' avec ' + (numberfinger + 2) + ' ' + this.stylefinger[randomstylefinger] + ".";
                  }else if(mixpaws === 1){
                    this.descriPaws = "Il possède " + extraRacePaws + numberPaws + this.pawsLength[randomPawlength] + " pattes avec " + (numberfinger + 2) + ' ' + this.stylefinger[randomstylefinger] + ".";
                  }else if (mixpaws === 2){
                    this.descriPaws = "Il possède " + extraRacePaws + numberPaws + " pattes" + this.stylePaws[randomStylePaws] + ' avec ' + (numberfinger + 2) + ' ' + this.stylefinger[randomstylefinger] + ".";
                  }else{
                    this.descriPaws = "Il possède " + extraRacePaws + numberPaws + " pattes avec " + (numberfinger + 2) + ' ' + this.stylefinger[randomstylefinger] + ".";
                  }
                //si c'est des pattes spéciales
                }else{
                  let randomalterpaws = Math.floor(Math.random() *this.alterpaws.length);
                  if(mixpaws === 0){
                    this.descriPaws = "Il possède " + extraRacePaws + numberPaws + this.pawsLength[randomPawlength] + " pattes " + this.stylePaws[randomStylePaws] + ' en forme de ' + this.alterpaws[randomalterpaws] + ".";
                  }else if(mixpaws === 1){
                    this.descriPaws = "Il possède " + extraRacePaws + numberPaws + this.pawsLength[randomPawlength] + " pattes en forme de " + this.alterpaws[randomalterpaws] + ".";
                  }else if (mixpaws === 2){
                    this.descriPaws = "Il possède " + extraRacePaws + numberPaws + " pattes" + this.stylePaws[randomStylePaws] + ' en forme de ' + this.alterpaws[randomalterpaws] + ".";
                  }else{
                    this.descriPaws = "Il possède " + extraRacePaws + numberPaws + " pattes en forme de " + this.alterpaws[randomalterpaws] + ".";
                  }
                }

              //si il y a une variété des pattes
              }else{
                let ifspecialpaws = Math.floor(Math.random() *3);
                let randomOrdermix =  Math.floor(Math.random() *this.ordermix.length);
                let mixpaws = Math.floor(Math.random() *2);
                if(mixpaws === 0){
                  this.descriPaws = "Il possède " + extraRacePaws + numberPaws + this.pawsLength[randomPawlength] + " pattes" + this.stylePaws[randomStylePaws] + ' avec ' + (numberfinger + 2) + ' ' + this.stylefinger[randomstylefinger] + ".";
                }else if(mixpaws === 1){
                  this.descriPaws = "Il possède " + extraRacePaws + numberPaws + this.pawsLength[randomPawlength] + " pattes avec " + (numberfinger + 2) + ' ' + this.stylefinger[randomstylefinger] + ".";
                }else if (mixpaws === 2){
                  this.descriPaws = "Il possède " + extraRacePaws + numberPaws + " pattes" + this.stylePaws[randomStylePaws] + ' avec ' + (numberfinger + 2) + ' ' + this.stylefinger[randomstylefinger] + ".";
                }else{
                  this.descriPaws = "Il possède " + extraRacePaws + numberPaws + " pattes avec " + (numberfinger + 2) + ' ' + this.stylefinger[randomstylefinger] + ".";
                }

                //les pattes secondaires
                if(ifspecialpaws === 0){
                let numberextrafinger = this.extraFinger(numberfinger);
                let randomstyleextrafinger = this.extraStyleFinger(randomstylefinger);

                  if(numberextrafinger !== numberfinger && randomstyleextrafinger !== randomstylefinger){
                    this.descriPawsExtra = "Mais les pattes " + this.ordermix[randomOrdermix] + " ont " + (numberextrafinger + 2) +  ' ' + this.stylefinger[randomstyleextrafinger] + "."
                  }else if(numberextrafinger !== numberfinger && randomstyleextrafinger === randomstylefinger){
                    this.descriPawsExtra = "Mais les pattes " + this.ordermix[randomOrdermix] + " en ont " + (numberextrafinger + 2) +  "."
                  }else if(numberextrafinger === numberfinger && randomstyleextrafinger !== randomstylefinger){
                    this.descriPawsExtra = "Mais les pattes " + this.ordermix[randomOrdermix] + " ont des " + this.stylefinger[randomstyleextrafinger] + "."
                  }
                }else if(ifspecialpaws ===1){
                  let randomalterpaws = Math.floor(Math.random() *this.alterpaws.length);
                  this.descriPawsExtra = "Mais les pattes " + this.ordermix[randomOrdermix] + " sont en forme de " + this.alterpaws[randomalterpaws] + "."
                }else{
                  this.descriPawsExtra = "Mais les pattes " + this.ordermix[randomOrdermix] + " sont des tentacules."
                }
              }
            }
          }
        }
      }

      //si il y a une queue
      if(iftail === 0 || this.form[randomform1] === 'serpent' || this.form[randomform2] === 'serpent'){
        let randomtail = Math.floor(Math.random() *this.tail.length);

        if(ifbonus === 1){
          let randombonus =  Math.floor(Math.random() * this.bonus.length);
          finalbonus = this.bonus[randombonus]
        }else if( ifbonus === 2){
          let randombonus =  Math.floor(Math.random() * this.bonus.length);
          let randomextrabonus =  Math.floor(Math.random() * this.bonus.length);
          if(randombonus === randomextrabonus){
            finalbonus = this.bonus[randombonus]
          }else{
            finalbonus = this.bonus[randombonus] + ' et ' + this.bonus2[randomextrabonus]
          }
        }
        if(ifbonus === 0){
          this.descriTail = 'Il a une queue' + this.tail[randomtail] + '.';
        }else{
          this.descriTail = 'Il a une queue' + this.tail[randomtail] + ' ainsi ' + finalbonus + '.';
        }

      //pas de queue
      }else{
        if(ifbonus === 1){
          let randombonus =  Math.floor(Math.random() * this.bonus2.length);
          finalbonus = this.bonus2[randombonus]
        }else if( ifbonus === 2){
          let randombonus =  Math.floor(Math.random() * this.bonus2.length);
          let randomextrabonus =  Math.floor(Math.random() * this.bonus2.length);
          if(randombonus === randomextrabonus){
            finalbonus = this.bonus2[randombonus]
          }else{
            finalbonus = this.bonus2[randombonus] + ' et ' + this.bonus2[randomextrabonus]
          }
        }
        if(ifbonus !== 0){
          this.descriTail = 'Il n\'a pas de queue, mais il a ' + finalbonus + '.';
        }else{
          this.descriTail = 'Il n\'a pas de queue.';
        }
      }
    }
  },
};

</script>
