<template>
<headroom 
        :disabled="disabled" 
        :class="{'menu-open': openedMenu}"
        :offset="70+44"
        >
        <header>
            <nav 
                class="navbar" 
                role="navigation" aria-label="main navigation">

                <div class="container">
                    <div id="main-nav" :class="{'navbar-menu': true, 'is-active': openedMenu}" v-cloak>
                        <div class="navbar-start">

                            <div class="navbar-item">
                                <a 
                                    href="#" 
                                    :class="[
                                        'navbar-link',
                                        {'is-active': isActive('/')},
                                    ]">
                                    <img src="@/assets/images/chest.gif" alt="SMS Shop"/>
                                    Онлайн магазин
                                </a>
                            </div>

                        </div>
                    </div>
                    <div class="navbar-brand">
                        <router-link class="navbar-item" to="/">
                            <img src="@/assets/images/logo.png" alt="Hollyweed">
                        </router-link>

                        <a role="button" 
                            :class="{'navbar-burger': true, 'burger': true, 'is-active': openedMenu}" 
                            aria-label="menu" aria-expanded="false" @click="toggleMenu()">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>                    
                    <div class="players-online">
                        <i class="mdi mdi-checkbox-blank-circle"></i>
                        Online: &nbsp;<span class="has-text-white is-size-6"> 12/40</span>
                    </div>
                </div>
            </nav>
            <div class="secondary-header align-center">
                <div class="container is-flex justify-space-between align-center">
                    <div class="stats">
                        <div class="stat">
                            <img src="#" alt="">
                            &nbsp;Кредити:&nbsp;
                            <span>200</span>
                        </div>
                    </div>
                    <template v-if="isAuthenticated" class="is-flex">
                        <div class="mr20 is-hidden-mobile">Добре дошъл, Шавдавд</div>
                        <form @submit.prevent="logout" method="POST">
                            <input type="hidden" name="_token">
                            <button class="button is-link" type="submit">Изход</button>
                        </form>
                    </template>
                    <template v-else>
                        <form @submit.prevent="onLoginClick" method="POST">
                            <!-- Login error message -->
                            <!-- <span class="has-text-danger">Грешно име или парола!</span> -->
                            <input type="hidden" name="_token">
                            <input type="text" name="username" v-model="username" class="input login" placeholder="Име в Hollyweed"/>
                            <input type="password" name="password" v-model="password" class="input login" placeholder="Парола"/>
                            <button class="button is-link" type="submit">Вход</button>
                            <router-link to="/register">Регистрирай се!</router-link>
                        </form>
                    </template>
                </div>
            </div>
        </header>
    </headroom>
</template>

<script>
import { headroom } from 'vue-headroom'
import { authenticate } from '@/services/authServices'

export default {
        props: ['disabled', 'logo_url', 'home_url', 'menu_links', 'auth', 'cta_button_url', 'server_info', 'csrf', 'user'],
        components: {
            headroom
        },
        data: function () {
            return {
                openedMenu: false,
                last_expand: 0,
                expands: [],
                username: '',
                password: ''
            }
        },
        mixins: [authenticate],
        methods: {
            toggleMenu: function () {
                this.openedMenu = !this.openedMenu
            },
            toggleDropdown: function (i) {
                if (this.openedMenu) {
                    Vue.set(this.expands, i, !this.expands[i])
                    if (this.last_expand != i) {
                        Vue.set(this.expands, this.last_expand, false)
                        this.last_expand = i
                    }
                }
            },
            isActive: function (url) {
                // console.log(url, location.pathname, location.href)
                if (url + '/' == location.href) {
                    return true
                }
                return location.href == url
            },
            onLoginClick() {
                this.login(this.username, this.password)
                    .then(user => {
                    this.$root.$emit('logged-in', user.authtoken)
                    this.$router.push('/register')
                    })
                },
            onLogoutClick() {
                this.logout()
                    .then(() => {
                        this.$root.$emit('logged-out')
                        console.log('tuk')
                        this.$router.$push('/')
                    }
                )
            }
        },
        computed: {
        homepage_url: function () {
            return this.home_url ? this.home_url : this.menu_links[0].url
        },
        players_online: function () {
            let online_players = this.server_info.players.online
            let max_players = this.server_info.players.max
            return online_players + ' / ' + max_players
        },
        secondary_links: function() {
            if (this.auth) {
                return this.user.secondary_links
            }

            return []
        }
    },
}
</script>

<style scoped>

</style>