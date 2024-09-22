'use client';

import { useEffect, useRef, useState } from 'react';
import { CursorThunderEffect } from './cursor';
import { createPortal } from 'react-dom';

const CursorEffectBase = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cursorEffect = new CursorThunderEffect(canvasRef.current);
    cursorEffect.init();
    return () => {
      cursorEffect.destroy();
    };
  }, []);

  return (
    <div className="cursor-effect">
      <canvas ref={canvasRef} className="w-screen h-screen"></canvas>
    </div>
  );
};

export const CursorEffect = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{isClient ? createPortal(<CursorEffectBase />, document.body) : null}</>;
};
