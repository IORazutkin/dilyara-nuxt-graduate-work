import { OperationCategory } from '~/types/OperationCategory'

export interface Operation {
  id: number
  date: Date
  paymentType: number
  category: OperationCategory
  sum: number
  comment: string
  description: string
}
