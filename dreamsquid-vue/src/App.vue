<template>

  <header>
    <IconUser v-if="this.$route.name !== 'login' && this.$route.name !== 'register'"/>
    <div class="bkgd-header">
      <img src="./assets/logo-dreamsquid.svg" alt="logo DreamSquid">
      <h1>DreamSquid</h1>
      <p>un générateur de description aléatoire, pour dessiner à partir d'un texte !</p>
    </div>
  </header>

  <div id="nav">
    
    <router-link to="/generator" class="nav">Générateur</router-link>
    <router-link to="/search" class="nav">Rechercher</router-link>
  </div>

  <router-view/>

  <footer> 
    <div class="discord">tu souhaite participer au projet ? rejoint le serveur discord ! 
      <a href="https://discord.gg/PDvd877ygT"><i class="fa-brands fa-discord"></i>Discord</a>
    </div>
    <div>contact: <a href="mailto:rackhamledev@gmail.com">rackhamledev@gmail.com</a></div>
  </footer>
</template>

<script>
import IconUser from './components/icon-user.vue';

  export default {

    components: {
      IconUser 
    }
  }
</script>

<style lang="scss">
  @import './scss/style.scss';
</style>
