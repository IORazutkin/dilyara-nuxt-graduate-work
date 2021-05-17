<template>
  <div class="page__target">
    <div class="container">
      <div class="page__target__wrapper">
        <div class="page__target__content">
          <div class="page__target__title">
            Наша цель - помочь <span>самозанятым</span>
          </div>
          <div class="page__target__offer">
            Мы предлагаем удобную платформу для
            ведения и отслеживания расходов и доходов,
            анализа и аналитики таргета в истаграмм.
            На сайте доступны графики и диаграммы.
          </div>
          <div class="page__target__description">
            Сервис имеет удобный интерфейс и
            все необходимые инструменты для
            ведения бизнеса. Доверьте нам свои
            финансы. Мы не подведем.
          </div>
          <button class="page__target__start" @click="$router.push('/login')">
            Попробовать
          </button>
        </div>
        <div class="page__target__image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.page {
  &__target {
    min-height: calc(100vh - 57px);
    display: flex;
    align-items: center;
    padding: 50px 0;

    &__wrapper {
      display: flex;
    }

    &__content {
      width: 320px;
      display: flex;
      flex-direction: column;
    }

    &__title {
      color: #006a60;
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 22px;

      span {
        display: block;
        margin-top: 20px;
      }
    }

    &__offer {
      color: black;
      font-size: 16px;
      line-height: 18px;
      opacity: .7;
      margin-top: 75px;
    }

    &__description {
      font-family: 'Roboto Slab', sans-serif;
      font-size: 16px;
      line-height: 18px;
      color: black;
      opacity: .3;
      margin-top: 50px;
    }

    &__start {
      font-family: "Roboto Slab", sans-serif;
      background-color: #216a61;
      color: #fefefe;
      padding: 25px 60px;
      text-transform: uppercase;
      font-size: 18px;
      line-height: 13px;
      border-radius: 3px;
      border: none;
      margin-top: 65px;
      box-shadow: 0 0 3px 0 #333;
      align-self: center;
    }

    &__image {
      flex-grow: 1;
      background: transparent url(~@/assets/img/target_laptop.png) no-repeat center right/contain;
      margin-left: 150px;
    }
  }
}
</style>
