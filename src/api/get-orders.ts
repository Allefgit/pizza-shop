import { api } from '../lib/axios'

export interface GetOrdersParams {
  pageIndex?: number | null
  status?: string | null
  customerName?: string | null
  orderId?: string | null
}

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  pageIndex,
  status,
  customerName,
  orderId,
}: GetOrdersParams) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      status,
      customerName,
      orderId,
    },
  })

  return response.data
}
