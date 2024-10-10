import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/careertop']
};

export default function middleware(NextRequest) {
  const basicAuth = NextRequest.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, password] = atob(authValue).split(':');

    if (user === process.env.BASICAUTH_USERNAME && password === process.env.BASICAUTH_PASSWORD) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Unauthorized.', {
    status: 401,
    headers: {
      'WWW-authenticate': 'Basic realm="Secure Area"'
    }
  });
}