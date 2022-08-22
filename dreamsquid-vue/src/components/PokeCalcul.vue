<template>
    <div id="pokeGen">
        <p class="descriptionGen"> Clique sur le bouton, et le générateur te donnera la description d'un nouveau Pokémon complètement unique ! </p>
        
        <div v-if="generatorDescription === ''" id="maBestiole"> Clique sur le bouton, si tu veux une description ! </div>
        <div v-if="generatorDescription != ''" id="maBestiole">{{generatorDescription}}</div>
        <div v-if="generatorType != ''" class="deType">de type</div>
        <div v-if="generatorType != ''" id="monType">{{generatorType}}</div>
    </div>

    <div class="win" v-if="win != '' ">
      <p> {{win}} </p>
    </div>

    <div class="err" v-if="error != '' ">
      <p> Erreur : {{error}} </p>
    </div>

  <div class="list-option" v-if=" this.tokenStore != '' && generatorDescription != ''">
    <input class="button-option" type="button" :value=" 'Sauvegarder la description (' + this.number + '/10)'" v-if="number < 10" @click="saveDescri()">
    <router-link to="/create" class="button-option" >Enregistrer mon oeuvre </router-link>
  </div>

  <input id="random" type="button" value="Générer" @click="callDescri()">
</template>

<script>
  import { mapState } from 'vuex';
  import { HTTP } from '../http-constants';

export default {

  data() {

    return{
      generatorDescription: '',
      generatorType:'',
      win: '',
      error:'',
      number:'',
    }

  },

  computed:{
    ... mapState(['tokenStore', 'idStore', 'pseudoStore']),
  },

  created() {
    if(this.tokenStore != ''){
      HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
      HTTP.get('/auth/numberDescri', {params:{
        id: this.idStore,
        pseudo: this.pseudoStore
        }
      })
      .then(response =>{
        this.number = response.data.number;
      })
      .catch(err=>{
        this.error = err.response.data.error;
      })
    }
  },

  methods: {

    callDescri(){
      this.error = ''
      this.win = ''
      if(this.tokenStore != ''){
        HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
        HTTP.get('/calculator/auth/pokemon', {params:{
          id: this.idStore,
          pseudo: this.pseudoStore
          }
        })
        .then(response =>{
          this.generatorDescription = response.data.description;
          this.generatorType = response.data.type
        })
        .catch(err=>{
          this.error = err.response.data.error;
        })
      }

      else{
        HTTP.get('/calculator/pokemon')
        .then(response =>{
          //console.log(response)
          this.generatorDescription = response.data.description;
          this.generatorType = response.data.type
        })
        .catch(err=>{
          //console.log(err)
          this.error = err.response.data.error;
        })
      }
    },

    saveDescri(){
      HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
      HTTP.put('/calculator/save', {
            id: this.idStore,
            pseudo: this.pseudoStore
          })
      .then(response =>{
        this.number = this.number+1
        this.generatorDescription ='';
        this.generatorType = '';
        this.error = ''
        this.win = response.data.message;
      })
      .catch(err=>{
        this.win = ''
        this.error = err.response.data.error;
      })
    },

  }
};

</script>
