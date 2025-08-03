import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl

  // Handle www to non-www redirect
  if (hostname === 'www.devbibek.tech') {
    const url = request.nextUrl.clone()
    url.hostname = 'devbibek.tech'
    return NextResponse.redirect(url, 301)
  }

  // Allow the request to continue for all other cases
  // The rewrites in next.config.ts will handle /lander paths
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 