import { api } from "@/lib/api"
import { NextResponse } from "next/server"

export async function PUT(request: Request) {
  const { id, description, purchasePrice, salePrice, stock } = await request.json()

  try {
    const { data } = await api.put(`products/${id}`, {
      description,
      purchasePrice,
      salePrice,
      stock
    })

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err })
  }
}