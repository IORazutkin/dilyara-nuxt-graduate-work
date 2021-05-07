import User from '~/types/User'

export interface Note {
  id: number
  string: string
  type: number
  user: User
}
