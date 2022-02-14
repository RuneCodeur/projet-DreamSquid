<template>
    <div id="rpgGen">
        <p class="descriptionGen"> Clique sur le bouton, et le générateur te donnera la description d'un personnage de JDR, avec ses propre stats et son alignement !</p>
        
        <div id="description">
            <p v-if="generatorDescription === ''">Clique sur le bouton, si tu veux une description !</p>
            <p v-if="generatorDescription !== ''">{{generatorDescription}}</p>
        </div>

        <div v-if="generatorAlignement != ''" id="titleAlign">Alignement</div>
        <div v-if="generatorAlignement != ''" id="align">{{generatorAlignement}}</div>

        <div v-if="generatorStats.fo != null">Statistiques</div>

        <ul v-if="generatorStats.fo != null" >
            <li>
                <p>Force</p>
                <div>{{generatorStats.fo}}</div>
            </li>
            <li>
                <p>Dexterité</p> 
                <div>{{generatorStats.dex}}</div>
            </li>
            <li>
                <p>Constitution</p> 
                <div>{{generatorStats.co}}</div>
            </li>
            <li>
                <p>Intelligence</p> 
                <div>{{generatorStats.int}}</div>
            </li>
            <li>
                <p>Sagesse</p> 
                <div>{{generatorStats.sag}}</div>
            </li>
            <li>
                <p>Charisme</p> 
                <div>{{generatorStats.cha}}</div>
            </li>
        </ul>
    </div>

    <div class="win" v-if="win != '' ">
        <p> {{win}} </p>
    </div>

    <div class="err" v-if="error != '' ">
        <p> Erreur : {{error}} </p>
    </div>

    <div class="list-option" v-if=" this.tokenStore != '' && generatorDescription != ''">
        <input class="button-option" type="button" value=" Sauvegarder cette description " @click="saveDescri()">
    <router-link to="/create" class="button-option" >Enregistrer mon oeuvre </router-link>
    </div>

    <input id="random" type="button" value="Un autre !" @click="callDescri()"> 
</template>

<script>
    import { mapState } from 'vuex';
    import { HTTP } from '../http-constants';

    export default {
        data() {
            return{
                generatorDescription: '',
                generatorAlignement: '',
                generatorStats: Array,
                win: '',
                error:'',
            }
        },

        
        computed:{
        ... mapState(['tokenStore', 'idStore', 'pseudoStore']),
        },

        methods: {

            callDescri(){
                this.error = ''
                this.win = ''
                if(this.tokenStore != ''){
                    HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
                    HTTP.get('/calculator/auth/RPG', {params:{
                        id: this.idStore,
                        pseudo: this.pseudoStore
                        }
                    })
                    .then(response =>{
                        this.generatorDescription = response.data.description;
                        this.generatorAlignement = response.data.alignement;
                        this.generatorStats = response.data.stats;
                    })
                    .catch(err=>{
                        
                        this.error = err.response.data.error;
                    })
                }

                else{
                    HTTP.get('/calculator/RPG')
                    .then(response =>{
                        this.generatorDescription = response.data.description;
                        this.generatorAlignement = response.data.alignement;
                        this.generatorStats = response.data.stats;
                    })
                    .catch(err=>{
                        this.error = err.response.data.error;
                    })
                }
            },

            saveDescri(){
                HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
                HTTP.get('/calculator/save', {params:{
                    id: this.idStore,
                    pseudo: this.pseudoStore
                    }
                })
                .then(response =>{
                    this.generatorDescription ='';
                    this.generatorAlignement = '';
                    this.generatorStats = '';
                    this.error = ''
                    this.win = response.data.message;
                })
                .catch(err=>{
                    this.win = ''
                    this.error = err.response.data.error;
                })
            },
        }
    }

</script>
