<template>
  <div class="page__offer">
    <div class="container">
      <div class="page__offer__wrapper">
        <h1 class="page__offer__title">
          Финансовый помощник
          <span>самозанятым</span>
        </h1>
        <h2 class="page__offer__description">
          <span>Упрости свой бизнес! Быстрый страт, удобный интерфейс</span>
          <span>длительный бесплатный период, низкая цена</span>
        </h2>
        <button class="page__offer__start" @click="$router.push('/login')">
          Попробовать
        </button>
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
  &__offer {
    margin-top: 57px;
    height: calc(100vh - 57px);
    background: url(~@/assets/img/laptop-background.png) no-repeat center/cover;
    padding-top: 300px;
    text-align: center;

    &__title {
      color: white;
      font-size: 72px;
      text-align: center;
      line-height: 70px;
      margin: 0;
      font-weight: bold;
      text-shadow: 1px 1px 2px black;

      span {
        display: block;
        font-size: 60px;
        line-height: 33px;
        margin-top: 24px;
      }
    }

    &__description {
      margin-top: 120px;
      color: white;
      font-size: 16px;
      line-height: 17px;
      text-align: center;
      text-shadow: 1px 1px 2px #333;

      span {
        display: block;
      }

      span + span {
        margin-top: 28px;
      }
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
      margin-top: 130px;
      box-shadow: 0 0 3px 0 #333;
    }
  }
}
</style>
