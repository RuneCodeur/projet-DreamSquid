<template> 
    <div id="icon-user">
      <router-link to="/login" class="link-to-connect" v-if="$store.state.tokenStore == ''">
        <p>Connexion</p>
      </router-link>

      <div class='icon-user' v-else >
        <router-link to="/user" class="icon">
          <p>mon compte</p>
          <i class="fa-solid fa-circle-user"></i>
        </router-link>
          
        <div class="disconnect" @click="disconnect()">
          <i class="fa-solid fa-right-from-bracket"></i>
          <p>Déconnexion</p>
        </div>

      </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { mapActions } from 'vuex';
export default {

  name: 'iconUser',

  computed:{
    ... mapState(['tokenStore',]),
  },

  methods: {
    ... mapActions(['disconnect_user']),

    disconnect(){
      this.$store.dispatch('disconnect_user');
      this.$router.push('/');
    }

  },
}
</script>