'use client';

import React from 'react';
import axios from 'axios';

import { useRouter } from 'next/navigation';

export default function FormUser() {
  const [user, setUser] = React.useState<string>('');
  const [post, setPost] = React.useState<string>('');
  const router = useRouter();

  const handleCreate = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/user', {
        user: user,
      });
      console.log('res', res);
      setUser('');
      return res;
    } catch (error) {
      console.log('error', error);
    }
  };

  const handlePost = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/posts', {
        title: post,
        content: post,
      });
      setPost('');
      router.refresh();
      return res;
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleCreate}>
        <input
          value={user}
          type="text"
          placeholder="User"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button className="rounded-md bg-stone-800 p-3 text-base text-white">
          Submit
        </button>
      </form>

      <form onSubmit={handlePost}>
        <input
          value={post}
          type="text"
          placeholder="Post"
          onChange={(e) => {
            setPost(e.target.value);
          }}
        />
        <button className="rounded-md bg-stone-800 p-3 text-base text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
