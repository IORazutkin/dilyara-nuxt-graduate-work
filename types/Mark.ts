import User from '~/types/User'

export interface Mark {
  id: number
  event: string
  date: string
  type: number
  comment: string
  description: string
  user: User
}
