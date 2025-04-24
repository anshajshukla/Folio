// @ts-nocheck
import React from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card3D({ children, className = '' }: Card3DProps) {
  return <div className={className}>{children}</div>;
}
