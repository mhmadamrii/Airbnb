import { prisma } from '@/config/prisma';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const POST = async (req: Response) => {
  const { user, title, content } = await req.json();
  console.log('title', title);
  try {
    const res = await prisma.post.create({
      data: {
        title,
        content,
        userId: 123,
      },
    });

    revalidatePath('/');
    return NextResponse.json({ data: res, message: 'success' });
  } catch (error) {
    return new NextResponse('Internal server error', {
      status: 500,
    });
  }
};
