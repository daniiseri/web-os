import { api } from "@/lib/api"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function DELETE(request: Request) {
  const { id } = await request.json()
  const token = cookies().get('token')?.value
  try {
    const { data } = await api.delete(`/customers/${id}`)

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err })
  }
}