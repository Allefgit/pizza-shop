import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    createdAt: new Date().toISOString(),
    customer: {
      name: 'Allefin',
      email: 'allefin@gmail.com',
      phone: '(15) 988672654',
    },
    orderItems: [
      {
        id: 'orderId-1',
        priceInCents: 1588,
        product: { name: 'product-1' },
        quantity: 1,
      },
      {
        id: 'orderId-2',
        priceInCents: 1200,
        product: { name: 'product-2' },
        quantity: 1,
      },
    ],
    status: 'pending',
    totalInCents: 3988,
  })
})
