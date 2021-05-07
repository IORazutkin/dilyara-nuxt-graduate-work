<template>
  <div class="calc">
    <calc-list :data="operations" @update="update" />
    <cost-window :categories="costCategories" @post="refresh" />
    <profit-window :categories="profitCategories" @post="refresh" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CalcList from '~/components/calc/CalcList.vue'
import CostWindow from '~/components/calc/CostWindow.vue'
import ProfitWindow from '~/components/calc/ProfitWindow.vue'
import { Operation } from '~/types/Operation'
import { OperationCategory } from '~/types/OperationCategory'

@Component({
  components: {
    CalcList,
    CostWindow,
    ProfitWindow
  }
})
export default class extends Vue {
  operations: Operation[] = []
  profitCategories: OperationCategory[] = []
  costCategories: OperationCategory[] = []

  async fetch () {
    const params = {
      type: parseInt(this.$route.query.type as string || '1'),
      index: parseInt(this.$route.query.index as string || '0')
    }

    this.operations = await this.$axios.$get('/api/operation?' + require('qs').stringify(params))

    if (!this.profitCategories.length && !this.costCategories.length) {
      const categories: OperationCategory[] = await this.$axios.$get('/api/operation-category')
      this.profitCategories = categories.filter(item => item.type === 0)
      this.costCategories = categories.filter(item => item.type === 1)
      // @ts-ignore
      this.profitCategories.push({})
      // @ts-ignore
      this.costCategories.push({})
    }
  }

  refresh () {
    this.profitCategories = []
    this.$fetch()
  }

  update () {
    this.$fetch()
  }
}
</script>

<style lang="scss" scoped>
.calc {
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
}
</style>
