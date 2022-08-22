<template>
  <div id="personaGen">
    <p class="descriptionGen">Clique sur le bouton, et le générateur te donnera la description détaillé d'une personne !</p>
    
    <div id="descriPersona">
      <p v-if="generatorDescription === ''"> Clique sur le bouton, si tu veux une description ! </p>
      <p v-if="generatorDescription != ''"> {{generatorDescription}} </p>
    </div>
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
          HTTP.get('/calculator/auth/persona', {params:{
            id: this.idStore,
            pseudo: this.pseudoStore
            }
          })
          .then(response =>{
            this.generatorDescription = response.data.description;
          })
          .catch(err=>{
            this.error = err.response.data.error;
          })
        }

        else{
          HTTP.get('/calculator/persona')
          .then(response =>{
            this.generatorDescription = response.data.description;
          })
          .catch(err=>{
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
