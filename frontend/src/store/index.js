import { createStore } from 'vuex'
import axios from 'axios'
// axios defaults = withCredentials = true
const baseUrl = 'http://localhost:1012'

export default createStore({
  state: {
    // frineds: null,
    // loggedIn: false
  },
  getters: {
  },
  mutations: {
    // setFriends(state,payload){
    //   state.friends = payload
    // },
    // setlogged(state,payload){
    //   state.loggedIn = payload
    // }
  },
  actions: {
    // login( {commit}, loginDetails){
    //   axios.post(baseUrl+'/login',loginDetails)
    //   .then(res =>{
    //     console.log(res);
    //   })
    // }
  },
  modules: {
  }
})
