<template>
  <div class="login">
    <form class="login__form" @submit.prevent="onSubmit">
      <img src="@/assets/img/logo247x84.png" alt="logo" width="247" height="84">
      <div class="login__form__title">
        Вход в личный кабинет
      </div>
      <div class="login__form__description">
        Вход для зарегистрированных пользователей.<br>
        Войдите с помощью социальных сетей
      </div>
      <div class="login__form__socials">
        <button class="social-btn vk-btn">
          &nbsp;
        </button>
        <button class="social-btn gplus-btn">
          &nbsp;
        </button>
        <button class="social-btn fb-btn">
          &nbsp;
        </button>
      </div>
      <div class="login__form__inputs">
        <div class="input-group" :class="{'error': $v.formData.username.$error}">
          <input v-model="$v.formData.username.$model" class="field email" placeholder="Логин" @input="$v.formData.username.$reset">
        </div>
        <div class="input-group" :class="{'error': $v.formData.password.$error}">
          <input v-model="$v.formData.password.$model" type="password" class="field password" placeholder="Пароль" @input="$v.formData.password.$reset">
        </div>
      </div>
      <div class="login__form__forgot">
        <a href="#">Забыли пароль?</a>
      </div>
      <div class="login__form__submit">
        <button type="submit" class="submit-btn">
          Войти
        </button>
      </div>
    </form>
    <div class="login__create">
      <div class="login__create__title">
        Создать аккаунт?
      </div>
      <div class="login__create__tip">
        Если Вы еще не зарегистрированы в системе<br>
        пожалуйста, зарегистрируйтесь
      </div>
      <button class="login__create__action" @click="$router.push('/login#registration')">
        Зарегистрироваться
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { required } from 'vuelidate/lib/validators'
import User from '~/types/User'

@Component
export default class extends Vue {
  formData: any = {
    username: '',
    password: ''
  }

  onSubmit () {
    this.$v.$touch()

    if (this.$v.$error) {
      return
    }

    const formData = new FormData()
    formData.append('username', this.formData.username)
    formData.append('password', this.formData.password)

    this.$axios.$post('/login', formData).then((user: User) => {
      this.$store.commit('user/setUser', user)
      this.$router.push('/main/dashboard')
    })
  }

  validations () {
    return {
      formData: {
        username: {
          required
        },
        password: {
          required
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: grid;
  grid-template-columns: 3fr 2fr;

  &__form {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 75px;

    &__title {
      color: #216a61;
      font-size: 18px;
      font-weight: bold;
      margin-top: 40px;
    }

    &__description {
      opacity: .3;
      font-size: 14px;
      margin-top: 20px;
      text-align: center;
      font-family: 'Roboto Slab', sans-serif;
    }

    &__socials {
      margin-top: 36px;
      display: flex;

      .social-btn {
        display: block;
        width: 42px; height: 42px;
        border: 1px solid rgba(0, 0, 0, .4);
        border-radius: 50%;
        background-position: center;
        background-color: transparent;
        background-repeat: no-repeat;
      }

      .social-btn + .social-btn {
        margin-left: 22px;
      }

      .vk-btn {
        background-image: url(~@/assets/img/socials/vk.png);
        background-size: 35px;
      }

      .gplus-btn {
        background-image: url(~@/assets/img/socials/google.png);
        background-size: 34px;
      }

      .fb-btn {
        background-image: url(~@/assets/img/socials/fb.png);
        background-size: 10px;
      }
    }

    &__inputs {
      margin-top: 38px;
      width: 100%;

      .input-group + .input-group {
        margin-top: 40px;
      }

      .field.email {
        background-image: url(~@/assets/img/fields/login.png);
        background-size: 22px;
      }

      .field.password {
        background-image: url(~@/assets/img/fields/password.png);
        background-size: 21px;
      }
    }

    &__forgot {
      font-family: "Roboto Slab", sans-serif;
      font-size: 18px;
      margin-top: 45px;

      a {
        color: black;
      }
    }

    &__submit {
      margin-top: 40px;

      .submit-btn {
        border-radius: 29px;
        width: 230px;
        text-transform: none;
        font-family: 'Noto Sans', sans-serif;
      }
    }
  }

  &__create {
    background-color: #216a61;
    color: #fefefe;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__title {
      font-size: 36px;
      font-weight: bold;
    }

    &__tip {
      font-size: 14px;
      line-height: 18px;
      margin-top: 65px;
      text-align: center;
    }

    &__action {
      margin-top: 65px;
      background-color: transparent;
      border: 1px solid #ffffff;
      border-radius: 29px;
      opacity: 0.8;
      color: #fefefe;
      font-size: 18px;
      font-weight: bold;
      height: 57px; width: 230px;
    }
  }
}
</style>
