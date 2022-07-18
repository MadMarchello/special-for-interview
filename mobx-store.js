import { makeAutoObservable } from "mobx";
import axios from 'axios';

import AuthServices from "../services/AuthServices";
import { API_URL } from "../http";

export default class Store {
    user = {};
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(email, password) {
        try {
            const response = await AuthServices.login(email, password);
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message)//...?....? это optional chanding оператор для проверки наличие такого поля
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthServices.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message)//...?....? это optional chanding оператор для проверки наличие такого поля
        }
    }

    async logout() {
        try {
            //const response = await AuthServices.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message)//...?....? это optional chanding оператор для проверки наличие такого поля
        }
    }

    async checkAuth() {
        this.setLoading = true;
        try {
            /*const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true, });
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        */
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message)//...?....? это optional chanding оператор для проверки наличие такого поля
        } finally {
            this.setLoading = false;
        }
    }
}
