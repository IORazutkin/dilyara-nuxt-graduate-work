<template>
  <div class="main">
    <page-header />
    <div class="main__body">
      <div class="main__body__wrapper">
        <page-menu />
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PageMenu from '~/components/main/Menu.vue'
import PageHeader from '~/components/main/Header.vue'

@Component({
  components: {
    PageMenu,
    PageHeader
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  background-color: #f0f0f0;
  padding-top: 76px;
  position: relative;
  display: flex;
  align-items: stretch;

  &__body {
    display: flex;
    flex-grow: 1;

    &__wrapper {
      display: flex;
      align-items: stretch;
      flex-grow: 1;
    }
  }
}
</style>
