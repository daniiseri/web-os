import { api } from "@/lib/api"
import { NextResponse } from "next/server"

export async function PUT(request: Request) {
  const { id, name, description, price } = await request.json()
  try {
    const { data } = await api.put(`/services/${id}`, {
      name,
      description,
      price
    })

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err })
  }
}