import { NextRequest, NextResponse } from 'next/server'

const allowedOrigins = ['https://www.overpowerman.click']

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS, HEAD',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export function middleware(request: NextRequest) {
  // Check the origin from the request
  const origin = request.headers.get('origin') ?? ''
  const host = request.headers.get('host') ?? ''
  console.log(`[${new Date().toString()}] - origin: ${origin}`)
  console.log(`[${new Date().toString()}] - requestUrl: ${request.method} ${request.url}`)
  console.log(`[${new Date().toString()}] - host: ${host}`)
  console.log('----headers----')
  Array.from(request.headers.entries()).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)
  })
  console.log('--------------------------------------------')
  const isAllowedOrigin = allowedOrigins.includes(origin)

  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS'

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }

  // Handle simple requests
  const response = NextResponse.next()

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  return response
}