<template>
  <div class="component">
    <div class="component__header">
      <div class="component__header__title">
        Статистика инстаграмм
      </div>
    </div>
    <div class="component__body">
      <div v-if="data.page && data.audience" class="component__body__list">
        <div v-for="item in list" :key="item.title" class="item">
          <div v-if="item.title" class="item-title">
            {{ item.title }}
          </div>
          <div v-for="subItem in item.subItems" :key="subItem.title" class="sub-item">
            <div class="sub-item-title">
              {{ subItem.title }}
            </div>
            <div class="sub-item-count">
              {{ subItem.count }}
            </div>
          </div>
        </div>
      </div>
      <div v-else class="component__body__empty">
        Статистика пуста
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { InstagramStat } from '~/types/InstagramStat'

@Component
export default class extends Vue {
  @Prop() data!: InstagramStat

  list: any = [
    {
      subItems: this.data.page
        ? [
            { title: 'Публикации', count: this.data.page.mediaCount },
            { title: 'Подписчики', count: this.data.page.followersCount },
            { title: 'Подписки', count: this.data.page.followsCount }
          ]
        : []
    },
    {
      title: 'Города подписчиков',
      subItems: this.data.audience
        ? [
            ...Object.entries(this.data.audience.audienceCity).map(([key, value]) => ({
              title: key,
              count: value
            })).sort((a, b) => b.count - a.count)
          ]
        : []
    },
    {
      title: 'Распределение подписчиков по возрасту и полу',
      subItems: this.data.audience
        ? [
            ...Object.entries(this.data.audience.audienceGenderAge).map(([key, value]) => ({
              title: key.replace('M.', 'М ').replace('F.', 'Ж '),
              count: value
            })).sort((a, b) => b.count - a.count)
          ]
        : []
    }
  ]
}
</script>

<style lang="scss" scoped>
.component {
  padding: 0 20px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: auto;
  min-width: 400px;
  border: 1px solid rgba(0, 0, 0, .3);

  &__header {
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    &__title {
      font-family: "Roboto Slab", sans-serif;
      color: rgba(0, 0, 0, .7);
      font-size: 12px;
      line-height: 48px;
    }
  }

  &__body {
    &__list {
      .item {
        &-title {
          font-size: 12px;
          font-weight: bold;
          color: rgba(0, 0, 0, .2);
          margin: 10px 0;
        }
      }

      .sub-item {
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        font-size: 10px; line-height: 16px;
        font-family: "Roboto Slab", sans-serif;
        color: rgba(0, 0, 0, .7);
        display: flex;
        justify-content: space-between;
      }

      .sub-item + .sub-item {
        margin-top: 8px;
      }
    }

    &__empty {
      text-align: center;
      font-size: 12px;
      color: #A9A9A9;
    }
  }
}
</style>
