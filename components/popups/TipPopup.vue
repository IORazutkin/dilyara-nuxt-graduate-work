<template>
  <context-popup class="popup" title="Справка и подсказки" @close="$emit('close')">
    <template #body>
      <div class="popup__item info">
        <div class="title">
          Справочная информация
        </div>
        <div class="description">
          СПРАВКА, ИНСТРУКЦИЯ, СТАТЬИ
        </div>
      </div>
      <div class="popup__item dashboard">
        <div class="title">
          Дашборд
        </div>
        <div class="description">
          СПРАВОЧНАЯ ИНФОРМАЦИЯ
        </div>
      </div>
    </template>
    <template #footer>
      <a href="#">О компании</a>
      <a href="#">Инструкция</a>
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

    &.info {
      background-image: url(~@/assets/img/icons/info.png);
    }

    &.dashboard {
      background-image: url(~@/assets/img/icons/dashboard.png);
    }

    .title {
      font-size: 10px;
      color: rgba(0, 0, 0, .7);
    }

    .description {
      font-size: 7px;
      color: rgba(0, 0, 0, .4);
    }
  }
}
</style>
