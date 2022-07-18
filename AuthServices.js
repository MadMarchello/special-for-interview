import $api from '../http'

export default class AuthServices {
    static async login(username, password) {
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        return $api.post('/api/v1/auth/sing-in', params);
    }

    static async registration(email, password) {
        return $api.post('/api/v1/auth/sign-up', { email, password });
    }
}
