import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  function sayHello(a: number) {
	  return a
  }

  sayHello();

  return NextResponse.json({});
}
