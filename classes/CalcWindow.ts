import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { required } from 'vuelidate/lib/validators'
import paymentTypes from '~/types/PaymentType'
import { OperationCategory } from '~/types/OperationCategory'
import { Operation } from '~/types/Operation'

@Component
export default class extends Vue {
  @Prop() categories!: OperationCategory[]

  paymentTypes: any = paymentTypes
  type: number = 1
  formData: any = {
    date: (new Date()).toISOString().split('T')[0],
    paymentType: paymentTypes[-1],
    category: this.categories[-1],
    sum: null,
    comment: null,
    description: null
  }

  reset () {
    // @ts-ignore
    Object.assign(this.$data, this.$options.data.apply(this))
    setTimeout(this.$v.$reset, 0)
  }

  search (val: string) {
    if (val) {
      // @ts-ignore
      this.categories.splice(this.categories.length - 1, 1, { string: val })
    }
  }

  async save () {
    this.$v.$touch()

    if (this.$v.$error) {
      return
    }

    const data: Operation = Object.assign({}, this.formData)
    data.category.type = this.type
    data.paymentType = this.formData.paymentType.id

    if (this.formData.id) {
      await this.$axios.$put('/api/operation/' + this.formData.id, data)
    } else {
      await this.$axios.$post('/api/operation', data)
    }

    this.$emit('post')
    this.reset()
  }

  mounted () {
    this.$eventBus.$on('UpdateOperation', (item: Operation) => {
      if (item.category.type === this.type) {
        Object.assign(this.formData, item)
        this.formData.paymentType = paymentTypes[this.formData.paymentType]
      }
    })
  }

  validations () {
    return {
      formData: {
        date: {
          required
        },
        paymentType: {
          required
        },
        category: {
          string: {
            required
          }
        },
        sum: {
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
