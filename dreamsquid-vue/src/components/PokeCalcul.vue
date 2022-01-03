<template>
    <div id="pokeGen">
        <p class="descriptionGen"> Clique sur le bouton, et le générateur te donnera la description d'un nouveau Pokémon complètement unique ! </p>
        
        <div v-if="ValueBestiole === ''"  id="maBestiole"> Clique sur le bouton, si tu veux une description ! </div>
        <div v-if="ValueBestiole != ''" id="maBestiole">{{ValueBestiole}}</div>
        <div  v-if="ValuemonType != ''" class="deType">de type</div>
        <div  v-if="ValuemonType != ''" id="monType">{{ValuemonType}}</div>
    </div>
  <input id="random" type="button" value="Un autre !" @click="calcul()">    
</template>

<script>
export default {
  data() {
    return{
      ValuemonType: '',
      ValueBestiole: '',
      quality: '',
      typeList: ["normale","Feu","combat","eau","vol","plante","Poison","Electrik","sol","Psy","Roche","glace","insecte","Dragon","spectre","ténèbre","acier","Fée"],
      bestioleList: ["un dinosaure","un kangourou", "un elementaire", "un singe", "un guerrier", "un serpent", "un lézard", "un fauve", "un bovin", "un oiseau", "un poisson", "un objet", "un rongeur", "un molusque"],
      qualityList: ["avec des gros bras", "avec un seul oeil", "qui aime la musique", "avec un attribut culinaire", "avec des cornes ou des pics partout", "trop mignon", "divin", "qui fait de la magie", "avec un gros visage", "en version gros balèze", "spectral", "un peu flippant", "un peu moche"],
    }
  },
  methods: {

    bonuschimery(){
      let bestioleAleatoire = Math.floor(Math.random() * this.bestioleList.length);
      let qualityAleatoire = Math.floor(Math.random() * this.qualityList.length);
      let bestioleAleatoireBonus = Math.floor(Math.random() * this.bestioleList.length);

      if(bestioleAleatoireBonus !== bestioleAleatoire){
        this.ValueBestiole = "un mix entre " + this.bestioleList[bestioleAleatoire] + " et " + this.bestioleList[bestioleAleatoireBonus] + " " + this.qualityList[qualityAleatoire] + ".";
      }else if(bestioleAleatoireBonus == bestioleAleatoire){
        this.bonuschimery();
      }
    },

    calcul(){
      let pokeAleatoire1 = Math.floor(Math.random() * this.typeList.length);
      let pokeAleatoire2 = Math.floor(Math.random() * this.typeList.length);
      let numberType = Math.floor(Math.random()*2);
      let chimery = Math.floor(Math.random()*4);
      
      //la tronche de la bestiole
      if( chimery == 0){
        this.bonuschimery();
          
      }else{
        let bestioleAleatoire = Math.floor(Math.random() * this.bestioleList.length);
        let qualityAleatoire = Math.floor(Math.random() * this.qualityList.length);
        this.ValueBestiole = this.bestioleList[bestioleAleatoire] + " " + this.qualityList[qualityAleatoire] + ".";
      }

      //le type
      if( numberType == 1){
        if(this.typeList[pokeAleatoire1] === this.typeList[pokeAleatoire2]){
          this.ValuemonType = this.typeList[pokeAleatoire1];
        }else{
          this.ValuemonType = this.typeList[pokeAleatoire1] + ' et ' + this.typeList[pokeAleatoire2];
        }
      }else if(numberType === 0){
        this.ValuemonType = this.typeList[pokeAleatoire1];
      }
    }
  },
};

</script>
