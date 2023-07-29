import { api } from "@/lib/api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const values = await request.json()

  try {
    const { data } = await api.post('/products', values)
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err })
  }

}