<template>
    <div id="descri">
        <div class="err" v-if="error != '' " >
            <p>Erreur : {{error}} </p>
        </div>

        <div class="last-descri" v-if="lastDescription ">
            <h1> Dernière description généré </h1>

            <div class="bloc-description">
                <p class="description">{{lastDescription.description}}</p>
                <div class="type" v-if="lastDescription.type">
                    <h2> de type : </h2>
                    <p>{{lastDescription.type}}</p>
                </div>
                <div class="align" v-if="lastDescription.alignement">
                    <h2>alignement : </h2>
                    <p>{{lastDescription.alignement}}</p>
                </div>
                <ul class="stats" v-if="lastDescription.stats">
                    <li>
                        <h2>Force</h2>
                        <p>{{lastDescription.stats.fo}}</p>
                    </li>
                    <li>
                        <h2>Dexterité</h2>
                        <p>{{lastDescription.stats.dex}}</p>
                    </li>
                    <li>
                        <h2>Constitution</h2>
                        <p>{{lastDescription.stats.co}}</p>
                    </li>
                    <li>
                        <h2>Intelligence</h2>
                        <p>{{lastDescription.stats.int}}</p>
                    </li>
                    <li>
                        <h2>Sagesse</h2>
                        <p>{{lastDescription.stats.sag}}</p>
                    </li>
                    <li>
                        <h2>Charisme</h2>
                        <p>{{lastDescription.stats.cha}}</p>
                    </li>
                </ul>
            </div>

        </div>

        <div class="my-description" v-if="descriptionRegistred != ''">
            <h1>Mes descriptions sauvegardés</h1>
            <ul v-for="item in descriptionRegistred" :key="item">
                <li class="bloc-description">
                    <p class="description">{{item.description}}</p>
                    <div class="type" v-if="item.type">
                        <h2> de type : </h2>
                        <p>{{item.type}}</p>
                    </div>
                    <div class="align" v-if="item.alignement">
                        <h2> alignement : </h2>
                        <p>{{item.alignement}}</p>
                    </div>
                    <ul class="stats" v-if="item.stats">
                        <li>
                            <h2>Force</h2>
                            <p>{{item.stats.fo}}</p>
                        </li>
                        <li>
                            <h2>Dexterité</h2>
                            <p>{{item.stats.dex}}</p>
                        </li>
                        <li>
                            <h2>Constitution</h2>
                            <p>{{item.stats.co}}</p>
                        </li>
                        <li>
                            <h2>Intelligence</h2>
                            <p>{{item.stats.int}}</p>
                        </li>
                        <li>
                            <h2>Sagesse</h2>
                            <p>{{item.stats.sag}}</p>
                        </li>
                        <li>
                            <h2>Charisme</h2>
                            <p>{{item.stats.cha}}</p>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { HTTP } from '../../http-constants';

    export default {

        name: 'descri',

        components: {
        },

        computed:{
            ... mapState(['tokenStore', 'idStore', 'pseudoStore']),
        },

        data() {
            return {
                descriptionRegistred: '',
                lastDescription: '',
                error:'',
            }
        },
        
        created() {
            HTTP.defaults.headers.common['Authorization'] = `bearer ${this.tokenStore}`;
            HTTP.get('/auth/myDescri',{params:{
            id: this.idStore,
            pseudo: this.pseudoStore
            }
          })
            .then(response =>{
                this.lastDescription = JSON.parse(response.data.lastDescription)
                this.descriptionRegistred = JSON.parse(response.data.descriptionRegistred)
                console.log( JSON.parse(response.data.lastDescription))
                console.log(JSON.parse(response.data.descriptionRegistred))
                
            })
            .catch(err=>{
                this.error = err.response.data.error;
            })
        },

        methods:{ 

        }

    }
</script>