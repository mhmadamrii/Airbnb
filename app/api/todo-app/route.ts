import { NextResponse } from 'next/server';

export default async function GET() {
  return NextResponse.json({ data: 'lorem ipsum dolor' });
}
