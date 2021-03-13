<template>
  <div class="main__menu">
    <button
      class="main__menu__item dashboard-item"
      :class="{'active': $route.fullPath.endsWith('dashboard')}"
      @click="$router.push('/main/dashboard')"
    >
      &nbsp;
    </button>
    <button
      class="main__menu__item calendar-item"
      :class="{'active': $route.fullPath.endsWith('calendar')}"
      @click="$router.push('/main/calendar')"
    >
      &nbsp;
    </button>
    <button
      class="main__menu__item calc-item"
      :class="{'active': $route.fullPath.endsWith('calc')}"
      @click="$router.push('/main/calc')"
    >
      &nbsp;
    </button>
    <button
      class="main__menu__item notes-item"
      :class="{'active': $route.fullPath.endsWith('notes')}"
      @click="$router.push('/main/notes')"
    >
      &nbsp;
    </button>
    <button
      class="main__menu__item insta-item"
      :class="{'active': $route.fullPath.endsWith('insta')}"
      @click="$router.push('/main/insta')"
    >
      &nbsp;
    </button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.main {
  &__menu {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: #fcfcfc;
    padding-top: 20px;

    &__item {
      display: block;
      width: 90px; height: 80px;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center;
      border: none;

      &:hover {
        background-color: rgba(0, 106, 96, .05);
      }

      &.active {
        background-color: rgba(0, 106, 96, .1);
      }

      &.dashboard-item {
        background-image: url(~@/assets/img/menu/dashboard.png);
        background-size: 31px;
      }

      &.calendar-item {
        background-image: url(~@/assets/img/menu/calendar.png);
        background-size: 30px;
      }

      &.calc-item {
        background-image: url(~@/assets/img/menu/calc.png);
        background-size: 27px;
      }

      &.notes-item {
        background-image: url(~@/assets/img/menu/notes.png);
        background-size: 31px;
      }

      &.insta-item {
        background-image: url(~@/assets/img/menu/insta.png);
        background-size: 29px;
      }
    }
  }
}
</style>
