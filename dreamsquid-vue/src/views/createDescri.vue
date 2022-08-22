<template>
  <div id="create">

    <div class="err" v-if="error != '' ">
      <p> Erreur : {{error}} </p>
    </div>

    <div class="win" v-if="win != '' ">
            <p> {{win}} </p>
        </div>

    <div class="img-preview" v-if="win == '' ">
      <img id="preview" alt="Mon oeuvre" style="max-height:500px;" v-if="selectPicture ">
      <label for="picture" id="button-picture" v-if="!selectPicture">Choisir une image</label>
      <input type="file" @change="checkMedia()" id="picture" name="picture">
    </div>

    <div class="bloc-description" v-if="win == '' ">
      <p class="description">{{description.description}}</p>
      <div class="type" v-if="description.type">
        <h2> de type : </h2>
        <p>{{description.type}}</p>
      </div>
      <div class="align" v-if="description.alignement">
        <h2>alignement : </h2>
        <p>{{description.alignement}}</p>
      </div>
      <ul class="stats" v-if="description.stats">
        <li>
          <h2>Force</h2>
          <p>{{description.stats.fo}}</p>
        </li>
        <li>
          <h2>Dexterité</h2>
          <p>{{description.stats.dex}}</p>
        </li>
        <li>
          <h2>Constitution</h2>
          <p>{{description.stats.co}}</p>
        </li>
        <li>
          <h2>Intelligence</h2>
          <p>{{description.stats.int}}</p>
        </li>
        <li>
          <h2>Sagesse</h2>
          <p>{{description.stats.sag}}</p>
        </li>
        <li>
          <h2>Charisme</h2>
          <p>{{description.stats.cha}}</p>
        </li>
      </ul>
    </div>

    <input v-if="win == '' && !onLoad " type="button" class="button" value="envoyer" @click="postPicture()">
    <p v-if="onLoad"> Votre oeuvre est en cours d'envoie. Veuillez ne pas fermer cette page.</p>

  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import session from '../components/session.js';
  import { HTTP } from '../http-constants';

  export default {

    name: 'search',

    components: {
    },
    
    data() {
      return {
        description: '',
        picture:'',
        selectPicture: false,
        onLoad: false,
        error:'',
        win: '',
      }
    },
    
    computed:{
      ... mapState(['tokenStore', 'idStore', 'pseudoStore']),
    },
    
    created() {
      session.ForSession(this);
        HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
        HTTP.get('/auth/selectDescri',{params:{
            id: this.idStore,
            pseudo: this.pseudoStore,
            position: this.$route.params.idDescription
            }
        })
        .then(response =>{
            this.description = response.data.description
        })
        .catch(err=>{
            this.error = err.response.data.error;
        })
    },

    methods: {

        checkMedia(){
          let doc = document.getElementById('picture').files[0]
          if((doc.type === 'image/png') || (doc.type === 'image/jpg') ||(doc.type === 'image/jpeg')){
            this.error = ''
            var mediaPreview = new FileReader();
            mediaPreview.readAsDataURL(doc);
            mediaPreview.onload = function(file){
              document.getElementById('preview').src = file.target.result;
            }
            this.selectPicture = true ;
          }
          else{
            this.error = 'le fichier doit être au format .jpeg, .jpg ou .png.';
          }
        },

      postPicture(){
        if(this.selectPicture !==  true){
          this.error = 'Aucune oeuvre n\'a été séléctionné.';
        }
        else{
          this.onLoad = true;
          HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
          HTTP.defaults.headers.common['pseudo'] = this.pseudoStore;
          HTTP.defaults.headers.common['iddescription'] = this.$route.params.idDescription; 
          const form = new FormData();
          form.append("image", document.getElementById('picture').files[0], 'picture');
          HTTP.post('/picture/newPictureWithDescri', form)
          .then(() =>{
            this.win = 'Félicitation ! votre oeuvre à été posté !';
          })
          .catch(err =>{
            this.error = err.response.data.error;
          })
        }
      },

    },

  }
</script>