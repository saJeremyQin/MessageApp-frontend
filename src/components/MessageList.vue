<template>
    <v-row>
        <v-col 
            cols="12"
            xs="12"
            md="4"
            offset-md="4"
        >
            <v-card>
                <v-toolbar 
                    class="text-h4 dark"
                    title="Messages"
                ></v-toolbar>
                <v-list>
                    <v-list-item 
                        v-for="(message,index) in messages" 
                        :key="index"
                        class="v-list-item"
                    >
                        {{ message }}
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from 'axios';
import eventBus from "@/utils/eventBus";

const messages = ref([]);
// doesn't work, Uncaught ReferenceError: Cannot access 'fetchData' before initialization
// eventBus.on('update-messages', fetchData); 
eventBus.on('update-messages', () => {
    fetchData();
});

const fetchData = async() => {
    const response = await axios.get("http://localhost:3000/messages");
    messages.value = response.data;
}

onMounted(async () => { 
    // this.$root.$on('update-messages', message => {
    //     messages.push(message);
    // })
    try {
      fetchData();
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