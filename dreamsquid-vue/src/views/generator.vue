<template>
  <div class="generator">
    <div id="themeGeneral">
                <p>Choix du theme</p> 
                <ul id="theme">

                    <li class="ensemble-carton">
                        <input type="radio" id="pokemon" value="0" v-model="calcul" >
                        <label for="pokemon">Pokémon</label>
                    </li> 
                    
                    <li class="ensemble-carton">
                      <input type="radio" id="JDR" value="1" v-model="calcul" >
                        <label for="JDR">JDR créator</label>
                    </li>

                    <li class="ensemble-carton">
                      <input type="radio" id="Persona" value="2" v-model="calcul" >
                        <label for="Persona">Persona</label>
                    </li>
                    <li class="ensemble-carton">
                      <input type="radio" id="Chimera" value="3" v-model="calcul" >
                        <label for="Chimera">Chimera</label>
                    </li>

                </ul>
            </div>
    <PokeCalcul v-if="calcul === '0'"/>
  </div>
</template>

<script>
import PokeCalcul from '../components/PokeCalcul.vue'
export default {
  name: 'generator',
  components: {
    PokeCalcul,
  },
  data() {
    return {
      calcul: '0',
    }
  },
  methods:{
  }
}
</script>