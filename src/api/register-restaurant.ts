import { api } from '../lib/axios'

export interface SignUpRestauratBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function signUpRestaurat({
  restaurantName,
  managerName,
  email,
  phone,
}: SignUpRestauratBody) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
