<template>
  <div class="item">
    <div class="item__count">
      {{ data.previous[propName] | moneyFilter(true) }}
    </div>
    <div class="item__title">
      {{ title }}
    </div>
    <div class="item__footer">
      <div class="item__footer__title">
        За неделю
      </div>
      <div class="item__footer__count">
        + {{ data.current[propName] | moneyFilter(true) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Stat } from '~/types/Stat'
import { WeeklyStat } from '~/types/WeeklyStat'

@Component
export default class extends Vue {
  @Prop() data!: WeeklyStat
  @Prop() propName!: 'impressions' | 'reach' | 'profileViews' | 'followerCount'

  get title () {
    switch (this.propName) {
      case 'impressions':
        return 'Показы'
      case 'reach':
        return 'Охват'
      case 'profileViews':
        return 'Просмотры профиля'
      case 'followerCount':
        return 'Число подписчиков'
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  background-color: white;
  padding: 8px 12px;
  text-transform: uppercase;
  font-size: 12px;
  font-family: "Roboto Slab", sans-serif;
  border: 1px solid rgba(0, 0, 0, .3);

  &__count {
    color: #216a61;
    font-size: 14px;
    font-weight: bold;
  }

  &__footer {
    border-top: 1px solid rgba(0, 0, 0, .2);
    margin-top: 6px;
    padding-top: 2px;
    display: flex;
    justify-content: space-between;
    font-size: 11px;

    &__title {
      color: rgba(0, 0, 0, .3);
    }

    &__count {
      color: #216a61;
      font-weight: bold;
    }
  }
}
</style>
