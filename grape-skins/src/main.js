// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import _ from 'lodash/lang';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import 'typeface-pacifico/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
// import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import VueStorage from 'vue-ls';
import app from './app';
import router from './router';
import '@/assets/styles/index.scss';

Vue.use(ElementUI);

library.add(fas, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);

let sessionStorage = {
    namespace: 'grapes_',
    name: 'sessionStorage',
    storage: 'session',
};
let localStorage = {
    namespace: 'grapes_',
    name: 'localStorage',
    storage: 'local',
};

Vue.use(_.clone(VueStorage), sessionStorage);
Vue.use(_.clone(VueStorage), localStorage);

/**
 * read token from storage
 * @return {string} authentication token
 */
function getToken() {
    return Vue.sessionStorage.get('authenticationToken');
}

let axiosInstance = axios.create({
    timeout: 50000,
    headers: {
        Authorization: 'Bearer ' + getToken(),
    },
});

Vue.use(VueAxios, axiosInstance);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {app},
    template: '<app/>',
});
