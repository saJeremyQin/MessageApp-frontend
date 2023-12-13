import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    messages:[],
  }),
  getters: {
    getAll: (state) => {
      return state.messages;
    },
  },
  actions:{
    newMessage(messageBody) {
      this.$state.messages.push(messageBody);
    }
  }
})