import { createStore } from 'vuex'
import axios from 'axios'
const baseUrl = 'http://localhost:1012'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    login( {commit}, loginDetails){
      axios.post(baseUrl+'/login',loginDetails)
      .then(res =>{
        console.log(res);
      })
    }
  },
  modules: {
  }
})
