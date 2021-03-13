<template>
  <div class="user-calendar">
    <div class="user-calendar__header">
      <div class="user-calendar__header__search">
        <input type="text" placeholder="Поиск">
      </div>
      <div class="user-calendar__header__nav">
        <button class="btn-arrow" @click="arrowClick(-1)">
          &lt;
        </button>
        <div class="current">
          {{ current | dateFilter }}
        </div>
        <button class="btn-arrow" @click="arrowClick(1)">
          &gt;
        </button>
      </div>
    </div>
    <div class="user-calendar__body">
      <div class="user-calendar__body__table">
        <div class="table-item table-title">
          Понедельник
        </div>
        <div class="table-item table-title">
          Вторник
        </div>
        <div class="table-item table-title">
          Среда
        </div>
        <div class="table-item table-title">
          Четверг
        </div>
        <div class="table-item table-title">
          Пятница
        </div>
        <div class="table-item table-title">
          Суббота
        </div>
        <div class="table-item table-title">
          Воскресенье
        </div>
        <div v-for="i in calendarList" :key="i.type + i.date" :class="i.type" class="table-item">
          {{ i.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  filters: {
    dateFilter (date: Date) {
      return date.toLocaleDateString('ru', {
        month: 'long'
      }) + ' ' + date.getFullYear()
    }
  }
})
export default class extends Vue {
  today: Date = new Date()
  current: Date = new Date()

  get calendarList () {
    const result = []
    const first: Date = new Date(this.current)
    first.setDate(1)

    const date = new Date(first)
    for (let i = first.getDay() || 7; i > 1; i--) {
      date.setDate(date.getDate() - 1)
      result.unshift({
        type: 'hide',
        date: date.getDate()
      })
    }

    const iter = new Date(first)
    while (iter.getMonth() === first.getMonth()) {
      result.push({
        type: 'show',
        date: iter.getDate()
      })
      iter.setDate(iter.getDate() + 1)
    }

    for (let i = iter.getDay(); i >= 0 && i !== 1 && i < 8; i++) {
      result.push({
        type: 'hide',
        date: iter.getDate()
      })
      iter.setDate(iter.getDate() + 1)
    }

    return result
  }

  arrowClick (direction: number) {
    this.current.setDate(1)
    this.current.setMonth(this.current.getMonth() + direction)
    this.current = new Date(this.current)
  }
}
</script>

<style lang="scss" scoped>
.user-calendar {
  display: flex;
  flex-direction: column;
  padding: 20px;
  grid-column: 1/3;
  grid-row: 1/3;
  background-color: white;

  &__header {
    display: flex;
    justify-content: space-between;

    &__search {
      input {
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, .2);
        height: 34px;
        font-family: "Roboto Slab", sans-serif;
        font-size: 10px;
        padding: 0 34px 0 8px;
        background: white url(~@/assets/img/fields/search.png) no-repeat center right 8px/18px;
        outline: none;
      }
    }

    &__nav {
      display: flex;
      align-items: center;

      .btn-arrow {
        display: block;
        width: 34px; height: 34px;
        background-color: white;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, .2);
        font-family: "Roboto Slab", sans-serif;
        font-size: 14px;
        color: rgba(0, 0, 0, .7);
        padding: 0 0 4px;
      }

      .current {
        margin: 0 15px;
        font-family: "Roboto Slab", sans-serif;
        font-size: 14px;
        color: rgba(0, 0, 0, .7);
        text-transform: uppercase;
        width: 120px;
        text-align: center;
      }
    }
  }

  &__body {
    margin-top: 32px;
    &__table {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      background-color: rgba(0, 0, 0, .2);
      grid-gap: 1px;
      padding: 1px;
      width: 100%;

      .table-item {
        background-color: white;
        height: 120px;
        padding: 8px;
        text-align: right;
        font-family: "Roboto Slab", sans-serif;
        font-size: 14px;
        color: rgba(0, 0, 0, .7);
        cursor: pointer;

        &:hover {
          background-color: #f0f0f0;
        }
      }

      .hide {
        color: rgba(0, 0, 0, .3);
        background-color: #fafafa;
        cursor: default;

        &:hover {
          background-color: #fafafa;
        }
      }

      .table-title {
        font-family: "Noto Sans", sans-serif;
        font-size: 10px; line-height: 23px;
        font-weight: bold;
        text-align: center;
        height: 23px;
        padding: 0;
      }
    }
  }
}
</style>
