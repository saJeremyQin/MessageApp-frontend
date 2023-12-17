<template>
    <v-toolbar>
        <v-btn flat to="/">Messages</v-btn>
        <v-btn flat class="ml-2" to="/newmessage">New Message</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat to="/register">Register</v-btn>
        <v-btn flat class="ml-2">Login</v-btn>   
    </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>