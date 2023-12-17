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
                title="Message"
            ></v-toolbar>
          
            <v-card-title>
                {{ messageBody.text }}
            </v-card-title>  
            <v-card-subtitle>
                {{ messageBody.user }}
            </v-card-subtitle>   
        </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useMessageStore } from '../stores/MessageStore';
import { useRoute } from 'vue-router';

export default {
    setup () {
        const messageBody = ref("");
        const store = useMessageStore();
        const route = useRoute();

        onMounted(() => {
            messageBody.value = store.getMsgByIndex(route.params.id);
            console.log(messageBody.value);
        });

        return {
            messageBody,
        }
    }
}
</script>

<style scoped>
.v-list-item:hover {
    background-color: #e0e0e0;
}
</style>