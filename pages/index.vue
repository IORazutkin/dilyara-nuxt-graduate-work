<template>
  <div class="page">
    <page-header />
    <anchor id="offer" />
    <page-offer />
    <anchor id="target" />
    <page-target />
    <anchor id="features" />
    <page-features />
    <anchor id="view" />
    <page-view />
    <page-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PageHeader from '~/components/index/Header.vue'
import PageOffer from '~/components/index/Offer.vue'
import PageTarget from '~/components/index/Target.vue'
import PageFeatures from '~/components/index/Features.vue'
import PageView from '~/components/index/View.vue'
import PageFooter from '~/components/index/Footer.vue'
import Anchor from '~/components/Anchor.vue'

@Component({
  components: {
    Anchor,
    PageHeader,
    PageOffer,
    PageTarget,
    PageFeatures,
    PageView,
    PageFooter
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
</style>

<style>
html {
  scroll-behavior: smooth;
}
</style>
