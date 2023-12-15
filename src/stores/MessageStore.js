import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    messages:["default","2023","yes"],
  }),
  getters: {
    getAll: (state) => {
      return state.messages;
    },
    getMsgByIndex: (state) => (index) => {
      console.log(state.messages[index]);
      return state.messages[index];
    }
  },
  actions:{
    newMessage(messageBody) {
      this.$state.messages.push(messageBody);
    }
  }
})