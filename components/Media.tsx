'use client';

import React, { ChangeEvent, useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface DataPost {
  id: string;
  updatedAt: string;
  createdAt: string;
  title: string;
  description: string;
}

export default function Media() {
  const [input, setInput] = useState({
    title: '',
    description: '',
  });

  const { data: dataPost } = useQuery<DataPost[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      try {
        const result = await axios.get('/api/post');
        return result.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  console.log('data posts', dataPost);

  const { mutate } = useMutation({
    mutationFn: async () => {
      console.log('runs');
      await axios.post('/api/post', {
        title: input.title,
        description: input.description,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    e.preventDefault();
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>{input.title}</h1>
      <input name="title" className="border-2" onChange={handleChange} />
      <input name="description" className="border-2" onChange={handleChange} />
      <button onClick={() => mutate()} className="border-2 p-4">
        Mutate
      </button>
      {dataPost?.data.map((item, idx) => (
        <div key={item?.id}>
          <h1 className="text-2xl">{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
