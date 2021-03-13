<template>
  <div class="auth">
    <div class="container">
      <login-form v-if="!$route.hash || $route.hash === '#login'" />
      <registration-form v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LoginForm from '~/components/login/LoginForm.vue'
import RegistrationForm from '~/components/login/RegistrationForm.vue'

@Component({
  components: {
    LoginForm,
    RegistrationForm
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
}
</style>
