import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'restaurant-user-id',
    name: 'Pizza Shop',
    managerId: 'manager-user-id',
    description: 'Restaurante mock',
    createdAt: new Date(),
    updatedAt: null,
  })
})
