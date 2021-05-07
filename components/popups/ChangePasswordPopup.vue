<template>
  <popup title="Сменить пароль" @close="$emit('close')">
    <form @submit.prevent="onSubmit">
      <div class="input-group" :class="{'error': $v.formData.oldPassword.$error}">
        <input
          v-model="$v.formData.oldPassword.$model"
          class="field no-icon"
          type="password"
          placeholder="Текущий пароль"
          @input="$v.formData.oldPassword.$reset"
        >
      </div>
      <div class="input-group" :class="{'error': $v.formData.newPassword.$error}">
        <input
          v-model="$v.formData.newPassword.$model"
          class="field no-icon"
          type="password"
          placeholder="Новый пароль"
          @input="$v.formData.newPassword.$reset"
        >
      </div>
      <div class="input-group" :class="{'error': $v.formData.confirmPassword.$error}">
        <input
          v-model="$v.formData.confirmPassword.$model"
          class="field no-icon"
          type="password"
          placeholder="Повторите пароль"
          @input="$v.formData.confirmPassword.$reset"
        >
      </div>
      <div class="input-group">
        <button class="submit-btn">
          Сохранить
        </button>
      </div>
    </form>
  </popup>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { required } from 'vuelidate/lib/validators'
import Popup from '../Popup.vue'

@Component({
  components: { Popup }
})
export default class extends Vue {
  formData: any = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  }

  onSubmit () {
    this.$v.$touch()

    if (this.$v.$error) {
      return
    }

    this.$axios.$put('/api/user/password', this.formData)
    this.$emit('close')
  }

  validations () {
    return {
      formData: {
        oldPassword: {
          required
        },
        newPassword: {
          required
        },
        confirmPassword: {
          required
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.submit-btn {
  width: 100%;
}
</style>
