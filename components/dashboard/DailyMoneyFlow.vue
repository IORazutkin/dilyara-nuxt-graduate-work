<template>
  <div class="component">
    <div class="component__header">
      <div class="component__header__title">
        График денежного потока (доходы-расходы)
      </div>
      <div class="component__header__nav">
        <button class="btn-arrow">
          &lt;
        </button>
        <button class="btn-arrow">
          &gt;
        </button>
      </div>
    </div>
    <div id="daily-flow" class="component__histogram" />
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
      ['Месяц', 'Доход', 'Расход'],
      ['Сентябрь 19', 10000, 8000],
      ['Октябрь 19', 9000, 8500],
      ['Ноябрь 19', 12000, 10000],
      ['Декабрь 19', 5000, 13000],
      ['Январь 20', 9000, 10500],
      ['Февраль 20', 12000, 10000]
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
    // @ts-ignore
    // eslint-disable-next-line no-undef
    const chart = new google.visualization.ColumnChart(document.getElementById('daily-flow'))
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
