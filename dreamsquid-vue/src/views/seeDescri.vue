<template>
    <div id="see-descri">

        <div class="err" v-if="error != '' ">
            <p> Erreur : {{error}} </p>
        </div>

        <div class="win" v-if="win != '' ">
            <p> {{win}} </p>
        </div>

        <div class="full-descri" v-if="win == ''">
            <p class="description">{{description.description}}</p>
            <div class="type" v-if="description.type">
                <h2>de type</h2>
                <p>{{description.type}}</p>
            </div>
            <div class="align" v-if="description.alignement">
                <h2>Alignement</h2>
                <p>{{description.alignement}}</p>
            </div>
            <h2 v-if="description.stats">Statistiques</h2>
            <ul class="stats" v-if="description.stats">
                <li>
                    <h3>Force</h3>
                    <p>{{description.stats.fo}}</p>
                </li>
                <li>
                    <h3>Dexterité</h3>
                    <p>{{description.stats.dex}}</p>
                </li>
                <li>
                    <h3>Constitution</h3>
                    <p>{{description.stats.co}}</p>
                </li>
                <li>
                    <h3>Intelligence</h3>
                    <p>{{description.stats.int}}</p>
                </li>
                <li>
                    <h3>Sagesse</h3>
                    <p>{{description.stats.sag}}</p>
                </li>
                <li>
                    <h3>Charisme</h3>
                    <p>{{description.stats.cha}}</p>
                </li>
            </ul>
        </div>

    <div class="list-option" v-if="win == ''" >
        <input class="button-option delete-option" type="button" value=" Supprimer la description " @click="deleteDescri()">
        <router-link :to="{ name: 'createDescription', params: {idDescription: this.$route.params.idDescription }}" class="button-option" >Enregistrer mon oeuvre </router-link>
    </div>

    </div>

</template>

<script>
    import { HTTP } from '../http-constants';
    import { mapState } from 'vuex';
    import session from '../components/session.js';

    export default {

        name: 'descri',

        components: {
        },

        computed:{
            ... mapState(['tokenStore', 'idStore', 'pseudoStore']),
        },

        data() {
            return {
                description:'',
                error:'',
                win:'',
            }
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

        methods:{ 
            deleteDescri(){
                HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
                HTTP.delete('/auth/descri',{params:{
                    id: this.idStore,
                    pseudo: this.pseudoStore,
                    position: this.$route.params.idDescription
                    }
                })
                .then(response =>{
                    this.win = response.data.message
                    setTimeout(() => {
                        this.$router.push('/user')
                    }, 2000);
                })
                .catch(err=>{
                    this.error = err.response.data.error;
                })
            }
        }

    }
</script>