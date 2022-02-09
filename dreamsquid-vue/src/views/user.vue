<template>
    <div id="user">
        
        <div class="ensemble-info">

            <div class="info-nav">
                
                <ul>

                    <li>
                        <input type="radio" id="input-profil" value="0" v-model="calcul" >
                        <label for="input-profil">profil</label>
                    </li>

                    <li>
                        <input type="radio" id="input-descri" value="1" v-model="calcul" >
                        <label for="input-descri">mes descriptions</label>
                    </li>

                    <li>
                        <input type="radio" id="input-works" value="2" v-model="calcul" >
                        <label for="input-works">mes oeuvres</label>
                    </li>

                </ul>
            </div>

                <EcranProfil v-if="calcul == '0'" />
                <EcranDescri v-if="calcul == '1'" />
                <Ecran-works v-if="calcul == '2'" />

        </div>
        
    </div>
    <IconUser/>
</template>

<script>
    import { mapState } from 'vuex';
    import session from '../components/session.js';
    import IconUser from '../components/icon-user.vue';
    import EcranProfil from '../components/ecran-user/profil.vue';
    import EcranDescri from '../components/ecran-user/descri.vue';
    import EcranWorks from '../components/ecran-user/works.vue';

    export default {

        name: 'user',

        components: {
            IconUser,
            EcranProfil,
            EcranDescri,
            EcranWorks,
        },

        computed:{
            ... mapState(['tokenStore',]),
        },

        data() {
            return {
                calcul:0,
            }
        },
        
        created() {
            session.ForSession(this);
        },

        methods:{ 

        }

    }
</script>