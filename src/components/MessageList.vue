<template>
    <v-row>
        <v-col 
            cols="12"
            xs="10"
            md="6"
            offset-md="3"
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
// import axios from 'axios';
import { useMessageStore } from "@/stores/MessageStore";
const messages = ref([]);
const store = useMessageStore();

const fetchData = async() => {
    // const response = await axios.get("http://localhost:3000/messages");
    // messages.value = response.data;
    messages.value = store.getAll;
}

onMounted(async () => { 
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