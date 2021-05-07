<template>
  <div class="item">
    <div class="item__text" :class="'type-' + item.paymentType">
      <div class="item__text__comment">
        {{ item.description }}
      </div>
      <div class="item__text__payment-type">
        {{ type }}
      </div>
      <div class="item__text__date">
        {{ item.date | formatDate }}
      </div>
    </div>
    <div class="d-flex">
      <button class="item__action edit" @click="editItem(item)">
        &nbsp;
      </button>
      <button class="item__action delete" @click="deleteItem(item.id)">
        &nbsp;
      </button>
      <div class="item__price">
        <div class="item__price__amount" :class="'type-' + item.category.type">
          {{ item.sum |moneyFilter }} Rub
        </div>
        <div v-if="item.comment" class="item__price__description">
          {{ item.comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Operation } from '~/types/Operation'

@Component
export default class extends Vue {
  @Prop() item!: Operation

  get type () {
    switch (this.item.paymentType) {
      case 0:
        return 'Наличные'
      case 1:
        return 'Кредитная карта'
      case 2:
        return 'Карта'
      default:
        return 'Другое'
    }
  }

  editItem (item: Operation) {
    this.$eventBus.$emit('UpdateOperation', item)
  }

  deleteItem (id: number) {
    this.$axios.$delete('/api/operation/' + id).then(() => {
      this.$emit('update')
    })
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

  &__action {
    background-color: transparent;
    background-size: 20px;
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    width: 30px;
    padding: 0;
    margin-right: 12px;
    opacity: .5;
    display: none;

    &.edit {
      background-image: url(~@/assets/img/btns/edit.svg);
    }

    &.delete {
      background-image: url(~@/assets/img/btns/delete.svg);
    }
  }

  &:hover &__action {
    display: block;
  }

  &:nth-child(2n) {
    background-color: #ececec;
  }

  &__text {
    padding-left: 36px;
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: left center;
    margin: 15px 0;

    &.type-0 {
      background-image: url(~/assets/img/icons/cash.svg);
    }

    &.type-1 {
      background-image: url(~/assets/img/icons/credit-card.svg);
    }

    &.type-2 {
      background-image: url(~/assets/img/icons/card.svg);
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
      min-width: 170px;
      text-align: center;

      &.type-0 {
        background-color: #216a61;
      }
    }

    &__description {
      position: absolute;
      right: 0; bottom: 4px;

    }
  }
}
</style>
