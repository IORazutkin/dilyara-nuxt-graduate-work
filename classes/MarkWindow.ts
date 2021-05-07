import { Component, Vue } from 'nuxt-property-decorator'
import { required } from 'vuelidate/lib/validators'
import { Mark } from '~/types/Mark'

@Component
export default class extends Vue {
  typeList: any[] = [
    {
      id: 0,
      label: 'Доход'
    },
    {
      id: 1,
      label: 'Расход'
    }
  ]

  formData: any = {
    event: null,
    date: (new Date()).toISOString().split('T')[0],
    type: this.typeList[-1],
    comment: null,
    description: null
  }

  get isEditWindow () {
    return false
  }

  reset () {
    // @ts-ignore
    Object.assign(this.$data, this.$options.data.apply(this))
    setTimeout(this.$v.$reset, 0)
  }

  async submit () {
    this.$v.$touch()

    if (this.$v.$error) {
      return
    }

    const data = Object.assign({}, this.formData)
    data.type = this.formData.type.id

    if (data.id) {
      await this.$axios.$put('/api/mark/' + data.id, data)
    } else {
      await this.$axios.$post('/api/mark', data)
    }

    this.$emit('submit')
    this.reset()
  }

  mounted () {
    this.$eventBus.$on('SelectDate', (data: Mark | string) => {
      this.reset()
      if (typeof data === 'string') {
        this.formData.date = data
      } else if (this.isEditWindow) {
        Object.assign(this.formData, data)
        this.formData.type = this.typeList[this.formData.type]
      }
    })
  }

  validations () {
    return {
      formData: {
        event: {
          required
        },
        date: {
          required
        },
        type: {
          required
        },
        comment: {},
        description: {
          required
        }
      }
    }
  }
}
