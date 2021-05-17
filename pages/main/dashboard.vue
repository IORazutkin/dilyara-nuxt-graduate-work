<template>
  <div v-if="!$fetchState.pending" class="dashboard">
    <daily-money-flow :data="operationDashboard.moneyFlow" :index="index" @step="stepDashboard" />
    <cost-diagram :data="operationDashboard.costStat" />
    <instagram-stats :data="instagramStat" />
    <target-stats :data="instagramTarget" :index="target" @step="stepTarget" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DailyMoneyFlow from '~/components/dashboard/DailyMoneyFlow.vue'
import CostDiagram from '~/components/dashboard/CostDiagram.vue'
import TargetStats from '~/components/dashboard/TargetStats.vue'
import InstagramStats from '~/components/dashboard/InstagramStats.vue'
import { OperationDashboard } from '~/types/OperationDashboard'
import { InstagramTarget } from '~/types/InstagramTarget'
import { InstagramStat } from '~/types/InstagramStat'

@Component({
  components: {
    DailyMoneyFlow,
    CostDiagram,
    TargetStats,
    InstagramStats
  }
})
export default class extends Vue {
  index: number = parseInt(this.$route.query.index as string || '0')
  target: number = parseInt(this.$route.query.target as string || '0')
  operationDashboard: OperationDashboard | null = null
  instagramTarget: InstagramTarget[] = []
  instagramStat: InstagramStat | null = null

  async fetch () {
    await this.fetchDashboard()
    await this.fetchTarget()
    this.instagramStat = await this.$axios.$get('/api/facebook/stat')
  }

  async stepDashboard (callback: Function) {
    this.index = parseInt(this.$route.query.index as string)
    await this.fetchDashboard()
    callback()
  }

  async stepTarget (callback: Function) {
    this.target = parseInt(this.$route.query.target as string)
    await this.fetchTarget()
    callback()
  }

  async fetchDashboard () {
    const params = {
      limit: 7,
      index: this.index
    }
    this.operationDashboard = await this.$axios.$get('/api/operation/dashboard?' + require('qs').stringify(params))
  }

  async fetchTarget () {
    this.instagramTarget = (await this.$axios.$get('/api/facebook/target?index=' + this.target)) || []
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
