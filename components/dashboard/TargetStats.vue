<template>
  <div class="component">
    <div class="component__header">
      <div class="component__header__title">
        Статистика таргета
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
    <div id="target-diagram" class="component__diagram" />
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
      ['День недели', 'Таргет'],
      ['Пн', 176],
      ['Вт', 324],
      ['Ср', 225],
      ['Чт', 367],
      ['Пт', 254],
      ['Сб', 209],
      ['Вс', 276]
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
    // @ts-ignore
    // eslint-disable-next-line no-undef
    const chart = new google.visualization.ColumnChart(document.getElementById('target-diagram'))
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

  &__diagram {
    flex-grow: 1;
  }
}
</style>
