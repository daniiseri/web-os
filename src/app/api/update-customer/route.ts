import { api } from "@/lib/api"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function PATCH(request: Request) {
  const { name, id, createdAt } = await request.json()
  const token = cookies().get('token')?.value

  try {
    const { data } = await api.patch(`/customers/${id}`, {
      name,
      createdAt
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err })
  }
}