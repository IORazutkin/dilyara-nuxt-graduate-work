<template>
  <div class="tariff-item">
    <div class="tariff-item__title">
      {{ title }}
    </div>
    <div class="tariff-item__price">
      {{ price }}
    </div>
    <div class="tariff-item__body">
      <slot />
    </div>
    <button class="tariff-item__body__btn" @click="$router.push('/login')">
      {{ btnText }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop() title!: string
  @Prop() price!: string
  @Prop() btnText!: string
}
</script>

<style lang="scss" scoped>
.tariff-item {
  background-color: #216a61;
  color: white;
  text-align: center;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  font-family: "Roboto Slab", sans-serif;

  &__title {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 8px;
  }

  &__price {
    font-size: 18px;
    margin-bottom: 26px;
  }

  &__body {
    border-top: 2px solid white;
    padding: 22px 14px 0;
    font-size: 18px;
    flex-grow: 1;

    &__p {
      margin: 0;

      & + & {
        margin-top: 16px;
      }
    }

    &__btn {
      width: 270px; height: 50px;
      align-self: center;
      background-color: rgba(255, 255, 255, .1);
      color: white;
      border: 2px solid white;
      text-transform: uppercase;
    }
  }
}
</style>
