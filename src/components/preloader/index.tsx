'use client';

import {
  AnimationControls,
  motion,
  useAnimate,
  useAnimationControls,
} from 'framer-motion';
import { images } from './images';
import { useEffect, useId } from 'react';
import Image from 'next/image';
import { delay } from 'es-toolkit';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function Preloader({ onFinishAnimation }: { onFinishAnimation: () => void }) {
  const id = useId();
  const [scope, animate] = useAnimate();
  const imageControls = useAnimationControls();
  useEffect(() => {
    const start = async () => {
      await animate('#images-spot', { opacity: 1 }, { duration: 0.01 });
      await imageControls.start(() => 'visible');
      await delay(500);
      imageControls.start(() => 'exit');
      await delay(1000);
      await animate(scope.current, { opacity: 0 }, { duration: 0.5 });
      await animate(scope.current, { display: 'none' });
      onFinishAnimation();
    };
    start();
  }, [animate, imageControls, onFinishAnimation, scope]);

  return (
    <div className="fixed inset-0 h-screen w-screen z-50" ref={scope}>
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute inset-0 bg-background flex items-center justify-center">
        <div className="relative size-[50px] opacity-0" id="images-spot">
          {images.map((src, i) => (
            <ImageSpread
              src={src}
              translateTo={{
                x: getRandomInt(-50, 50),
                y: getRandomInt(-50, 50),
              }}
              key={id + '-image-' + i}
              controls={imageControls}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const MotionNextImage = motion.create(Image);

function ImageSpread({
  controls,
  src,
  translateTo: { x, y },
  index,
}: {
  src: string;
  translateTo: { x: number; y: number };
  controls: AnimationControls;
  index: number;
}) {
  return (
    <MotionNextImage
      src={src}
      loading="eager"
      width={50}
      height={50}
      alt="Preloader"
      style={{ objectFit: 'cover' }}
      className="absolute inset-0"
      initial="hidden"
      animate={controls}
      custom={index}
      variants={{
        hidden: {
          x: '0vw',
          y: '0vh',
          opacity: 0.5,
        },
        visible: {
          opacity: 1,
          x: x + 'vw',
          y: y + 'vh',
          transition: {
            duration: 1,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            delay: index * 0.005,
            duration: 1,
          },
        },
      }}
    />
  );
}
