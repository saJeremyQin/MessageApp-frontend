<template>
  <v-form @submit.prevent>
    <v-container>
      <v-row>
        <v-col
            cols="12"
            xs="10"
            offset-xs="1"
            md="6"
            offset-md="3"
        >
            <v-text-field
              v-model="username"
              label="username"
              required
              hide-details
            ></v-text-field>
            <v-text-field
                class="mt-2"
                v-model="password"
                label="password"
                hide-details
                required
            ></v-text-field>
            <v-btn 
                type="submit" 
                class="mt-2 ml-2 mb-2" 
                @click="register" 
            >
                Register
            </v-btn>
        </v-col>
      </v-row>  
    </v-container>
  </v-form>

</template>

<script setup>
import { ref } from "vue";
import axios from 'axios';
import { useUserStore } from "@/stores/UserStore";
import { useRouter } from "vue-router";
const username = ref('');
const password = ref('');
const userStore = useUserStore();
const router = useRouter();

const register = () => {
  const registerData = {
    username: username.value,
    password: password.value
  };

  axios.post('http://localhost:3000/register', registerData).then(
    function (response) {
      const token = response.data;

      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = token;
      userStore.setToken(token);
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