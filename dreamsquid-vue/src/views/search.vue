<template>
  <div class="search">
    <br>
    <h1>bientôt disponible !</h1>
  </div>
  <icon-user/>
</template>

<script>
  import { mapState } from 'vuex';
  import session from '../components/session.js';
  import iconUser from '../components/icon-user.vue';

  export default {

    name: 'search',

    components: {
      iconUser 
    },
    computed:{
            ... mapState(['tokenStore',]),
        },
    
    created() {
      session.PersistentSession(this);
    },

  }
</script>