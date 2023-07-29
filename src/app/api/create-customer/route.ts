import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const token = cookies().get('token')?.value
  const values = await request.json()

  try {
    const { data } = await api.post('/customers', values, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err })
  }

}