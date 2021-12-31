<template>
  <div id="chimeraGen">
    <p class="descriptionGen">Clique sur le bouton, et le générateur te donnera la description d'une créature imaginaire !</p>
    
    <div id="descriChimera">
      <div >{{descriGen}}</div>
      <div id="descri-chimera-form"></div>
      <div id="descri-chimera-size"></div>
      <div id="descri-chimera-skin"></div>
      <div id="descri-chimera-head"></div>
      <div id="descri-chimera-bonus"></div>
      <div id="descri-chimera-paws"></div>
      <div id="descri-chimera-paws-extra"></div>
      <div id="descri-chimera-tail"></div>
    </div>
  </div>

  <input id="random" type="button" value="Un autre !" @click="calcul()">    
</template>

<script>
export default {
  data() {
    return{
      descriGen:'Clique sur le bouton, si tu veux une description !',
    }
  },
  methods: {

    calcul(){
        console.log('calcul chimera')
    }
  },
};

</script>
