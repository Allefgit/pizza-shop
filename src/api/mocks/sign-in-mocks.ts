import { http, HttpResponse } from 'msw'

import { SignInBody } from '../sign-in'

export const signInMocks = http.post<never, SignInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'allef@gmail.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }

    return new HttpResponse(null, { status: 401 })
  },
)
