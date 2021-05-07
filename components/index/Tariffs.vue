<template>
  <div class="page__tariffs">
    <div class="container">
      <div class="page__tariffs__wrapper">
        <div class="page__tariffs__description">
          70% пользователей платных аккаунтов более успешны в достижении поставленных целей, чем пользователи бесплатных аккаунтов.
        </div>
        <div class="page__tariffs__list">
          <tariff-item title="Free" price="Бесплатно" btn-text="Перейти к системе">
            <p class="tariff-item__body__p">
              Для начального уровня работы только на сайте. Удобен при небольшом количестве счетов и операций.
              Функционал бесплатного тарифа в любом случае мощнее любых конкурентных решений, это Вам гарантируем.
            </p>
          </tariff-item>
          <tariff-item title="Full Pro" price="250 рублей в месяц" btn-text="Попробовать бесплатно">
            <p class="tariff-item__body__p">
              Полезен предпринимателям, фрилансерам, инвесторам, семейным пользователям,
              имеющим амбициозные цели по улучшению финансового положения.
            </p>
          </tariff-item>
          <tariff-item title="Medium Pro" price="149 рублей в месяц" btn-text="Попробовать бесплатно">
            <p class="tariff-item__body__p">
              Рекомендуем пользователям с кредитами и депозитами, а также при наличии планов по крупным покупкам.
            </p>
          </tariff-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TariffItem from '~/components/index/TariffItem'
export default {
  name: 'Tariffs',
  components: { TariffItem }
}
</script>

<style lang="scss" scoped>
.page {
  &__tariffs {
    background-color: #f0f0f0;
    height: calc(100vh - 57px);
    display: flex;
    padding: 110px 0;

    &__wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    &__title {
      font-size: 46px;
      text-align: center;
      padding: 0 40px 30px;
    }

    &__description {
      font-size: 32px;
      text-align: center;
      line-height: 1.2em;
      margin-bottom: 32px;
    }

    &__list {
      flex-grow: 1;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 32px;
    }
  }
}
</style>
