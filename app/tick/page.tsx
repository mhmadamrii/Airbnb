'use client';

import { useState } from 'react';

type TFIelds = {
  id: number;
};

export default function Tick() {
  const fields: TFIelds[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
  ];

  const [clicked, setClicked] = useState<{ [key: number]: boolean }>({});

  const handleChooseUser = (id: number): void => {
    setClicked((prevClicked) => ({
      ...prevClicked,
      [id]: !prevClicked[id],
    }));
  };
  console.log('initial state', clicked);

  return (
    <main className="container mx-auto mb-3 flex justify-center">
      <section className="flex w-1/2 flex-wrap justify-center gap-4 border">
        {fields.map((item, id: number) => {
          const isClicked = clicked[item.id] ?? false;
          return (
            <div
              key={id}
              className="flex h-[200px] w-[200px] cursor-pointer items-center justify-center bg-slate-200 text-[100px] font-bold"
              onClick={() => handleChooseUser(item.id)}
            >
              {isClicked && 'X'}
            </div>
          );
        })}
      </section>
    </main>
  );
}
