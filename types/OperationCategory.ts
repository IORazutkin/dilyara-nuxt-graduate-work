import User from '~/types/User'

export interface OperationCategory {
  id: number
  string: string
  type: number
  user: User
}
