<template>
    <div class="register" v-show="!win">
            
        <h2> Inscription </h2>

            <div class="err" v-if="error != '' ">
                <p> Erreur : {{error}} </p> 
            </div>

        <form>
            <fieldset>
                <input type="text" id="pseudo" class="value" v-model="pseudo" placeholder="pseudo" spellcheck="false" required> 
                <input type="email" id="mail" class="value"  v-model="mail" placeholder="adresse mail" spellcheck="false" required>
                <input type="password" id="password" class="value" v-model="mdp" spellcheck="false" placeholder="Mot de passe" required>
                <input type="password" id="ConfirmPassword" class="value" v-model="confirmMdp" spellcheck="false" placeholder="Confirmation du mot de passe" required>
                
                <input type='button' class="button" value="Créer un compte" @click="inscription" id="inscri-button">
            </fieldset>
        </form>

    </div>

    <div class="win" v-show="win">
        <p> Un e-mail de confirmation vous à été envoyé. </p>
    </div>
    
</template>

<script>
    import { HTTP } from '../http-constants';
    import session from '../components/session.js';
    let regexPseudo = new RegExp ('^([a-zA-Z-0-9_-]){3,20}$');
    let regexMail = new RegExp ('^[A-Za-z-_0-9.]+@([A-Za-z-_0-9-]+.)+[A-Za-z]$');
    let regexMdp = new RegExp ('^.{5,}$');

    export default{

        data() {
            return {
                pseudo:'',
                mail:'',
                mdp:'',
                confirmMdp:'',
                error: '',
                win: false,
            }
        },

        created() {
        session.ForNoSession(this);
        },
        
        methods: {
            inscription() {
                if(regexPseudo.test(this.pseudo) !== true){
                    this.error = 'Votre pseudo possède des caractères interdits. \n Entre 3 et 20 caractères, uniquement des lettres majuscules/minuscules, des chiffres et les tirets - _';
                }
                else if(regexMail.test(this.mail) !== true){
                    this.error = 'Votre adresse mail n\'est pas au bon format.';
                }
                else if(regexMdp.test(this.mdp) !== true){
                    this.error = 'Le mot de passe doit faire 5 caractères minimum.';
                }
                else if(this.mdp != this.confirmMdp){
                    this.error = 'Vous n\'avez pas réussi à confirmer le mot de passe.';
                }
                else{
                    const formulaire = {
                    pseudo: this.pseudo,
                    mail: this.mail,
                    mdp: this.mdp,
                    };
                    HTTP.post('/auth/signup', formulaire)
                    .then(
                        this.win = true,
                    )
                    .catch(err => {
                        this.error = err.response.data.error;
                    });
                }
            },
        }
        
    }
</script>
