import { http, HttpResponse } from 'msw'

import { GetMonthRevenueAmountResponse } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueAmountResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 7536,
    diffFromLastMonth: 9,
  })
})
