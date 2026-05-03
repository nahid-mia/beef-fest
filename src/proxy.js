import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4', '0.0.0.0', '1.1.1.1', '1.0.0.1', '208.67.222.222']);
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if (session) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: ['/detailspage/:path*', '/myprofile'],
}