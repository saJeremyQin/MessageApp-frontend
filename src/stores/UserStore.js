import { defineStore } from "pinia";

export const useUserStore = defineStore('userstore',{
    state: () => ({
        token: localStorage.getItem('token'),
    }),
    getters:  {
        getToken: (state) => {
            return state.token;
        }
    },
    actions: {
        setToken(tokenStr) {
            this.$state.token = tokenStr;
        }
    }
});