import Vue from 'vue';

const AUTH_TOKEN_KEY = 'authenticationToken';
const BEARER_TOKEN = 'Bearer ';

export class AuthService {

    getToken() {
        return Vue.sessionStorage.get(AUTH_TOKEN_KEY);
    }

    login(credentials) {
        // this.axios.post(loginUrl, this.user).then(function(response) {
        //     const bearerToken = response.headers.authorization;
        //     if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        //         const jwt = bearerToken.slice(7, bearerToken.length);
        //         Vue.sessionStorage.set('authenticationToken', jwt);
        //     }
        // });
    }

    logout() {
    }

    isAuthenticated() {
    }
}
