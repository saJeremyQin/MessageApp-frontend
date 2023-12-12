<template>
    <v-toolbar dark title="App"></v-toolbar>
    <v-row>
        <v-col 
            cols="12"
            xs="12"
            md="4"
            offset-md="4"
        >
        <v-card width="100%" class="mx-auto mt-4">
            <v-toolbar 
                    class="text-h4 dark"
                    title="New Message"
                ></v-toolbar>
            <v-form @submit.prevent>
                <v-text-field
                    label="Type here"
                ></v-text-field>
                <v-btn type="submit" class="mt-2 ml-2 mb-2">Submit</v-btn>
            </v-form>
        </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
// import { onMounted, ref } from "vue";
// import axios from 'axios';
//     const messages = ref([
//         "first",
//         "second",
//         "Facts"
//     ]);

    // onMounted(async () => { 
    //     try {
    //         const response = await axios.get("http://localhost:3000/messages");
    //         messages.value = response.data;
    //     } catch (error) {
    //         if(error.response) {
    //             console.error('Server responded with an error:', error.response.status);
    //         } else if(error.request) {
    //             console.error('No response received from the server');
    //         } else {
    //             console.error('Error in request setup:', error.message);
    //         }
    //     }
    // });
</script>

<style scoped>
.v-list-item:hover {
    background-color: #e0e0e0;
}
</style>