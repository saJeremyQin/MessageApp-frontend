<template>
  <v-toolbar>
    <v-btn flat to="/">Messages</v-btn>
    <v-btn flat class="ml-2" to="/newmessage">New Message</v-btn>
    <v-spacer></v-spacer>
    <v-btn flat>Login</v-btn>
  </v-toolbar>
  <br>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

