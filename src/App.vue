<template>
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

