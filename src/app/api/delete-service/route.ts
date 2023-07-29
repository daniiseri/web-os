import { api } from "@/lib/api"
import { NextResponse } from "next/server"

export async function DELETE(request: Request) {
  const { id } = await request.json()
  try {
    const { data } = await api.delete(`/services/${id}`)

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err })
  }
}