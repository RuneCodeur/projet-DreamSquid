import { createStore } from 'vuex'

export default createStore({
  state: {

    idStore: '',
    pseudoStore: '',
    tokenStore: '',
    mailStore: '',
    
  },
  
  mutations: {
    value_user(state, res){
      state.idStore = res.id
      state.pseudoStore = res.pseudo
      state.tokenStore = res.token
      state.mailStore = res.mail
    },
    user_sessionStorage(state, res){
      localStorage.setItem('user', JSON.stringify(res));
    },
  },

  actions: {
    connect_user(context, res){
      context.commit('value_user', res)
      context.commit('user_sessionStorage', res)
    },

    maj_pseudo(context, res){
      let response = {
        id: context.state.idStore,
        pseudo: res,
        token: context.state.tokenStore,
        mail: context.state.mailStore,
      }
      context.commit('value_user', response)
      context.commit('user_sessionStorage', response)
    },
    maj_mail(context, res){
      let response = {
        id: context.state.idStore,
        pseudo: context.state.pseudoStore,
        token: context.state.tokenStore,
        mail: res,
      }
      context.commit('value_user', response)
      context.commit('user_sessionStorage', response)
    },

    disconnect_user(context){
      let response = {
        token:'',
        pseudo:'',
        mail: '',
        id:'',
        status:'',
      }
      context.commit('value_user', response)
      localStorage.clear();
    },
  },

  modules: {
  }
})
