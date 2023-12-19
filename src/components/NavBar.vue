<template>
    <v-toolbar>
        <v-btn flat to="/">Messages</v-btn>
        <v-btn flat class="ml-2" to="/newmessage">New Message</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat v-if="!isLoggedIn" to="/register">Register</v-btn>
        <v-btn flat v-if="isLoggedIn" class="ml-2" @click="logout">Logout</v-btn>   
        <v-btn flat v-else class="ml-2" to="/login">Login</v-btn>   
    </v-toolbar>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '../stores/UserStore';
const userStore = useUserStore();

const isLoggedIn = computed(() => {
  return userStore.getToken !== null;
})

const logout = () => {
  // console.log('i am clicked');
  localStorage.clear('token');
  userStore.setToken(null);
}
</script>
