<template>
  <div class="search">
    <br>
    <h1>bientôt disponible !</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import session from '../components/session.js';

  export default {

    name: 'search',

    components: {
    },
    
    computed:{
      ... mapState(['tokenStore',]),
    },
    
    created() {
      session.ForSession(this);
    },

  }
</script>