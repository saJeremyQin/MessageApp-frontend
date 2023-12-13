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
                        v-for="(message,index) in storeState.messages" 
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

<script>
import { onMounted } from 'vue';
import axios from 'axios';
import storeState from '@/store';
export default {
    setup () {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/messages');
                storeState.messages = response.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        onMounted(() => {
            fetchData();        
        });

        return {
            storeState,
            fetchData
        }
    }
}
</script>

<style scoped>
.v-list-item:hover {
    background-color: #e0e0e0;
}
</style>