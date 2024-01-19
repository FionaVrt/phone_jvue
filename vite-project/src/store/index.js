

import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name: 'Kai',
        number: '0808080808'
      },
      {
        name: 'Lucas',
        number: '0707070707'
      },
      {
        name: 'Donovan',
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
