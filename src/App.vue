<template>
  <v-toolbar>
    <v-btn flat>Messages</v-btn>
    <v-spacer></v-spacer>
    <v-btn flat>Login</v-btn>
  </v-toolbar>
  <NewMessage />
  <MessageList />
</template>

<script>
import NewMessage from './components/NewMessage.vue';
import MessageList from './components/MessageList.vue';
export default {
  name: 'App',
  components: {
    MessageList,
    NewMessage
  }
}
</script>

