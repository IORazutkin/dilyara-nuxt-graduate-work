<template>
  <div class="component">
    <div class="component__header">
      Диаграмма расходов
    </div>
    <div id="cost-diagram" class="component__diagram" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { CostStat } from '~/types/CostStat'

@Component
export default class extends Vue {
  @Prop() data!: CostStat[]

  mounted () {
    this.$chart.charts.load('current', { packages: ['corechart'] })
    this.$chart.charts.setOnLoadCallback(this.drawHistogram)
  }

  drawHistogram () {
    const data = this.$chart.visualization.arrayToDataTable([
      ['Тип', 'Расход'],
      ...this.data.map((item: CostStat) => [item.title, item.value])
    ])

    const options = {
      // bar: { groupWidth: '95%' },
      legend: { position: 'bottom' },
      colors: ['#ffa428', '#ffb14e', '#ffc275', '#ffdfb0'],
      fontName: 'Roboto Slab',
      chartArea: {
        top: 20,
        bottom: 40
      }
    }

    const chart = new this.$chart.visualization.PieChart(document.getElementById('cost-diagram'))
    chart.draw(data, options)
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
    font-family: "Roboto Slab", sans-serif;
    color: rgba(0, 0, 0, .7);
    font-size: 12px;
    line-height: 48px;
  }

  &__diagram {
    flex-grow: 1;
  }
}
</style>
