<template>
  <div class="user-calendar">
    <div class="user-calendar__header">
      <div class="user-calendar__header__nav">
        <button class="btn-arrow" @click="arrowClick(-1)">
          &lt;
        </button>
        <div class="current">
          {{ isoDate | dashboardDate }}
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
        <div
          v-for="i in calendarList"
          :key="i.visible + i.date"
          :class="{[i.visible]: true, 'selected': selected === i.iso, ['type-' + i.type]: true}"
          class="table-item"
          @click="itemClick(i)"
        >
          {{ i.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Mark } from '~/types/Mark'

@Component
export default class extends Vue {
  @Prop() marks!: Mark[]

  index: number = parseInt(this.$route.query.index as string || '0')
  selected: string = ''

  get isoDate () {
    const date = new Date(this.current)
    date.setMonth(date.getMonth() + 1)

    return date.toISOString()
  }

  get current () {
    const date: Date = new Date()
    date.setDate(1)
    date.setMonth(date.getMonth() + this.index)

    return date
  }

  get calendarList () {
    const result = []
    const first: Date = this.current

    const date = new Date(first)
    for (let i = first.getDay() || 7; i > 1; i--) {
      date.setDate(date.getDate() - 1)
      result.unshift({
        visible: 'hide',
        date: date.getDate()
      })
    }

    const iter = new Date(first)
    while (iter.getMonth() === first.getMonth()) {
      const iso = first.getFullYear() + '-' + (first.getMonth() + 1).toString().padStart(2, '0') + '-' + iter.getDate().toString().padStart(2, '0')
      const mark = this.marks.find((item: Mark) => item.date === iso)
      const dateBody: any = {
        visible: 'show',
        date: iter.getDate(),
        iso
      }

      if (mark) {
        dateBody.type = mark.type
      }

      result.push(dateBody)
      iter.setDate(iter.getDate() + 1)
    }

    for (let i = iter.getDay(); i >= 0 && i !== 1 && i < 8; i++) {
      result.push({
        visible: 'hide',
        date: iter.getDate()
      })
      iter.setDate(iter.getDate() + 1)
    }

    return result
  }

  itemClick (dateItem: any) {
    this.selected = dateItem.iso
    const mark = this.marks.find((item: Mark) => item.date === dateItem.iso)
    this.$eventBus.$emit('SelectDate', mark || dateItem.iso)
  }

  arrowClick (direction: number) {
    this.index += direction
    const query = Object.assign({}, this.$route.query)
    query.index = this.index.toString()

    this.$router.replace({
      query
    }).then(() => {
      this.$emit('update')
    })
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
  border: 1px solid rgba(0, 0, 0, .3);

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
          opacity: .7;
        }
      }

      .hide {
        color: rgba(0, 0, 0, .3);
        background-color: #fafafa;
        cursor: default;
        pointer-events: none;

        &:hover {
          opacity: 1;
        }
      }

      .type-0 {
        background-color: #216a61;
        color: white;
      }

      .type-1 {
        background-color: #fe982a;
        color: white;
      }

      .selected {
        border: 2px solid #005590;
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
