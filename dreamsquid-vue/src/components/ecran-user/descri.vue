<template>
    <div id="descri">
       <p> Bientôt disponible ! </p>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {

        name: 'descri',

        components: {
        },

        computed:{
            ... mapState(['tokenStore',]),
        },

        data() {
            return {
            }
        },
        
        created() {
        },

        methods:{ 

        }

    }
</script>