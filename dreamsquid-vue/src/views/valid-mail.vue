<template>
    <div class="mail">

        <div class="win" v-if="result == 1 ">
            <p> {{message}} </p>
        </div>
        
        <div class="err" v-if="result == 2 " >
            <p>Erreur : {{message}} </p>
        </div>

    </div>
</template>

<script>
    import { HTTP } from '../http-constants';

    export default {

        name:'validMail',

        data() {
            return {
                result: 0,
                message:'',
            }
        },
        
        created() {
            const formulaire = {
                id: this.$route.params.id,
                token: this.$route.params.token,
            };
            HTTP.put('/auth/validMail', formulaire)
            .then(res =>{
                this.result = 1
                this.message = res.data.message
            }
            )
            .catch(err => {
                this.result = 2,
                this.message = err.response.data.error
            });
        },

    }
</script>

