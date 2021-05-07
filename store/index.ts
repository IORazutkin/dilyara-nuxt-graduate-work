import { Context } from '@nuxt/types'
import User from '~/types/User'

export const actions = {
  nuxtServerInit ({ commit }: any, context: Context) {
    if (/^\/main/.test(context.req.url as string)) {
      return context.$axios.$get('/api/user').then((user: User) => {
        commit('user/setUser', user)
      })
    }
  }
}
