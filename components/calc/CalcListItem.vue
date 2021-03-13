<template>
  <div class="item">
    <div class="item__text" :class="item.type">
      <div class="item__text__comment">
        {{ item.comment }}
      </div>
      <div class="item__text__payment-type">
        {{ type }}
      </div>
      <div class="item__text__date">
        {{ item.date | formatDate }}
      </div>
    </div>
    <div class="item__price">
      <div class="item__price__amount">
        {{ item.amount |moneyFilter }} Rub
      </div>
      <div v-if="item.description" class="item__price__description">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop() item!: any

  get type () {
    switch (this.item.type) {
      case 'cash':
        return 'Наличные'
      case 'card':
        return 'Карта'
      case 'credit-card':
        return 'Кредитная карта'
      default:
        return 'Другое'
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto Slab", sans-serif;
  font-size: 10px;
  color: black;
  background-color: white;

  &:nth-child(2n) {
    background-color: #ececec;
  }

  &__text {
    padding-left: 36px;
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: left center;
    margin: 15px 0;

    &.cash {
      background-image: url(~/assets/img/icons/cash.png);
    }

    &.credit-card {
      background-image: url(~/assets/img/icons/credit-card.png);
    }

    &.card {
      background-image: url(~/assets/img/icons/card.png);
    }
  }

  &__price {
    display: flex;
    align-items: center;
    position: relative;

    &__amount {
      background-color: #fe982a;
      border-radius: 3px;
      color: white;
      font-size: 14px;
      text-transform: uppercase;
      padding: 6px 32px;
    }

    &__description {
      position: absolute;
      right: 0; bottom: 4px;

    }
  }
}
</style>
