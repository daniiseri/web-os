import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const code = new URL(request.url).searchParams.get('code')

  const { data } = await api.post('/register', { code })

  cookies().set('token', data)

  return NextResponse.redirect(new URL('/', request.url))
}