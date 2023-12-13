<template>
  <v-toolbar>
    <v-btn flat>Messages</v-btn>
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

