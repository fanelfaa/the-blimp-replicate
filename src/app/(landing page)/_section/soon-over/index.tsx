import { useRef } from 'react';
import { ImageBabaluma } from './image-babaluma';
import { useScroll, motion, useTransform } from 'framer-motion';

export const SoonOver = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '0%']);

  return (
    <motion.section className="bg-foreground relative" ref={containerRef} style={{ y }}>
      <ImageBabaluma className="w-full max-w-full h-auto" />
      <div className="flex items-center w-full h-[92px]">
        <div className="flex justify-between items-baseline font-mono text-background uppercase text-xs w-full">
          <div
            className="crops-h ml-[10px]"
            style={{
              backgroundSize: '16px 1px, 1px 16px, 0 1px, 0 0',
              height: 'calc(100% + 5px)',
            }}
          >
            non-rigid
          </div>
          <div className="text-center flex-1">
            no internal structural frameworks. runs on helium.
            <br />
            an observation platform.
          </div>
          <div
            className="crops-h mr-[10px]"
            style={{
              backgroundSize: '0, 0, 0, 0, 16px 1px, 1px 16px',
              height: 'calc(100% + 5px)',
            }}
          >
            transmissions
          </div>
        </div>
      </div>
    </motion.section>
  );
};
