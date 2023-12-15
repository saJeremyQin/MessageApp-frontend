<template>
    <v-row>
        <v-col 
            cols="12"
            xs="10"
            offset-xs="1"
            md="8"
            offset-md="2"
        >
        <v-card width="100%" class="mx-auto">
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
import { useMessageStore } from "@/stores/MessageStore";
import { useRouter } from "vue-router";
const messageBody = ref("");
const store = useMessageStore();
const router = useRouter();

const submit = () => {
    axios.post("http://localhost:3000/messages", {message:messageBody.value}).then(
        function (response) {
            console.log(response.data);
            store.newMessage(messageBody.value);
            router.push({
                path:'/'     
            })
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