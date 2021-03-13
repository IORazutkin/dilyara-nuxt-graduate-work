<template>
  <div class="page__header">
    <div class="container">
      <div class="page__header__wrapper">
        <div class="page__header__logo">
          <img src="@/assets/img/logo128x45.png" width="128" height="45" alt="Page logo">
        </div>
        <div class="page__header__menu">
          <a href="#offer" :class="{'checked': !hash || hash === '#offer'}">Главная</a>
          <a href="#target" :class="{'checked': hash === '#target'}">Цель</a>
          <a href="#features" :class="{'checked': hash === '#features'}">Ресурсы</a>
          <a href="#view" :class="{'checked': hash === '#view'}">Вид</a>
          <nuxt-link to="/login">
            Войти
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  hash: string = ''

  mounted () {
    this.hash = this.$route.hash
    this.$forceUpdate()
    this.$eventBus.$on('AnchorTrigger', (id: string) => {
      if (window.location.hash !== '#' + id) {
        // this.$router.replace('/#' + id)
        history.pushState(
          {},
          '',
          this.$route.path + '#' + id
        )
        this.hash = '#' + id
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  &__header {
    position: fixed;
    top: 0;
    background-color: white;
    width: 100%;
    z-index: 9999;

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__logo {
      margin-bottom: 7px;
      margin-top: 5px;
    }

    &__menu {
      display: flex;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: bold;
      line-height: 10px;

      a {
        display: block;
        padding: 12px 10px;
        color: #216a61;
      }

      a:hover {
        text-decoration: none;
      }

      a + a {
        margin-left: 30px;
      }

      .checked {
        color: #ff9912;
        border-bottom: 1px solid #ff9912;
      }
    }
  }
}
</style>
