import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const token = cookies().get('token')?.value

  try {
    const { data } = await api.get('/customers', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err })
  }
}