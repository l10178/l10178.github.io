import Vue from 'vue';
import Router from 'vue-router';
import GrpHome from '../components/home/home';
import GrpBlog from '../components/blog/blog';
import GrpUser from '../components/admin/user/user';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'GrpHome',
            component: GrpHome,
        },
        {
            path: '/blog',
            name: 'GrpBlog',
            component: GrpBlog,
        },
        {
            path: '/user',
            name: 'GrpUser',
            component: GrpUser,
        },
    ],
});
