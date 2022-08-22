<template>
  <div id="home">
    <div>
      <h2 class="title"> Envie de stimuler ta créativité ? </h2>
      <p>DreamSquid propose un générateur de texte aléatoire, pour dessiner à partir d'un texte !</p>
    </div>
    
    <div class="pict pict-g">
      <div class="picture">
        <img src="./../assets/exemple-1.png" alt="exemple d'oeuvre">
      </div>
      <div class="descri">
        <div class="middle-title">
          <h3>Comment sa marche ?</h3>
        </div>
        <ol>
          <li>Crée un compte</li>
          <li>Choisi un thème de générateur</li>
          <li>Appuie sur "Générer" pour obtenir une description aléatoire</li>
          <li>Sauvegarde tes descriptions</li>
          <li>Prend une photo de ton oeuvre (dessin, peinture, sculpture, etc...) et enregistre le sur DreamSquid !</li>
        </ol>
        <p>Si tu ne souhaites pas créer de compte, tu pourras quand même générer des descriptions</p>
      </div>
    </div>

    <div class="pict pict-d">
      <div class="descri">
        <div class="middle-title">
          <h3>Pour quoi faire ?</h3>
        </div>
        <p>L'aléatoire peut donner des résultats très intéressants !</p>
        <p>Pour une même description, 2 artistes peuvent créer une oeuvre totalement différente</p>
        <p>Tu es scénariste ou écrivain ? tu as besoin de créatures ou personnages mais tu n'as pas d'idées ? Ce générateur pourrait t'être utile</p>
        <p>Et surtout, DreamSquid est un très bon exercice créatif pour les artistes de tous niveaux !</p>
      </div>
      <div class="double-picture">
        <div class="gene-descri">
          <p class="descri-top">un guerrier trop mignon</p>
          <p class="descri-middle">de type</p>
          <p class="descri-bottom">dragon combat</p>
        </div>
        <img src="./../assets/exemple-21.png" alt="premier exemple de dessin">
        <img src="./../assets/exemple-22.png" alt="deuxième exemple de dessin">
      </div>
    </div>

    <div class="fonc">
      <div class="middle-title">
        <h3>Liste des fonctionnalités</h3>
      </div>
      <ul>
        <li>Générateur de description de pokémon</li>
        <li>Générateur de description de personnage de jeu de rôles</li>
        <li>Générateur de description de visage humain</li>
        <li>Générateur de description de créature imaginaire</li>
        <li>Création d'un compte</li>
        <li>Sauvegarde la dernière description générée</li>
        <li>Sauvegarder 10 description maximum pour plus tard</li>
        <li>Enregistrer une oeuvre personnelle</li>
      </ul>
    </div>

  </div>
</template>

<script>

  import { mapState } from 'vuex';
  import session from '../components/session.js';

  export default {

    name: 'home',
    
    computed:{
      ... mapState(['tokenStore',]),
    },

    components: {
     
    },

    data() {
      return {
        
      }
    },
    
    created() {
      session.PersistentSession(this);
    },

    methods:{
    }

  }
</script>