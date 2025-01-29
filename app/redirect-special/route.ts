import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const redirectDestination = req.headers.get('destination')
  
  if (!redirectDestination) {
    console.error('missing redirect destination');
    return NextResponse.json({ invalid: true })
  }
  return NextResponse.redirect(redirectDestination)
}
