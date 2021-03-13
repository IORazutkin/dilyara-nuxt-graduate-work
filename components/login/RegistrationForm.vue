<template>
  <div class="login">
    <form class="login__form">
      <img src="@/assets/img/logo247x84.png" alt="logo" width="247" height="84">
      <div class="login__form__title">
        Регистрация кабинета
      </div>
      <div class="login__form__description">
        Впервые у нас? Создайте нового пользователя
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
        <div class="input-group">
          <input name="name" class="field name" placeholder="Имя">
        </div>
        <div class="input-group">
          <input name="email" type="email" class="field email" placeholder="Логин">
        </div>
        <div class="input-group">
          <input name="password" type="password" class="field password" placeholder="Пароль">
        </div>
      </div>
      <div class="login__form__submit">
        <button class="submit-btn">
          Зарегистрироваться
        </button>
      </div>
    </form>
    <div class="login__create">
      <div class="login__create__title">
        Добро пожаловать!
      </div>
      <div class="login__create__tip">
        Уже есть аккаунт?<br>
        Пожалуйста войдите в личный кабинет
      </div>
      <button class="login__create__action" @click="$router.push('/login#login')">
        Войти
      </button>
    </div>
  </div>
</template>
<script>
export default {
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

      .field.name {
        background-image: url(~@/assets/img/fields/profile.png);
        background-size: 21px;
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

    &__submit {
      margin-top: 40px;

      .submit-btn {
        border-radius: 29px;
        width: 230px;
        text-transform: none;
        font-family: 'Noto Sans', sans-serif;
        padding: 25px 0;
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
