import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const res = await prisma.user.findMany();

    return NextResponse.json({ data: res });
  } catch (error) {
    console.log('error', error);
  }
};

export const POST = async (req: Request) => {
  const { user } = await req.json();
  console.log('user', user);
  try {
    const data = await prisma.user.create({
      data: {
        name: user,
      },
    });

    return NextResponse.json({ data, message: 'hello world' });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({ error });
  }
};
