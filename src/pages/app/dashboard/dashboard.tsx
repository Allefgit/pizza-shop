import { Helmet } from 'react-helmet-async'

import { DayOrderAmountCard } from './day-orders-amount-card'
import { MonthsCanceledOrdersAmountCard } from './months-canceled-orders-amount-card'
import { MonthsOrdersAmountCard } from './months-orders-amount-card'
import { MonthsRevenueCard } from './months-revenue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="DashBorad" />
      <div className="flex flex-col gap-4">
        <h1 className="tacking-tight text-3xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthsRevenueCard />
          <MonthsOrdersAmountCard />
          <DayOrderAmountCard />
          <MonthsCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
