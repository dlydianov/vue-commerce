import config from '@/config/config'
import axios from 'axios'
import { read } from 'fs';

const authString = btoa(`${config.appKey}:${config.appSecret}`)

const loginUser = user => {
    localStorage.setItem('username', user.username)
    localStorage.setItem('authtoken', user.authtoken)

    return user
}

export const authService = {
    data() {
        return {
            authtoken: localStorage.getItem('authtoken'),
            username: localStorage.getItem('username')
        }
    },
    computed: {
        isAuthenticated() {
            return this.authtoken !== null
        },
    },
    methods: {
        logout() {
            localStorage.clear()
            this.authtoken = null
            this.$router.push('/')
        }
    },
    created() {
        this.$root.$on('logged-in', authtoken => this.authtoken = authtoken)
    }
}

export const authenticate = {
    methods: {
        register(username, password) {
            return this.authenticate(`/user/${config.appKey}`, username, password)
        },
        login(username, password) {
            return this.authenticate(`/user/${config.appKey}/login`, username, password)
        },
        authenticate(url, username, password) {
            return axios.post(`https://baas.kinvey.com${url}`, {
                username,
                password
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${authString}`
                    }
                }).then(({data}) => loginUser({
                    username: data.username,
                    authtoken: data._kmd.authtoken
                }))
        }
    },
    created() {
        // this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
    }
}