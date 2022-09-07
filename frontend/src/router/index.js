import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('@/pages/NotFound.vue'),
    },
    {
        path: '/detail/:id',
        name: 'detail/:id',
        component: () => import('@/pages/Detail.vue'),
    },
    {
        path: '/product/:gender/:type*',
        name: 'product.show',
        component: () => import('@/pages/Product.vue'),
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/pages/Cart.vue'),
    },
    {
        path: '/introduce',
        name: 'introduce',
        component: () => import('@/pages/Introduce.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/Contact.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/pages/Regis.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
