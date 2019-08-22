<template>
  <div class="home">
    <section class="section body-content landing">
      <div class="container">
          <div class="mc-box sandstone">
            <div class="columns">
                <div class="column">
                    <div>
                        <h1>Регистрация</h1>
                        <form @submit.prevent="onRegisterClick">
                            <label for="username">Name</label>
                            <input type="text" id="username" v-model="username" class="input"/>
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="email" class="input"/>
                            <label for="password">Password</label>
                            <input type="password" id="password" v-model="password" class="input"/>

                            <input type="submit" value="Регистрирай се"/>
                        </form>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import {authenticate} from '@/services/authServices'
export default {
    data() {
        return {
            username: 'Pesho',
            password: 'asdasd',
            email: 'asd@asd.bg'
        }
    },
    mixins: [authenticate],
    components: {
    },
    methods: {
        onRegisterClick() {
            this.register(this.username, this.password)
                .then(res => this.$router.push('/'))
        }
    }
}
</script>
