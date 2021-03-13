<template>
  <div class="page__features">
    <div class="container">
      <div class="page__features__wrapper">
        <div v-for="feature in features" :key="feature.title" class="page__features__item">
          <div class="item-header">
            <img :src="feature.img" class="item-icon" width="80" height="80">
            <div class="item-title">
              {{ feature.title }}
            </div>
          </div>
          <div class="item-description">
            {{ feature.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface Feature {
  img: any
  title: string
  description: string
}

@Component
export default class extends Vue {
  features: Feature[] = [
    {
      img: require('@/assets/img/features/dashboard.png'),
      title: 'Дашборд',
      description: 'это умные отчеты в реальном времени,\n' +
        'с помощью которых пользователи \n' +
        '(самозанятые) понимают, что прямо \n' +
        'сейчас происходит с определенными \n' +
        'показателями и группами показателей. '
    },
    {
      img: require('@/assets/img/features/calendar.png'),
      title: 'Календарь',
      description: 'это старница с календарем. Здесь \n' +
        'пользователям (самозанятым) предоставляется \n' +
        'возможность пометки важных событий, \n' +
        'связаные с бизнесом (продажа заказа, покупка \n' +
        'оборудования и т.д.) '
    },
    {
      img: require('@/assets/img/features/calc.png'),
      title: 'Калькулятор',
      description: 'на этой странице вводятся данные о \n' +
        'расходах, фиксируются доходы пользователей \n' +
        '(самозанятых). Всю информация о доходах и \n' +
        'расходах можно отслеживать на главной \n' +
        'странице при в ходе в личный аккаунт.'
    },
    {
      img: require('@/assets/img/features/notes.png'),
      title: 'Заметки',
      description: ' на данной странице возможно вносить краткие \n' +
        'письменные сообщения о чем-нибудь изученном, \n' +
        'замеченном пользователем (самозанятым).\n' +
        'Заметки будут доступны на этой же сранице.\n' +
        'Перейти к ним можно в любое время  '
    },
    {
      img: require('@/assets/img/features/insta.png'),
      title: 'Статистика инстаграмм',
      description: 'Статистика Instagram аккаунта позволяет \n' +
        'узнать: количество просмотров, охват, лайки, \n' +
        'сохранения, работу таргета и промоакций \n' +
        'профиля. Данная страница поможет.клиенту\n' +
        'понять каким образом работает рекламма.'
    },
    {
      img: require('@/assets/img/features/profile.png'),
      title: 'Профиль',
      description: 'Раздел Профиль доступен после входа клиента \n' +
        'в Личный кабинет.. В профиле содержатся \n' +
        'основные сведения о пользователе, необходимые \n' +
        'для работы в Личном кабинете. Сведения можно \n' +
        'редактировать и сохранять.'
    },
    {
      img: require('@/assets/img/features/tip.png'),
      title: 'Справки и подсказки',
      description: 'в разделе справки и подсказки можно найти\n' +
        'информацию о компании, инструкцию по работе \n' +
        'с данным сайтом, справочную информацию по\n' +
        'дашборду и личному кабинету.'
    },
    {
      img: require('@/assets/img/features/currency.png'),
      title: 'Валюта',
      description: 'это денежная единица. Данная платформа \n' +
        'поддерживает работу с тремя денежными \n' +
        'валюми Рубль/RUB, Доллар/DOL, Евро/EUR/\n' +
        'Lенежной систему можно поменять в любой\n' +
        'момент работы с сайтом.'
    }
  ]
}
</script>

<style lang="scss" scoped>
.page {
  &__features {
    background-color: #f0f0f0;
    height: calc(100vh - 57px);
    display: flex;
    align-items: center;

    &__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 15px;
    }

    &__item {
      .item-header {
        display: flex;
        align-items: center;
      }

      .item-title {
        font-size: 16px;
        line-height: 15px;
        color: black;
        font-weight: bold;
        opacity: .7;
        margin-left: 20px;
      }

      .item-description {
        font-size: 14px;
        line-height: 30px;
        margin-top: 15px;
        opacity: .7;
      }
    }
  }
}
</style>
