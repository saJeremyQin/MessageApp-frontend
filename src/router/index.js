import { createRouter, createWebHistory } from 'vue-router';
import MessageList from '../components/MessageList.vue';
import NewMessage from '../components/NewMessage.vue';
import MessageDetail from '../components/MessageDetail.vue';

const routes = [
    { path:'/', component: MessageList },
    { path:'/newmessage', component: NewMessage },
    { path:'/messages/:id', component: MessageDetail}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;