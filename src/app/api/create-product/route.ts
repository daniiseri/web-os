import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const token = cookies().get('token')?.value
  const values = request.json()

  try {
    const { data } = await api.post('/products', values, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json(err)
  }

}