<template>
    <div id="profil">
        
        <h1>Mon Profil</h1>
        
        <div class="win" v-if="result == 1 ">
            <p> {{message}} </p>
        </div>
        
        <div class="err" v-if="result == 2 " >
            <p>Erreur : {{message}} </p>
        </div>

        <div class="bloc-info">

            <!--<img :src="img" @error="$event.target.src='http://localhost:8080/img/defaut.156d692e.png'"  alt="ma photo">
            <img src="../assets/defaut.png" alt="">
            <div class="modify-info"  v-if="modify == 1">  
                <input type="button" class="button" value='Changer la photo'>
            </div>-->

            <ul class="info" v-if="modify == 0">
                <li>
                    <p> Pseudo </p>
                    <p class="value"> {{this.pseudoStore}} </p>
                </li>

                <li>
                    <p> Adresse e-mail</p>
                    <p class="value"> {{this.mailStore}} </p>
                </li>
             </ul>

             <ul class="modify-info" v-if="modify == 1">
                 <li>
                     <p>Pseudo</p>
                     <form method="post">
                        <fieldset>
                            <input type="text" id="pseudo" class="value" name="pseudo" v-model="pseudo" spellcheck="false" autocomplete="off" required> 

                            <input type='button' class="button" value="changer le pseudo" @click="modifyPseudo">
                        </fieldset>
                    </form>
                 </li>

                 <li>
                     <p>Adresse e-mail</p>
                     <form method="post">
                        <fieldset>
                            <input type="text" id="mail" class="value" name="mail" v-model="mail" spellcheck="false" autocomplete="off" required> 

                            <input type='button' class="button" value="changer l'adresse e-mail" @click="modifyMail">
                        </fieldset>
                    </form>
                 </li>

                 <li>
                     <p>Mot de passe</p>
                     <form>
                        <fieldset>
                            <input type="password" id="password" class="value" name="password" v-model="password" placeholder="mot de passe" spellcheck="false" required>
                            <input type="password" id="confirmPassword" class="value" name="confirmPassword" v-model="confirmPassword" placeholder="confirmer le mot de passe" spellcheck="false" required> 

                            <input type='button' class="button" value="modifier le mot de passe" @click="modifyPassword">
                        </fieldset>
                    </form>
                 </li>
             </ul>
        </div>

        <div class="bloc-info">
            
        </div>

        <input class="modify" type="button" value="Modifier mon profil" @click=" modify= 1" v-if="modify == 0" >
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapActions } from 'vuex';
    import { HTTP } from '../../http-constants';
    let regexPseudo = new RegExp ('^([a-zA-Z-0-9_-]){3,20}$');
    let regexMail = new RegExp ('^[A-Za-z-_0-9.]+@([A-Za-z-_0-9-]+.)+[A-Za-z]$');
    let regexMdp = new RegExp ('^.{5,}$');

    export default {

        name: 'descri',

        components: {
        },

        computed:{
            ... mapState(['tokenStore','pseudoStore', 'mailStore']),
        },

        data() {
            return {
                img:'http://localhost:8080/img/defaut.png',
                pseudo: this.$store.state.pseudoStore,
                mail: this.$store.state.mailStore,
                confirmPassword: '',
                password:'',
                modify: 0,
                result:0,
                message:'',
            }
        },
        
        created() {
        },

        methods:{
            ... mapActions(['maj_pseudo']),

            modifyPseudo(){
                if(regexPseudo.test(this.pseudo) !== true){
                    this.message = 'Votre pseudo possède des caractères interdits. \n Entre 3 et 20 caractères, uniquement des lettres majuscules/minuscules, des chiffres et les tirets - _';
                    this.result = 2;
                }
                else{
                    const formulaire = {
                    newPseudo: this.pseudo,
                    oldPseudo: this.$store.state.pseudoStore,
                    id: this.$store.state.idStore,
                    };
                    HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
                    HTTP.put('/auth/modifyPseudo', formulaire)
                    .then(res =>{
                        this.$store.dispatch('maj_pseudo', this.pseudo);
                        this.message = res.data.message;
                        this.result = 1;
                        })
                    .catch(err => {
                        this.message = err.response.data.error;
                        this.result = 2;
                    });
                }
            },

            modifyMail(){
                if(regexMail.test(this.mail) !== true){
                    this.message = 'Votre adresse mail n\'est pas au bon format.';
                    this.result = 2;
                }
                else{
                    const formulaire = {
                    newMail: this.mail,
                    oldMail: this.$store.state.mailStore,
                    id: this.$store.state.idStore,
                    };
                    HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
                    HTTP.put('/auth/modifyMail', formulaire)
                    .then(res =>{
                        this.$store.dispatch('maj_mail', this.mail);
                        this.message = res.data.message;
                        this.result = 1;
                        })
                    .catch(err => {
                        this.message = err.response.data.error;
                        this.result = 2;
                    });
                }
            },
            
            modifyPassword(){
                if(regexMdp.test(this.password) !== true){
                    this.password = '';
                    this.confirmPassword = '';
                    this.message = 'Le mot de passe doit faire 5 caractères minimum.';
                    this.result = 2;
                }
                else if(this.password != this.confirmPassword){
                    this.password = '';
                    this.confirmPassword = '';
                    this.message = 'Vous n\'avez pas réussi à confirmer le mot de passe.';
                    this.result = 2;
                }
                else{
                    const formulaire = {
                    password: this.password,
                    pseudo: this.$store.state.pseudoStore,
                    id: this.$store.state.idStore,
                    };
                    HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
                    HTTP.put('/auth/modifyPassword', formulaire)
                    .then(res =>{
                        this.password = '';
                        this.confirmPassword = '';
                        this.message = res.data.message;
                        this.result = 1;
                        })
                    .catch(err => {
                        this.password = '';
                        this.confirmPassword = '';
                        this.message = err.response.data.error;
                        this.result = 2;
                    });
                }
            }
        }

    }
</script>