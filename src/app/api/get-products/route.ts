import { api } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await api.get('/products')

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err })
  }
}