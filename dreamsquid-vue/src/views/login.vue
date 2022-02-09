<template>
    <div class="login">
            
        <h2> Connexion </h2>

        <router-link  to="/register" class="noAccount" > Pas encore de compte ? </router-link>

        <div class="err" v-if="error != '' ">
            <p> Erreur : {{error}} </p>
        </div>

        <form >
            <fieldset>
                <input type="text" id="pseudo" class="value" name="pseudo" v-model="pseudo" placeholder="pseudo" spellcheck="false" required> 
                <input type="password" id="password" class="value" name="password" v-model="mdp" placeholder="Mot de passe" spellcheck="false" required>
                
                <input type='button' class="button" value="Connexion" @click="inscription" id="inscri-button">
            </fieldset>
        </form>

    </div>
</template>

<script>
    import { HTTP } from '../http-constants';
    import { mapState } from 'vuex';
    import { mapActions } from 'vuex';
    import session from '../components/session.js';

    export default{
        
        computed:{
        ... mapState(['tokenStore',]),
    },

        data() {
            return {
            pseudo:'',
            mdp:'',
            error: '',
            }
        },
        
        created() {
        session.ForNoSession(this);
        },
        
        methods: {
            ... mapActions(['connect_user']),

            inscription() {
                if(this.pseudo == ''){
                    this.error = 'Vous n\'avez pas renseigné de pseudo.';
                }
                else if(this.mdp == ''){
                    this.error = 'Vous n\'avez pas renseigné le mot de passe.';
                }
                else{
                    HTTP.get('/auth/login', { params:{
                        pseudo: this.pseudo,
                        mdp: this.mdp,
                        }
                    })
                    .then(response =>{
                        this.$store.dispatch('connect_user', response.data);
                        this.$router.push('/');
                    })
                    .catch(err => {
                        console.log(err);
                        this.error = err.response.data.error;
                    });
                }
            },
        }
        
    }
</script>
