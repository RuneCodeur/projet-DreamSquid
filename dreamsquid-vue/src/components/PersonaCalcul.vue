<template>
  <div id="personaGen">
    <p class="descriptionGen">Clique sur le bouton, et le générateur te donnera la description détaillé d'une personne !</p>
    
    <div id="descriPersona">
      <div id="descri-gene-perso">Clique sur le bouton, si tu veux une description !</div>
      <div id="descri-gene-hair"></div>
      <div id="descri-gene-eye"></div>
      <div id="descri-gene-neck"></div>
      <div id="descri-gene-bottom"></div>
      <div id="descri-gene-top"></div>
      <div id="descri-gene-bonus"></div> 
    </div>
  </div>

  <input id="random" type="button" value="Un autre !" @click="calcul()">    
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods: {

    calcul(){
        console.log('calcul persona')
    }
  },
};

</script>
