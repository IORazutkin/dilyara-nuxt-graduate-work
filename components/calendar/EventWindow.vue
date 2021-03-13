<template>
  <div class="window">
    <div class="window__header">
      Событие
    </div>
    <div class="window__body">
      <div class="row">
        <div class="col-6">
          <div class="input-group">
            <input type="date" class="field">
          </div>
          <div class="input-group">
            <input class="field no-icon" placeholder="Событие">
          </div>
          <div class="input-group">
            <v-select />
          </div>
        </div>
        <div class="col-6">
          <textarea class="field" placeholder="Комментарий" />
        </div>
      </div>
      <div class="window__body__actions">
        <button class="action-btn btn-cancel">
          Отмена
        </button>
        <button class="action-btn btn-save">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import vSelect from 'vue-select'

@Component({
  components: {
    vSelect
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.window {
  grid-column: 3/4;
  grid-row: 1/2;
  background-color: white;
  display: flex;
  flex-direction: column;

  &__header {
    background-color: #f5f5f5;
    font-size: 14px;
    font-weight: bold;
    line-height: 10px;
    padding: 25px 0 18px 25px;
    text-transform: uppercase;
    color: rgba(1, 0, 0, .7);
  }

  &__body {
    padding: 35px 25px;
    position: relative;
    flex-grow: 1;

    .field {
      border: 1px solid rgba(0, 0, 0, .2);
      border-radius: 3px;
      background-color: white;
      height: 34px;
      padding: 0 8px;
      font-family: "Roboto Slab", sans-serif;
      font-size: 10px;
      color: rgba(0, 0, 0, .7);

      &::-webkit-calendar-picker-indicator {
        height: 32px; width: 32px;
        padding: 0;
        margin-right: -8px;
        border-radius: 0 3px 3px 0;
        background: rgba(0, 0, 0, .2) url(~@/assets/img/fields/calendar.png) no-repeat center/20px;
        cursor: pointer;
      }
    }

    textarea.field {
      height: 100%;
      padding: 8px;
      resize: none;
    }

    &__actions {
      position: absolute;
      bottom: 35px; right: 25px;
      width: auto;
      display: flex;

      .action-btn {
        font-size: 10px;
        line-height: 7px;
        color: rgba(0, 0, 0, .7);
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 3px;
        padding: 9px 16px;
        font-weight: bold;
        background-color: white;
      }

      .btn-save {
        background-color: #f0f0f0;
        border-color: transparent;
      }

      .action-btn + .action-btn {
        margin-left: 12px;
      }
    }
  }
}
</style>
