import React from 'react';
import FormUser from '@/components/form-user';
import { prisma } from '@/config/prisma';

export default async function App() {
  const users = await prisma.user.findMany();
  const posts = await prisma.post.findMany();
  console.log(users);
  return (
    <div>
      <h1>Hello world</h1>
      <FormUser />
      {posts.map((item: any, idx: number) => (
        <h1 key={idx} className="text-4xl">
          {item.title}
        </h1>
      ))}
    </div>
  );
}
