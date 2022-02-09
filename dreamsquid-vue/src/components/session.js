
export default {

  PersistentSession(vue){
    if(vue.tokenStore == '' && localStorage.getItem('user')){
      let userStorage = JSON.parse(localStorage.getItem('user'));
      vue.$store.dispatch('connect_user', userStorage);
    }
  },
  
  ForSession(vue){
    if(vue.tokenStore == ''){
      if(localStorage.getItem('user')){
        let userStorage = JSON.parse(localStorage.getItem('user'));
        vue.$store.dispatch('connect_user', userStorage);
      }else{
        vue.$store.dispatch('disconnect_user');
        vue.$router.push('/');
      }
    }
  },

  ForNoSession(vue){
    if(vue.tokenStore == ''){
      if(localStorage.getItem('user')){
        vue.$router.push('/');
      }else{
        vue.$store.dispatch('disconnect_user');
      }
    }else{
      if(localStorage.getItem('user')){
        let userStorage = JSON.parse(localStorage.getItem('user'));
        vue.$store.dispatch('connect_user', userStorage);
        vue.$router.push('/');
      }
    }
  },

}