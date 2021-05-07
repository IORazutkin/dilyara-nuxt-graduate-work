<template>
  <div class="info">
    <div class="info__item input-group" :class="{'error': $v.formData.fullName.$error}">
      <div class="info__item__label profile">
        Фамилия, Имя, Отчество
      </div>
      <div class="info__item__input">
        <input v-model.trim="$v.formData.fullName.$model" class="field" @input="$v.formData.fullName.$reset">
      </div>
    </div>
    <div class="info__item input-group" :class="{'error': $v.formData.businessDate.$error}">
      <div class="info__item__label date">
        Дата регистрации Бизнеса
      </div>
      <div class="info__item__input">
        <date-field v-model="$v.formData.businessDate.$model" @input="$v.formData.businessDate.$reset" />
      </div>
    </div>
    <div class="info__item input-group" :class="{'error': $v.formData.startCapital.$error}">
      <div class="info__item__label cost">
        Начальный капитал
      </div>
      <div class="info__item__input">
        <input v-model.number="$v.formData.startCapital.$model" type="number" class="field" @input="$v.formData.startCapital.$reset">
      </div>
    </div>
    <div class="info__item">
      <div class="info__item__label insta">
        Instagram
      </div>
      <div class="info__item__input">
        <input v-model="formData.instagramUsername" class="field" readonly placeholder="Вы не вошли в instagram">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { required } from 'vuelidate/lib/validators'
import User from '~/types/User'
import DateField from '~/components/DateField.vue'

@Component({
  components: { DateField }
})
export default class extends Vue {
  formData: User = Object.assign({}, this.$store.getters['user/getUser'])
  timer: any = null

  get someInfo () {
    return this.formData.fullName + this.formData.businessDate + this.formData.startCapital
  }

  @Watch('someInfo')
  onUserUpdate () {
    if (this.timer) {
      clearTimeout(this.timer)
    }

    this.timer = setTimeout(() => {
      this.$v.$touch()

      if (this.$v.$error) {
        return
      }

      this.$axios.$put('/api/user', this.formData).then((user: User) => {
        this.$store.commit('user/setUser', user)
      })
    }, 2000)
  }

  validations () {
    return {
      formData: {
        fullName: {
          required
        },
        businessDate: {
          isValid (val: string) {
            return !val || /^\d\d\d\d-\d\d-\d\d$/.test(val)
          },
          isTrueDate (date: string) {
            if (!date) {
              return true
            }

            const d = new Date(date)
            return +date.substr(8, 2) === d.getDate()
          }
        },
        startCapital: {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  grid-column: 2/4;
  background-color: white;
  padding: 24px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 14px;

  &__item {
    display: flex;

    & + & {
      margin-top: 24px;
    }

    &__input {
      width: 50%;
    }

    &__label {
      width: 50%;
      line-height: 34px;
      padding-left: 50px;
      background-position: left center;
      background-repeat: no-repeat;
      background-size: 25px;

      &.profile {
        background-image: url(~@/assets/img/icons/profile.png);
      }

      &.date {
        background-image: url(~@/assets/img/icons/calendar.svg);
      }

      &.cost {
        background-image: url(~@/assets/img/icons/cost.svg);
      }

      &.insta {
        background-image: url(~@/assets/img/icons/insta.svg);
      }
    }
  }
}

.field {
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 3px;
  background-color: white;
  height: 34px;
  padding: 0 8px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 10px;
  color: rgba(0, 0, 0, .7);
}
</style>
