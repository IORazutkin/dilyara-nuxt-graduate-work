<template>
  <div class="main__menu">
    <button
      class="main__menu__item dashboard-item"
      :class="{'active': $route.path.endsWith('dashboard')}"
      @click="$router.push('/main/dashboard')"
    >
      &nbsp;
    </button>
    <button
      class="main__menu__item calendar-item"
      :class="{'active': $route.path.endsWith('calendar')}"
      @click="$router.push('/main/calendar')"
    >
      &nbsp;
    </button>
    <button
      class="main__menu__item calc-item"
      :class="{'active': $route.path.endsWith('calc')}"
      @click="$router.push('/main/calc')"
    >
      &nbsp;
    </button>
    <button
      class="main__menu__item notes-item"
      :class="{'active': $route.path.endsWith('notes')}"
      @click="$router.push('/main/notes')"
    >
      &nbsp;
    </button>
    <button
      class="main__menu__item insta-item"
      :class="{'active': $route.path.endsWith('insta')}"
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
    position: fixed;
    left: 0; top: 76px;
    height: 100%;
    z-index: 9999;
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

      &.dashboard-item {
        background-image: url(~@/assets/img/menu/dashboard.svg);
        background-size: 31px;

        &.active {
          background-image: url(~@/assets/img/menu/dashboard-checked.svg);
        }
      }

      &.calendar-item {
        background-image: url(~@/assets/img/menu/calendar.svg);
        background-size: 30px;

        &.active {
          background-image: url(~@/assets/img/menu/calendar-checked.svg);
        }
      }

      &.calc-item {
        background-image: url(~@/assets/img/menu/calc.svg);
        background-size: 30px;

        &.active {
          background-image: url(~@/assets/img/menu/calc-checked.svg);
        }
      }

      &.notes-item {
        background-image: url(~@/assets/img/menu/notes.svg);
        background-size: 31px;

        &.active {
          background-image: url(~@/assets/img/menu/notes-checked.svg);
        }
      }

      &.insta-item {
        background-image: url(~@/assets/img/menu/insta.svg);
        background-size: 29px;

        &.active {
          background-image: url(~@/assets/img/menu/insta-checked.svg);
        }
      }
    }
  }
}
</style>
