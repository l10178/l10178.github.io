// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLodash from 'vue-lodash';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import 'typeface-pacifico/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Storage from 'vue-ls';
import app from './app';
import router from './router';
import '@/assets/styles/index.scss';

Vue.use(VueLodash, {name: 'lodash'});
Vue.use(ElementUI);

fontawesome.library.add(solid, regular, brands);
Vue.component('fa-icon', FontAwesomeIcon);

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
/** @namespace Vue.lodash */
Vue.use(Vue.lodash.clone(Storage), sessionStorage);
Vue.use(Vue.lodash.clone(Storage), localStorage);

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
