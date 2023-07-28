import { decode } from 'jsonwebtoken'
import { cookies } from 'next/headers'

interface User {
  sub: string
  name: string
  email: string
  picture: string
}

export function getUser(): User {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticate')
  }

  const user = decode(token) as User

  return user
}