'use client';

import { ReactNode } from 'react';

export default function ClientOnly({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
