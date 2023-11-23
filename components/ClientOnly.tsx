'use client';

import * as React from 'react';

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="border border-red-500">{children}</div>;
}
