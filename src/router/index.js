import { createRouter, createWebHashHistory } from 'vue-router';
import MessageList from '../components/MessageList.vue';
import NewMessage from '../components/NewMessage.vue';

const routes = [
    { path:'/', component: MessageList },
    { path:'/new', component: NewMessage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;