import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    messages:[],
  }),
  getters: {
    getAll: (state) => {
      return state.messages;
    },
    getMsgByIndex: (state) => (index) => {
      return state.messages[index];
    }
  },
  actions:{
    newMessage(messageBody) {
      this.$state.messages.push(messageBody);
    },
    setMessages(messages) {
      this.$state.messages = messages;
    }
  }
})