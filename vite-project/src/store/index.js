

import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name: 'Gérard',
        number: '0808080808'
      },
      {
        name: 'Sylvie',
        number: '0707070707'
      },
      {
        name: 'Estéban',
        number: '0606060606'
      }
    ],

    history: [
      
    ]
  },
  getters: {
  },
  mutations: 
    { 
      insertContact(state, contact){
        state.contacts.unshift(contact)
      },

    addCall(state, call) {
      state.history.push(call)
    },
    addHistory(state, history){
      state.historyCalls.unshift(history)
    }
  },
  actions: {
  },
  modules: {
  }
})
