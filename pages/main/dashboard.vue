<template>
  <div class="dashboard">
    <daily-money-flow />
    <cost-diagram />
    <instagram-stats />
    <target-stats />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DailyMoneyFlow from '~/components/dashboard/DailyMoneyFlow.vue'
import CostDiagram from '~/components/dashboard/CostDiagram.vue'
import TargetStats from '~/components/dashboard/TargetStats.vue'
import InstagramStats from '~/components/dashboard/InstagramStats.vue'

@Component({
  components: {
    DailyMoneyFlow,
    CostDiagram,
    TargetStats,
    InstagramStats
  }
})
export default class extends Vue {
  head () {
    return {
      script: [
        { src: 'https://www.gstatic.com/charts/loader.js', defer: true }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 420px;
  grid-gap: 15px;
}
</style>
