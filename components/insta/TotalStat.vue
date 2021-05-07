<template>
  <div v-if="!$fetchState.pending" class="component">
    <total-stat-item :data="weeklyStat" prop-name="impressions" />
    <total-stat-item :data="weeklyStat" prop-name="reach" />
    <total-stat-item :data="weeklyStat" prop-name="profileViews" />
    <total-stat-item :data="weeklyStat" prop-name="followerCount" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TotalStatItem from '~/components/insta/TotalStatItem.vue'
import { WeeklyStat } from '~/types/WeeklyStat'

@Component({
  components: { TotalStatItem }
})
export default class extends Vue {
  weeklyStat: WeeklyStat | null = null

  async fetch () {
    this.weeklyStat = await this.$axios.$get('/api/facebook/weekly-stat')
  }
}
</script>

<style lang="scss" scoped>
.component {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 16px;
}
</style>
