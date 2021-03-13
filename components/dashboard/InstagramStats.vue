<template>
  <div class="component">
    <div class="component__header">
      <div class="component__header__title">
        Статистика инстаграмм
      </div>
      <div class="component__header__nav">
        <div class="today">
          Сегодня
        </div>
        <div class="calendar">
          <input value="2020-12-08" type="date">
        </div>
      </div>
    </div>
    <div class="component__body">
      <div class="component__body__list">
        <div v-for="item in list" :key="item.title" class="item">
          <div class="item-title">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  list: any = [
    {
      title: 'Охваченные аккаунты',
      subItems: [
        { title: 'Охват продвигаемых публикаций', count: 1140 },
        { title: 'Посещение профиля', count: 1120 },
        { title: 'Нажатие на кнопку «Эл. письмо»', count: 100 }
      ]
    },
    {
      title: 'Взаимодействия с контентом',
      subItems: [
        { title: 'Взаимодействие с историей', count: 11200 },
        { title: 'Взаимодействие с публикацией', count: 1700 }
      ]
    },
    {
      title: 'Промоакции',
      subItems: [
        { title: 'Активные промоакции', count: 4 }
      ]
    },
    {
      title: 'Подписчики',
      subItems: [
        { title: 'Всего подписчиков', count: 1100 },
        { title: 'Новые подписчики', count: 14 },
        { title: 'Отмена подписки', count: 2 }
      ]
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

  &__header {
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      font-family: "Roboto Slab", sans-serif;
      color: rgba(0, 0, 0, .7);
      font-size: 12px;
      line-height: 48px;
    }

    &__nav {
      display: flex;

      .today {
        font-size: 12px; line-height: 20px;
        font-family: "Roboto Slab", sans-serif;
        margin-right: 12px;
        color: rgba(0, 0, 0, .7);
      }

      .calendar input[type="date"] {
        background-color: transparent;
        border: 0;
        width: 64px;
        font-family: "Roboto Slab", sans-serif;
        font-size: 12px;
        display: block;
        padding: 0;
        height: 100%;
        color: rgba(0, 0, 0, .7);
        outline: none;

        &::-webkit-calendar-picker-indicator { display: none }
      }
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
  }
}
</style>
