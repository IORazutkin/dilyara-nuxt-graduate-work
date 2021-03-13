<template>
  <div class="component">
    <div class="component__header">
      Диаграмма расходов
    </div>
    <div id="cost-diagram" class="component__diagram" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  mounted () {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    google.charts.load('current', { packages: ['corechart'] })
    // @ts-ignore
    // eslint-disable-next-line no-undef
    google.charts.setOnLoadCallback(this.drawHistogram)
  }

  drawHistogram () {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    const data = google.visualization.arrayToDataTable([
      ['Тип', 'Расход'],
      ['Доставка товара', 10000],
      ['Бирки', 9000],
      ['Пакеты', 12000],
      ['Ткани', 5000]
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
    // @ts-ignore
    // eslint-disable-next-line no-undef
    const chart = new google.visualization.PieChart(document.getElementById('cost-diagram'))
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
