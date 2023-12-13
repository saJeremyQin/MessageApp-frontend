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
                    v-model="messageBody"
                ></v-text-field>
                <v-btn 
                    type="submit" 
                    class="mt-2 ml-2 mb-2" 
                    @click="submit" 
                >
                    Submit
                </v-btn>
            </v-form>
        </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from "vue";
import axios from 'axios';
import storeState from "@/store";
const messageBody = ref("");

const submit = () => {
    axios.post("http://localhost:3000/messages", {message:messageBody.value}).then(
        function (response) {
            console.log(response.data);
            storeState.messages.push(messageBody.value);
        }
    ).catch (
        function (error) {
            console.log(error);
        }
    );
}
</script>

<style scoped>
.v-list-item:hover {
    background-color: #e0e0e0;
}
</style>