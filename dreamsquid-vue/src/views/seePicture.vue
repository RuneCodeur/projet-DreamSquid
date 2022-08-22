<template>
    <div id="seePicture">
        <div class="err" v-if="error != '' ">
            <p> Erreur : {{error}} </p> 
        </div>

        <div class="ensemble-picture" v-if="error =='' && picture !=''">
            
            <p class="title">par {{pseudo}}</p>
            <p>le {{date.day}}/{{date.month}}/{{date.year}} à {{date.hour}}H{{date.min}}</p>

            <img v-bind:src="picture" alt="image">

            <div class="full-descri" >
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

        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { HTTP } from '../http-constants';
    import session from '../components/session.js';

    export default {

        name: 'seePicture',

        components: {
        },

        computed:{
            ... mapState(['tokenStore',]),
        },

        data() {
            return {
                picture:'',
                description:'',
                date: [],
                pseudo:'',
                error:''
            }
        },
        
        created() {
            session.PersistentSession(this);
            HTTP.defaults.headers['Cross-Origin-Resource-Policy'] = 'cross-origin';
            HTTP.get('/picture/onePicture', { params:{
                picture: this.$route.params.idPicture
                }
            })
            .then(response =>{
                this.picture = response.data.result[0]['picture']
                this.pseudo = response.data.result[0]['pseudo']
                this.description = JSON.parse(response.data.result[0]['description'])
                let formatDate = new Date(response.data.result[0]['date'])
                this.date['day'] = ("0" + formatDate.getDate()).slice(-2)
                this.date['year'] = formatDate.getFullYear()
                this.date['month'] = ("0" + (formatDate.getMonth()+1)).slice(-2)
                this.date['hour'] = ("0" + formatDate.getHours()).slice(-2)
                this.date['min'] = ("0" + formatDate.getMinutes()).slice(-2)
            })
            .catch(err=>{
                this.error = err.response.data.error;
            })
        },

        methods:{ 

        }

    }
</script>