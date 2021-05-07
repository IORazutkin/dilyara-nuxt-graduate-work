<template>
  <div class="component">
    <div class="component__header">
      <div class="component__header__title">
        График денежного потока (доходы-расходы)
      </div>
      <div class="component__header__nav">
        <button class="btn-arrow" @click="step(-1)">
          &lt;
        </button>
        <button class="btn-arrow" :disabled="index === 0" @click="step(1)">
          &gt;
        </button>
      </div>
    </div>
    <div id="daily-flow" class="component__histogram" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { MoneyFlow } from '~/types/MoneyFlow'

@Component
export default class extends Vue {
  @Prop() index!: number
  @Prop() data!: MoneyFlow[]

  mounted () {
    this.$chart.charts.load('current', { packages: ['corechart'] })
    this.$chart.charts.setOnLoadCallback(this.drawHistogram)
  }

  step (step: number) {
    const query = Object.assign({}, this.$route.query)
    query.index = (this.index + step).toString()

    this.$router.replace({
      query
    }).then(() => {
      this.$emit('step', this.drawHistogram)
    })
  }

  drawHistogram () {
    const data = this.$chart.visualization.arrayToDataTable([
      ['Месяц', 'Доход', 'Расход'],
      ...this.data.map((item: MoneyFlow) => [(this.$options.filters as any).dashboardDate(item.date), item.profit, item.cost])
    ])

    const options = {
      // bar: { groupWidth: '95%' },
      legend: { position: 'none' },
      colors: ['#006a60', '#ffa428'],
      chartArea: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 80
      },
      fontName: 'Roboto Slab',
      fontSize: 14,
      hAxis: { textColor: '#464646' },
      vAxis: { textColor: '#464646' }
    }

    const chart = new this.$chart.visualization.ColumnChart(document.getElementById('daily-flow'))
    chart.draw(data, options)
  }
}
</script>

<style lang="scss" scoped>
.component {
  padding: 0 20px 20px;
  background-color: white;
  grid-column: 1/4;
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

  &__histogram {
    flex-grow: 1;
  }
}
</style>
