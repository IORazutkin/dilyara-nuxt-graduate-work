<template>
  <div class="tab">
    <p class="tab__text">
      Обратите внимание, что указанный "Email" используется не только для уведомлений от сервиса,
      но и для входа в систему. Поэтому он обязательно должен быть подтвержден.
    </p>
    <p class="tab__text">
      После изменения "Email" и нажатия кнопки "Сохранить" на "новый" адрес направляется
      письмо-запрос для верификации указанного адреса. Пока Вы не пройдете по ссылке в письме и не
      подтвердите email, Вы не сможете вновь войти в систему и будет недоступно изменение пароля,
      но Вы можете продолжить работу в текущем сеансе. Рядом с полем "Email" будет доступна
      ссылка для повторной отправки письма-запроса на верификацию "нового" адреса.
    </p>
    <p class="tab__text">
      Для смены пароля нажмите кнопку "Сменить пароль". Будет запущена процедура,
      аналогичная смене пароля в случае "я забыл(а) пароль".
    </p>
    <form class="tab__form" @submit.prevent="onSubmit">
      <div class="input-group" :class="{'error': $v.formData.email.$error}">
        <label>
          Email
        </label>
        <input v-model="$v.formData.email.$model" type="email" class="field" @input="$v.formData.email.$reset">
        <p class="hint" style="color: #216a61;">
          отправить запрос для подтверждения
        </p>
      </div>
      <div class="input-group" :class="{'error': $v.formData.email.$error}">
        <label>
          Номер телефона
        </label>
        <input
          v-model="$v.formData.phone.$model"
          v-mask="'+7 (###) ###-##-##'"
          type="tel"
          class="field"
          @input="$v.formData.phone.$reset"
        >
        <p class="hint">
          указывается по Вашему желанию
        </p>
      </div>
      <div class="tab__form__action">
        <button type="submit" class="action-btn btn-save">
          Сохранить
        </button>
        <button class="action-btn" @click="isPopupShow = true">
          Сменить пароль
        </button>
      </div>
    </form>
    <change-password-popup v-if="isPopupShow" @close="isPopupShow = false" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { email, required } from 'vuelidate/lib/validators'
import { mask } from 'vue-the-mask'
import User from '~/types/User'
import ChangePasswordPopup from '~/components/popups/ChangePasswordPopup.vue'

@Component({
  components: { ChangePasswordPopup },
  directives: {
    mask
  }
})
export default class extends Vue {
  isPopupShow: boolean = false
  formData: { email: string, phone: string } = Object.assign({}, this.$store.getters['user/getUser'])

  onSubmit () {
    this.$v.$touch()

    if (this.$v.$error) {
      return
    }

    this.$axios.$patch('/api/user/contacts', this.formData).then((user: User) => {
      this.$store.commit('user/setUser', user)
    })
  }

  validations () {
    return {
      formData: {
        email: {
          required,
          email
        },
        phone: {
          required,
          telValid (val: string) {
            return /^\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d$/.test(val)
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  padding: 32px 16px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, .7);

  &__text {
    & + & {
      margin-top: 32px;
    }
  }

  &__form {
    display: flex;
    flex-wrap: wrap;

    .input-group {
      width: auto;
      flex-grow: 1;
    }

    .input-group + .input-group {
      margin-top: 0;
      margin-left: 16px;
    }

    .hint {
      font-size: 10px;
      line-height: 8px;
      margin-top: 16px;
    }

    &__action {
      display: flex;
      flex-basis: 100%;
      margin-top: 30px;

      .action-btn {
        font-size: 10px;
        line-height: 7px;
        color: rgba(0, 0, 0, .7);
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 3px;
        padding: 9px 16px;
        font-weight: bold;
        background-color: white;
      }

      .btn-save {
        background-color: #fe982a;
        color: white;
        border-color: transparent;
      }

      .action-btn + .action-btn {
        margin-left: 12px;
      }
    }
  }
}

.field {
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 3px;
  background-color: white;
  height: 34px;
  padding: 0 8px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 10px;
  color: rgba(0, 0, 0, .7);
}
</style>
