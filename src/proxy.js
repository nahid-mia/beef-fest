import { NextResponse } from "next/server";

export function proxy(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}