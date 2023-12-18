import axios from 'axios';
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    messages:[],
  }),
  getters: {
    getAll: (state) => {
      return state.messages;
    },
    // getMsgByIndex: (state) => (index) => {
    //   return state.messages[index];
    // }
  },
  actions:{
    async fetchMessages() {
      const messages = (await (axios.get("http://localhost:3000/messages"))).data;
      console.log(messages);
      this.setMessages(messages);
      return messages;
    },
    async getMsgByIndex(index) {
      if(this.$state.messages.length < index + 1) {
        await this.fetchMessages();
      }
      return this.$state.messages[index];
    },
    newMessage(messageBody) {
      this.$state.messages.push(messageBody);
    },
    setMessages(messages) {
      this.$state.messages = messages;
    }
  }
})