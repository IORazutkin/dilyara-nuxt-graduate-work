<template>
  <div class="component">
    <div class="component__header">
      <div class="component__header__search">
        <input type="text" placeholder="Поиск">
      </div>
      <div class="component__header__nav">
        <button class="nav-btn" :class="{'active': !$route.query.type || $route.query.type === '1'}" @click="tab(1)">
          Расходы
        </button>
        <button class="nav-btn" :class="{'active': $route.query.type === '0'}" @click="tab(0)">
          Доходы
        </button>
      </div>
    </div>
    <div class="component__sub-header">
      <div class="component__sub-header__nav">
        <button class="btn-arrow" @click="arrowClick(-1)">
          &lt;
        </button>
        <div class="current">
          {{ isoDate | dashboardDate }}
        </div>
        <button class="btn-arrow" :disabled="index === 0" @click="arrowClick(1)">
          &gt;
        </button>
      </div>
      <div class="component__sub-header__total">
        <div>
          Всего
        </div>
        <div>
          {{ totalSum | moneyFilter }} Rub
        </div>
      </div>
    </div>
    <div class="component__list">
      <calc-list-item v-for="item in data" :key="item.id" :item="item" @update="$emit('update')" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Operation } from '~/types/Operation'
import CalcListItem from '~/components/calc/CalcListItem.vue'

@Component({
  components: { CalcListItem }
})
export default class extends Vue {
  @Prop() data!: Operation[]

  index: number = parseInt(this.$route.query.index as string || '0')
  today: Date = new Date()

  get totalSum () {
    return this.data.length && this.data.map((item: Operation) => item.sum).reduce((a, b) => a + b)
  }

  get isoDate () {
    const date = new Date(this.current)
    date.setMonth(date.getMonth() + 1)

    return date.toISOString()
  }

  get current () {
    const date = new Date()
    date.setDate(1)
    date.setMonth(this.today.getMonth() + this.index)

    return date
  }

  arrowClick (step: number) {
    const query = Object.assign({}, this.$route.query)
    query.index = (this.index + step).toString()
    this.index += step

    this.$router.replace({
      query
    }).then(() => {
      this.$emit('update')
    })
  }

  tab (type: number) {
    const query = Object.assign({}, this.$route.query)
    query.type = type.toString()

    this.$router.replace({
      query
    }).then(() => {
      this.$emit('update')
    })
  }
}
</script>

<style lang="scss" scoped>
.component {
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
  grid-row: 1/3;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, .3);

  &__header {
    display: flex;
    justify-content: space-between;

    &__search {
      margin: 9px 20px;

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

      .nav-btn {
        height: 100%;
        width: 125px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        color: rgba(0, 0, 0, .7);
        border: none;
        border-bottom: 1px solid transparent;
        background-color: transparent;
        text-transform: uppercase;
      }

      .active {
        border-color: #fe982a;
        pointer-events: none;
      }
    }
  }

  &__sub-header {
    display: flex;
    justify-content: space-between;
    padding: 9px 20px 9px 50px;
    background: #ececec url(~@/assets/img/fields/calendar.png) no-repeat left 20px center/20px;
    border-top: 1px solid rgba(0, 0, 0, .2);
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    &__nav {
      display: flex;
      align-items: center;

      .btn-arrow {
        display: block;
        width: 34px; height: 34px;
        background-color: transparent;
        border: none;
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

    &__total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      min-width: 200px;
    }
  }

  &__list {
    background-color: #f5f5f5;
    height: 100%;
  }
}
</style>
