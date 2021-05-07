<template>
  <div class="tab">
    <div v-if="!$store.getters['user/getUser'].instagramUsername" class="tab__prefer">
      <div>
        <div class="tab__prefer__title">
          Добавьте аккаунт Instagram для начала работы
        </div>
        <div class="tab__prefer__description">
          Войдите в instagram чтобы отслеживать данные с таргета,
          управлять рекламой, следить за статистикой
        </div>
      </div>
      <a class="tab__prefer__btn" href="http://localhost:8080/oauth2/authorization/facebook">
        Войти
      </a>
    </div>
    <div class="tab__features">
      <div v-for="item in features" :key="item.title" class="tab__features__item">
        <div class="image">
          <img :src="item.img">
        </div>
        <div>
          <div class="title">
            {{ item.title }}
          </div>
          <div class="description">
            {{ item.description }}
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
  features: any = [
    {
      img: require('~/assets/img/features/stats.png'),
      title: 'Статистика профиля',
      description: 'Эффективно работать, не анализируя результат, невозможно Об аккаунте в Instagram мы \n' +
        'можем узнать: количество подписчиков, количество лайков, количество комментариев, \n' +
        'количество просмотров видео, охват профиля, просмотры профиля, просмотры историй'
    },
    {
      img: require('~/assets/img/features/ads-promote.png'),
      title: 'Движение рекламы',
      description: 'Темп роста аккаунта, среднее количество лайков и комментариев, ER (коэффициент \n' +
        'вовлечения). По этим показателям можно сравнить разные аккаунты.Отслеживание \n' +
        'статистики позволяет оценить правильность ваших действий. Анализ в Instagram поможет \n' +
        'оценить эффективность рекламной кампании'
    },
    {
      img: require('~/assets/img/features/graphs.png'),
      title: 'Графический анализ',
      description: 'Графический анализ заключается в представлении данных в графическом виде и их \n' +
        'последующему анализу. Данный формат помогает визуально отценить движение \n' +
        'работы и развития таргета'
    }
  ]
}
</script>

<style lang="scss" scoped>
.tab {
  width: 630px;
  margin: 24px auto;

  &__prefer {
    border: 2px solid #fe982a;
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
      font-size: 16px;
      font-weight: bold;
      color: rgba(0, 0, 0, .7);
    }

    &__description {
      margin-top: 20px;
      font-family: "Roboto Slab", sans-serif;
      font-size: 14px;
      line-height: 24px;
      color: rgba(0, 0, 0, .3);
    }

    &__btn {
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, .2);
      font-size: 10px;
      line-height: 8px;
      font-weight: bold;
      color: rgba(0, 0, 0, .7);
      background-color: white;
      padding: 8px 24px;
    }
  }

  &__features {
    margin-top: 32px;

    &__item {
      display: flex;
      align-items: center;

      & + & {
        margin-top: 16px;
      }

      .image {
        flex-shrink: 0;
        width: 80px; height: 80px;
        background-image: linear-gradient(to top, #216a61 0%, #fe982a 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
      }

      .title {
        font-size: 14px;
        font-weight: bold;
        color: rgba(0, 0, 0, .7);
      }

      .description {
        font-family: "Roboto Slab", sans-serif;
        font-size: 10px;
        line-height: 14px;
        color: rgba(0, 0, 0, .5);
        margin-top: 4px;
      }
    }
  }
}
</style>
