<template>
  <div id="search">

    <div class="err" v-if="error != '' ">
      <p> Erreur : {{error}} </p>
    </div>

    <ul v-if="error == '' ">
      <li v-for="work of workList" v-bind:key="work">
        <router-link :to="{ name: 'picture', params: {idPicture: work.id }}" class="bloc-work">
          <img v-bind:src="work.picture" alt="image">
          <p> {{work.pseudo}}</p>
        </router-link>
      </li>

    </ul>

  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { HTTP } from '../http-constants';
  import session from '../components/session.js';

  export default {

    name: 'search',

    components: {
    },
    data() {
      return {
        workList:[],
        error:'',
        page: 0,
      }
    },
    
    computed:{
      ... mapState(['tokenStore',]),
    },
    
    created() {
      session.PersistentSession(this);
      HTTP.defaults.headers['Cross-Origin-Resource-Policy'] = 'cross-origin';
      HTTP.get('/picture/all', { params:{
        page: this.page
        }
      })
      .then(response =>{
        this.workList = response.data.result;
        if(this.workList[0] == null){
          this.error = 'rien à montrer pour le moment :('
        }
      })
      .catch(err=>{
        this.error = err.response.data.error;
      })
    },
    
    methods: {
    },

  }
</script>