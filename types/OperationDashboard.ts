import { MoneyFlow } from '~/types/MoneyFlow'
import { CostStat } from '~/types/CostStat'

export interface OperationDashboard {
  moneyFlow: MoneyFlow[]
  costStat: CostStat[]
}
