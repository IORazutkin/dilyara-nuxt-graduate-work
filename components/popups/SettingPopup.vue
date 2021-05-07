<template>
  <context-popup class="popup" title="Настройки" @close="$emit('close')">
    <template #body>
      <a href="#" class="popup__total-setting">
        Общие
      </a>
      <div class="popup__switch">
        <input id="short-menu" type="checkbox">
        <label for="short-menu">
          Свернуть меню
        </label>
      </div>
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
  font-family: "Roboto Slab", sans-serif;
  font-size: 12px;

  &__total-setting {
    text-align: left;
    display: block;
    width: 100%;
    padding: 12px 20px;
    color: rgba(0, 0, 0, .3);
    border-bottom: 1px solid #ccc;
  }

  &__switch {
    text-align: left;
    margin-top: 16px;
    color: rgba(0, 0, 0, .7);
    padding: 0 20px;

    label {
      display: block;
      position: relative;

      &::before {
        content: 'OFF';
        padding: 2px 6px 4px 14px;
        font-family: "Roboto Slab", sans-serif;
        font-size: 7px;
        color: rgba(0, 0, 0, .7);
        transition: background 0.1s linear;
        position: absolute;
        right: 0;
        width: 35px; height: 15px;
        border-radius: 7px;
        border: 1px solid #ccc;
        background: #f0f0f0;
        margin: 0;
      }

      &::after {
        content: '';
        transition: right 0.1s linear;
        position: absolute;
        right: 23px; top: 3px;
        width: 9px; height: 9px;
        border-radius: 50%;
        border: 1px solid #ccc;
        background: white;
      }
    }

    input[type="checkbox"]:checked + label {
      &::before {
        content: 'ON';
        color: #fdfdfd;
        padding: 2px 6px 4px;
        background: rgba(33, 106, 97, .8);
      }

      &::after {
        right: 3px;
      }
    }
  }
}
</style>
