import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const myRoutes = [
    {path: '/', name:Home, component: Home},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: myRoutes,
})

export default router;