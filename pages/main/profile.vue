<template>
  <div class="profile">
    <preview-block />
    <info-block />
    <tab-block />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PreviewBlock from '~/components/profile/PreviewBlock.vue'
import InfoBlock from '~/components/profile/InfoBlock.vue'
import TabBlock from '~/components/profile/TabBlock.vue'

@Component({
  components: {
    PreviewBlock,
    InfoBlock,
    TabBlock
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 15px;
}
</style>
