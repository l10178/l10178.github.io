import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const headerRouter = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(
            /* webpackChunkName: 'home' */
            '@/components/home/home'
            ),
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import(
            /* webpackChunkName: 'blog' */
            '@/components/blog/blog'
            ),
    },
];

export const adminRouter = [
    {
        path: '/user',
        name: 'user',
        component: () => import(
            /* webpackChunkName: 'user' */
            '@/components/admin/user/user'
            ),
    },
];

export default new Router({
    routes: [
        ...headerRouter,
        ...adminRouter,
    ],
});
