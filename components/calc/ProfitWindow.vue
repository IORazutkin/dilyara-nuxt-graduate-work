<template>
  <form class="window" @submit.prevent="save">
    <div class="window__header">
      Доходы
    </div>
    <div class="window__body">
      <div class="row">
        <div class="col-6 mb-3">
          <div class="input-group" :class="{'error': $v.formData.date.$error}">
            <input
              v-model="$v.formData.date.$model"
              type="date"
              class="field"
              @input="$v.formData.date.$reset"
            >
          </div>
        </div>
        <div class="col-6 mb-3">
          <div class="input-group" :class="{'error': $v.formData.category.$error}">
            <v-select
              v-model="$v.formData.category.$model"
              :options="categories"
              label="string"
              placeholder="Категория дохода"
              @search="search"
              @input="$v.formData.category.$reset"
            >
              <template #no-options>
                Совпадений не найдено
              </template>
            </v-select>
          </div>
        </div>
        <div class="col-6">
          <div class="input-group" :class="{'error': $v.formData.paymentType.$error}">
            <v-select
              v-model="$v.formData.paymentType.$model"
              :searchable="false"
              :options="paymentTypes"
              label="string"
              placeholder="Способ оплаты"
              @input="$v.formData.paymentType.$reset"
            />
          </div>
        </div>
        <div class="col-6">
          <!--          <fieldset class="input-group">-->
          <!--            <div class="input-group">-->
          <!--              <input id="profit" type="checkbox">-->
          <!--              <label for="profit">-->
          <!--                Учесть в бюджете-->
          <!--              </label>-->
          <!--            </div>-->
          <!--            <div class="input-group mt-2">-->
          <!--              <v-select />-->
          <!--            </div>-->
          <!--          </fieldset>-->
          <div class="input-group" :class="{'error': $v.formData.sum.$error}">
            <input
              v-model="$v.formData.sum.$model"
              type="number"
              class="field"
              placeholder="Сумма"
              @input="$v.formData.sum.$reset"
            >
          </div>
        </div>
        <div class="col-12 mt-3">
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
          Сохранить
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import vSelect from 'vue-select'
import CalcWindow from '~/classes/CalcWindow'

@Component({
  components: {
    vSelect
  }
})
export default class extends CalcWindow {
  type: number = 0
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
    background-color: #216a61;
    font-size: 14px;
    font-weight: bold;
    line-height: 12px;
    padding: 20px 0 21px 25px;
    text-transform: uppercase;
    color: white;
  }

  &__body {
    padding: 35px 25px;
    position: relative;
    flex-grow: 1;
    border: 1px solid rgba(0, 0, 0, .3);
    border-top: none;

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
        background: #216a61 url(~@/assets/img/fields/calendar-white.png) no-repeat center/20px;
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
        background-color: #216a61;
        color: white;
        border-color: transparent;
      }

      .action-btn + .action-btn {
        margin-left: 12px;
      }
    }
  }
}

.col-6:nth-of-type(2n) {
  padding-left: 8px;
}

.col-6:nth-of-type(2n - 1) {
  padding-right: 8px;
}
</style>
