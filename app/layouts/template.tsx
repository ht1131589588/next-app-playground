import { Boundary } from '@/ui/Boundary';
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="template-mark"><Boundary>{children}</Boundary></div>;
}
