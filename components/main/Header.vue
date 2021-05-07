<template>
  <div class="main__header">
    <div class="main__header__wrapper">
      <div class="d-flex">
        <div class="main__header__logo">
          <img src="@/assets/img/logo128x45.png" width="128" height="45" alt="logo">
        </div>
        <div class="main__header__title">
          {{ title }}
        </div>
      </div>
      <div class="main__header__menu">
        <button class="icon-btn currency-btn" @click.stop="showPopup = 'currency'">
          &nbsp;
          <currency-popup v-if="showPopup === 'currency'" @close="showPopup = ''" />
        </button>
        <button class="icon-btn tip-btn" @click.stop="showPopup = 'tip'">
          &nbsp;
          <tip-popup v-if="showPopup === 'tip'" @close="showPopup = ''" />
        </button>
        <button class="icon-btn setting-btn" @click.stop="showPopup = 'setting'">
          &nbsp;
          <setting-popup v-if="showPopup === 'setting'" @close="showPopup = ''" />
        </button>
        <button class="icon-btn profile-btn" @click.stop="showPopup = 'profile'">
          &nbsp;
          <profile-popup v-if="showPopup === 'profile'" @close="showPopup = ''" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CurrencyPopup from '~/components/popups/CurrencyPopup.vue'
import TipPopup from '~/components/popups/TipPopup.vue'
import SettingPopup from '~/components/popups/SettingPopup.vue'
import ProfilePopup from '~/components/popups/ProfilePopup.vue'

@Component({
  components: {
    ProfilePopup,
    CurrencyPopup,
    TipPopup,
    SettingPopup
  }
})
export default class extends Vue {
  showPopup: string = ''

  get title () {
    if (this.$route.path.endsWith('dashboard')) {
      return 'Дашборд'
    }
    if (this.$route.path.endsWith('calendar')) {
      return 'Календарь'
    }
    if (this.$route.path.endsWith('calc')) {
      return 'Калькулятор'
    }
    if (this.$route.path.endsWith('notes')) {
      return 'Заметки'
    }
    if (this.$route.path.endsWith('insta')) {
      return 'Instagram'
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  &__header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 17px 15px 14px;
    background-color: white;
    z-index: 10;

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      display: inline-block;
    }

    &__title {
      font-size: 18px;
      line-height: 45px;
      font-weight: bold;
      opacity: .7;
      margin-left: 100px;
      display: inline-block;
    }

    &__menu {
      display: flex;
      align-items: center;

      .icon-btn {
        display: block;
        background-color: transparent;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 20px;
        border: none;
        height: 40px; width: 40px;
        position: relative;
      }

      .icon-btn + .icon-btn {
        margin-left: 8px;
      }

      .currency-btn {
        background-image: url(~@/assets/img/btns/currency.png);
      }

      .tip-btn {
        background-image: url(~@/assets/img/btns/tip.png);
      }

      .setting-btn {
        background-image: url(~@/assets/img/btns/setting.png);
      }

      .profile-btn {
        background-image: url(~@/assets/img/btns/profile.png);
        background-size: 28px;
        margin-left: 15px !important;
      }
    }
  }
}
</style>
