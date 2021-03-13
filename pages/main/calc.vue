<template>
  <div class="calc">
    <calc-list />
    <cost-window />
    <profit-window />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CalcList from '~/components/calc/CalcList.vue'
import CostWindow from '~/components/calc/CostWindow.vue'
import ProfitWindow from '~/components/calc/ProfitWindow.vue'

@Component({
  components: {
    CalcList,
    CostWindow,
    ProfitWindow
  }
})
export default class extends Vue {
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
