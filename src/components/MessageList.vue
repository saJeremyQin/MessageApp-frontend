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
                <v-list-item-content @click.prevent="">
                    {{ message }}
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script setup>
import { ref } from "vue";
    const messages = ref([
        "first",
        "second",
        "Facts"
    ]);
    console.log(messages);
    console.log(messages.value);
</script>

<style scoped>
.v-list-item:hover {
    background-color: #e0e0e0;
}
</style>