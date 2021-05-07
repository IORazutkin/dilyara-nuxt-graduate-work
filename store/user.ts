import User from '~/types/User'

export const state = (): { user: null | User } => ({
  user: null
})

export const getters = {
  getUser: (state: any) => state.user
}

export const mutations = {
  setUser (state: any, user: User) {
    state.user = Object.assign({}, user)
  }
}

export default {
  namespace: true,
  state,
  getters,
  mutations
}
