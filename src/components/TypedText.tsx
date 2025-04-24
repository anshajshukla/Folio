// @ts-nocheck
"use client";

import type React from 'react';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings?: string[];
  texts?: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  texts,
  typeSpeed = 100,
  backSpeed = 50,
  loop = true,
  className = '',
}) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  
  // Use either strings or texts prop, so it works with both prop names
  const stringsToUse = strings || texts || [];

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: stringsToUse,
        typeSpeed,
        backSpeed,
        loop,
        cursorChar: '|',
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [stringsToUse, typeSpeed, backSpeed, loop]);

  return <span ref={el} className={className} />;
};

export default TypedText;
