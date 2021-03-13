<template>
  <div class="anchor" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  mounted () {
    window.addEventListener('scroll', this.trigger)
  }

  destroyed () {
    window.removeEventListener('scroll', this.trigger)
  }

  trigger () {
    // @ts-ignore
    if (window.scrollY >= this.$el.offsetTop && window.scrollY <= this.$el.offsetTop + 200) {
      this.$eventBus.$emit('AnchorTrigger', this.$el.id)
    }
  }
}
</script>

<style scoped>
.anchor {
  position: relative;
  top: -57px;
}
</style>
