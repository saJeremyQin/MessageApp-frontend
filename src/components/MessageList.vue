<template>
    <div>
        <h4 class="text-h4">Messages</h4>
        <!-- <ul>
            <li v-for="(message,index) in messages" :key="index">{{ message }}</li>
        </ul> -->
        <v-list>
            <v-list-item 
                v-for="(message,index) in messages" 
                :key="index"
                class="v-list-item"
            >
                {{ message }}
            </v-list-item>
        </v-list>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from 'axios';
    const messages = ref([
        "first",
        "second",
        "Facts"
    ]);

    onMounted(async () => { 
        try {
            const response = await axios.get("http://localhost:3000/messages");
            messages.value = response.data;
        } catch (error) {
            if(error.response) {
                console.error('Server responded with an error:', error.response.status);
            } else if(error.request) {
                console.error('No response received from the server');
            } else {
                console.error('Error in request setup:', error.message);
            }
        }
    });
</script>

<style scoped>
.v-list-item:hover {
    background-color: #e0e0e0;
}
</style>