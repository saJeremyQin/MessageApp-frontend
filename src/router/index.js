import { createRouter, createWebHistory } from 'vue-router';
import MessageList from '../components/MessageList.vue';
import NewMessage from '../components/NewMessage.vue';
import MessageDetail from '../components/MessageDetail.vue';
import UserRegister from '../components/UserRegister.vue';

const routes = [
    { path:'/', component: MessageList },
    { path:'/newmessage', component: NewMessage },
    { path:'/messages/:id', component: MessageDetail},
    { path:'/register', component: UserRegister},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;