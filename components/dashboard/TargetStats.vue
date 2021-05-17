<template>
  <div class="component">
    <div class="component__header">
      <div class="component__header__title">
        Статистика таргета
      </div>
      <div class="component__header__nav">
        <div class="component__header__date">
          {{ rangeDate(0) }} - {{ rangeDate(6) }}
        </div>
        <button class="btn-arrow" @click="step(-1)">
          &lt;
        </button>
        <button class="btn-arrow" :disabled="index === 0" @click="step(1)">
          &gt;
        </button>
      </div>
    </div>
    <div id="target-diagram" class="component__diagram" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { InstagramTarget } from '~/types/InstagramTarget'

@Component
export default class extends Vue {
  @Prop() index!: number
  @Prop() data!: InstagramTarget[]

  rangeDate (shift: number = 0) {
    const date = this.data[0] ? new Date(this.data[0].date.split('T')[0]) : new Date()
    date.setDate(date.getDate() + shift)
    return date.getDate().toString().padStart(2, '0') + '.' + (date.getMonth() + 1).toString().padStart(2, '0')
  }

  mounted () {
    this.$chart.charts.load('current', { packages: ['corechart'] })
    this.$chart.charts.setOnLoadCallback(this.drawHistogram)
  }

  drawHistogram () {
    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    const weekData = Object.assign(new Array(7).fill({}), this.data)
    const data = this.$chart.visualization.arrayToDataTable([
      ['День недели', 'Таргет'],
      ...weekData.map((item: any, index: number) => [weekDays[index], item.value || 0])
    ])

    const options = {
      // bar: { groupWidth: '95%' },
      legend: { position: 'none' },
      colors: ['#019d8e'],
      chartArea: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 30
      },
      fontName: 'Roboto Slab',
      fontSize: 14,
      hAxis: { textColor: '#464646' },
      vAxis: { textColor: '#464646' }
    }

    const chart = new this.$chart.visualization.ColumnChart(document.getElementById('target-diagram'))
    chart.draw(data, options)
  }

  step (step: number) {
    const query = Object.assign({}, this.$route.query)
    query.target = (this.index + step).toString()

    this.$router.replace({
      query
    }).then(() => {
      this.$emit('step', this.drawHistogram)
    })
  }
}
</script>

<style lang="scss" scoped>
.component {
  padding: 0 20px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, .3);

  &__header {
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      font-family: "Roboto Slab", sans-serif;
      color: rgba(0, 0, 0, .7);
      font-size: 12px;
      line-height: 48px;
    }

    &__date {
      line-height: 28px;
      font-size: 12px;
      font-family: "Roboto Slab", sans-serif;
      margin-right: 8px;
    }

    &__nav {
      display: flex;

      .btn-arrow {
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, .3);
        border-radius: 50%;
        display: block;
        width: 28px; height: 28px;
        color: rgba(0, 0, 0, .7);
        font-size: 16px;
        font-family: "Roboto Slab", sans-serif;
        padding: 0 0 5px 0;
      }

      .btn-arrow + .btn-arrow {
        margin-left: 8px;
      }
    }
  }

  &__diagram {
    flex-grow: 1;
  }
}
</style>
