import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'


export async function middleware(request: NextRequest) {
  const hasToken = request.cookies.has('token')

  if (!hasToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }


  return NextResponse.next()
}

export const config = {
  matcher: [
    '/charges:path*',
    '/customers:path*',
    '/files:path*',
    '/financial-releases:path*',
    '/sales:path*',
    '/service-orders:path*',
    '/services:path*',
    '/warranties:path*',
    '/products:path*',
  ],
}