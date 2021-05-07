<template>
  <div class="popup">
    <div v-if="title" class="popup__header">
      {{ title }}
    </div>
    <div class="popup__body">
      <slot name="body" />
    </div>
    <div class="popup__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop() title!: string

  mounted () {
    window.addEventListener('click', () => {
      this.$emit('close')
    })
  }
}
</script>

<style lang="scss" scoped>
.popup {
  cursor: default;
  position: absolute;
  top: 70px; right: 0;
  border: 1px solid rgba(150, 150, 150, 0.7);
  background-color: white;
  min-width: 240px;
  min-height: 280px;
  z-index: 9999;

  &::before {
    content: '';
    display: block;
    width: 16px; height: 16px;
    background-color: white;
    border: 1px solid #ccc;
    position: absolute;
    top: -8px; right: 12px;
    transform: scaleY(1.4) rotate(45deg);
  }

  &::after {
    content: '';
    display: block;
    width: 22px; height: 18px;
    background-color: white;
    position: absolute;
    top: 0; right: 9px;
  }

  &__header {
    font-family: "Roboto Slab", sans-serif;
    font-size: 12px;
    color: rgba(0, 0, 0, .7);
    padding: 6px 0;
    border-bottom: 1px solid #ccc;
  }

  &__footer {
    position: absolute;
    width: 100%;
    bottom: 0;

    a {
      display: block;
      width: 100%;
      font-family: "Roboto Slab", sans-serif;
      font-size: 10px;
      color: rgba(0, 0, 0, .7);
      padding: 4px 0;
      background-color: #f3f5f4;
      border-top: 1px solid #ccc;
    }
  }
}
</style>
