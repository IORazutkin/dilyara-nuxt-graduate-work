<template>
  <div class="page__view">
    <div class="container">
      <div class="page__view__image" />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.page {
  &__view {
    min-height: calc(100vh - 57px);
    display: flex;
    padding: 50px;

    &__image {
      width: 100%; height: 100%;
      background: transparent url(~@/assets/img/view.png) no-repeat center/contain;
    }
  }
}
</style>
