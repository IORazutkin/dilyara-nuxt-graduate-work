<template>
  <context-popup class="popup" title="Валюта" @close="$emit('close')">
    <template #body>
      <div class="popup__item rub">
        <div class="title">
          РУБЛЬ / RUBLE
        </div>
        <div class="description">
          Сделки будут проводиться в рублях
        </div>
      </div>
      <div class="popup__item usd">
        <div class="title">
          ДОЛЛАР / DOLLAR
        </div>
        <div class="description">
          Сделки будут проводиться в долларах
        </div>
      </div>
      <div class="popup__item eur">
        <div class="title">
          ЕВРО / EURO
        </div>
        <div class="description">
          Сделки будут проводиться в евро
        </div>
      </div>
    </template>
    <template #footer>
      <a href="#">Настройка</a>
    </template>
  </context-popup>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ContextPopup from './ContextPopup.vue'

@Component({
  components: {
    ContextPopup
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.popup {
  &__item {
    font-family: "Roboto Slab", sans-serif;
    padding: 16px 16px 16px 70px;
    background-color: white;
    background-position: left 16px center;
    background-size: 35px;
    background-repeat: no-repeat;
    text-align: left;
    cursor: pointer;
    border-bottom: 1px solid #ccc;

    &.rub {
      background-image: url(~@/assets/img/currency/rub.png);
    }

    &.usd {
      background-image: url(~@/assets/img/currency/usd.png);
    }

    &.eur {
      background-image: url(~@/assets/img/currency/eur.png);
    }

    .title {
      font-size: 12px;
      color: rgba(0, 0, 0, .7);
    }

    .description {
      font-size: 7px;
      color: rgba(0, 0, 0, .4);
    }
  }
}
</style>
