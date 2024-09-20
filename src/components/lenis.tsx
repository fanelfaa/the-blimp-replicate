'use client';
import Lenis from 'lenis';
import { ReactNode, useEffect } from 'react';

export const LenisWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
};
