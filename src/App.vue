<template>
  <!-- <v-toolbar>
    <v-btn flat to="/">Messages</v-btn>
    <v-btn flat class="ml-2" to="/newmessage">New Message</v-btn>
    <v-spacer></v-spacer>
    <v-btn flat>Register</v-btn>
    <v-btn flat class="ml-2">Login</v-btn>   
  </v-toolbar>
  <br> -->
  <div>
    <NavBar />
    <br>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

