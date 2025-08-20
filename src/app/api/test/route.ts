import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      MONGODB_URI_EXISTS: !!process.env.MONGODB_URI,
      MONGODB_DB: process.env.MONGODB_DB || 'not_set'
    }
  });
}

export async function POST() {
  return NextResponse.json({
    message: 'POST endpoint is working!',
    timestamp: new Date().toISOString()
  });
}