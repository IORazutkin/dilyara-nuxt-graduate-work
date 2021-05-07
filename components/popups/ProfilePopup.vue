<template>
  <context-popup class="popup" @close="$emit('close')">
    <template #body>
      <div class="popup__info">
        <div v-if="user.email" class="popup__info__email">
          {{ user.email }}
        </div>
        <div class="popup__info__name">
          {{ user.fullName }}
        </div>
      </div>
      <a href="/main/profile?tab=profile" class="popup__link link-profile">
        Мой профиль
      </a>
      <a href="/main/profile?tab=setting" class="popup__link link-settings">
        Настройки
      </a>
      <a href="#" class="popup__link link-logout" @click="logout">
        Выйти
      </a>
    </template>
  </context-popup>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ContextPopup from './ContextPopup.vue'
import User from '~/types/User'

@Component({
  components: {
    ContextPopup
  }
})
export default class extends Vue {
  get user (): User {
    return this.$store.getters['user/getUser']
  }

  logout () {
    this.$axios.$get('/logout').then(() => {
      this.$router.push('/login')
    })
  }
}
</script>

<style lang="scss" scoped>
.popup {
  text-align: left;

  &::after {
    background-color: #f0f0f0;
  }

  &__info {
    background-color: #f0f0f0;
    border-bottom: 1px solid rgba(150, 150, 150, 0.7);
    padding: 14px 16px 12px;

    &__email {
      font-size: 14px;
      line-height: 14px;
      font-weight: bold;
      margin-bottom: 6px;
    }

    &__name {
      font-family: "Roboto Slab", sans-serif;
      font-size: 10px;
      line-height: 9px;
    }
  }

  &__link {
    display: block;
    padding: 6px 6px 6px 48px;
    font-size: 12px;
    color: black;
    font-weight: bold;
    border-bottom: 1px solid rgba(150, 150, 150, 0.7);
    background: url(~@/assets/img/btns/setting.png) no-repeat left 16px center/18px;

    &.link-profile {
      background-image: url(~@/assets/img/btns/profile.svg);
    }

    &.link-logout {
      background-image: url(~@/assets/img/btns/logout.svg);
    }

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
