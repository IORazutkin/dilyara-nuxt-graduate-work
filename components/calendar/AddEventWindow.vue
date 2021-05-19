<template>
  <form class="window" :class="'type-' + (formData.type ? formData.type.id : -1)" @submit.prevent="submit">
    <div class="window__header">
      Добавить событие
    </div>
    <div class="window__body">
      <div class="row">
        <div class="col-12">
          <div class="input-group" :class="{'error': $v.formData.date.$error}">
            <input
              v-model="$v.formData.date.$model"
              type="date"
              class="field"
              @input="$v.formData.date.$reset"
            >
          </div>
          <div class="input-group" :class="{'error': $v.formData.event.$error}">
            <input
              v-model="$v.formData.event.$model"
              class="field no-icon"
              placeholder="Введите событие"
              @input="$v.formData.event.$reset"
            >
          </div>
          <div class="input-group" :class="{'error': $v.formData.type.$error}">
            <v-select
              v-model="$v.formData.type.$model"
              placeholder="Категория пометки"
              :options="typeList"
              :searchable="false"
              @input="$v.formData.type.$reset"
            />
          </div>
          <div class="input-group" :class="{'error': $v.formData.comment.$error}">
            <input
              v-model="$v.formData.comment.$model"
              class="field comment"
              placeholder="Комментарий"
              @input="$v.formData.comment.$reset"
            >
          </div>
          <div class="input-group" :class="{'error': $v.formData.description.$error}">
            <input
              v-model="$v.formData.description.$model"
              class="field"
              placeholder="Введите описание события (до 50 символов)"
              @input="$v.formData.description.$reset"
            >
          </div>
        </div>
      </div>
      <div class="window__body__actions">
        <button type="button" class="action-btn btn-cancel" @click="reset">
          Отмена
        </button>
        <button type="submit" class="action-btn btn-save">
          Добавить
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import vSelect from 'vue-select'
import MarkWindow from '~/classes/MarkWindow'

@Component({
  components: {
    vSelect
  }
})
export default class extends MarkWindow {
}
</script>

<style lang="scss" scoped>
.window {
  grid-column: 3/4;
  grid-row: 2/3;
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

    border: 1px solid rgba(0, 0, 0, .3);
    border-bottom: none;
  }

  &__body {
    padding: 35px 25px;
    flex-grow: 1;
    border: 1px solid rgba(0, 0, 0, .3);
    border-top: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

    .field.comment {
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      border-radius: 0;
      background: white url(~@/assets/img/fields/comment.png) no-repeat center left 8px;
      padding-left: 37px;
    }

    &__actions {
      align-self: flex-end;
      width: auto;
      display: flex;
      margin-top: 16px;

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

  &.type-0 {
    .window__header {
      background-color: #216a61;
      color: white;
      border: none;
    }

    .btn-save {
      background-color: #216a61;
      color: white;
    }

    .field::-webkit-calendar-picker-indicator {
      background-color: #216a61;
      background-image: url(~@/assets/img/fields/calendar-white.png);
    }
  }

  &.type-1 {
    .window__header {
      background-color: #fe982a;
      color: white;
      border: none;
    }

    .btn-save {
      background-color: #fe982a;
      color: white;
    }

    .field::-webkit-calendar-picker-indicator {
      background-color: #fe982a;
      background-image: url(~@/assets/img/fields/calendar-white.png);
    }
  }
}
</style>
