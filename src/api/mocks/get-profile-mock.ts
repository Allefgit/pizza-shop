import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'manager-user-id',
      name: 'Allef Moreira',
      email: 'allef.moreira03@gmail.com',
      phone: '(31) 35163-5598',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
