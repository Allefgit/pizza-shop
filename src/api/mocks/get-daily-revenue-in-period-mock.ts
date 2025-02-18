import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2025', receipt: 5669 },
    { date: '02/01/2025', receipt: 1568 },
    { date: '03/01/2025', receipt: 1651 },
    { date: '04/01/2025', receipt: 8994 },
    { date: '05/01/2025', receipt: 3215 },
    { date: '06/01/2025', receipt: 9152 },
    { date: '07/01/2025', receipt: 1655 },
  ])
})
