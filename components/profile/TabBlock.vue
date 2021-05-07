<template>
  <div class="tab">
    <div class="tab__list">
      <div
        class="tab__list__item profile"
        :class="{'active': !$route.query.tab || $route.query.tab === 'profile'}"
        @click="tabClick('profile')"
      >
        Профиль
      </div>
      <div
        class="tab__list__item insta"
        :class="{'active': $route.query.tab === 'insta'}"
        @click="tabClick('insta')"
      >
        Instagram
      </div>
      <div
        class="tab__list__item setting"
        :class="{'active': $route.query.tab === 'setting'}"
        @click="tabClick('setting')"
      >
        Настройка
      </div>
      <div
        class="tab__list__item currency"
        :class="{'active': $route.query.tab === 'currency'}"
        @click="tabClick('currency')"
      >
        Валюты
      </div>
    </div>
    <div class="tab__content">
      <profile v-if="!$route.query.tab || $route.query.tab === 'profile'" />
      <insta v-else-if="$route.query.tab === 'insta'" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Profile from '~/components/profile/tabs/Profile.vue'
import Insta from '~/components/profile/tabs/Insta.vue'

@Component({
  components: { Insta, Profile }
})
export default class extends Vue {
  tabClick (tab: string) {
    this.$router.push({
      query: {
        tab
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.tab {
  grid-column: 1/4;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;

  &__list {
    display: flex;
    font-size: 14px;
    line-height: 1;
    color: rgba(0, 0, 0, .7);
    font-weight: bold;

    &__item {
      padding: 15px 32px 15px 56px;
      cursor: pointer;
      user-select: none;
      background-position: left 32px center;
      background-size: 16px;
      background-repeat: no-repeat;

      &.active {
        background-color: white;
        cursor: default;
        pointer-events: none;
      }

      &.profile {
        background-image: url(~@/assets/img/icons/profile.png);
      }

      &.insta {
        background-image: url(~@/assets/img/icons/insta.svg);
      }

      &.setting {
        background-image: url(~@/assets/img/btns/setting.png);
      }

      &.currency {
        background-image: url(~@/assets/img/icons/cost.svg);
        background-size: 20px;
        padding-left: 60px;
      }
    }
  }

  &__content {
    background-color: white;
    flex-grow: 1;
  }
}
</style>
