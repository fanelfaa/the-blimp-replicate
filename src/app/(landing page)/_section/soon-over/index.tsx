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
    <motion.section
      className="bg-foreground relative"
      ref={containerRef}
      style={{ y, zIndex: 5 }}
    >
      <ImageBabaluma className="w-full max-w-full h-auto" />
      <div className="flex items-center w-full h-[92px]">
        <div className="flex justify-between items-baseline font-mono text-background uppercase text-xs w-full">
          <div
            className="crops-h crops-h--left-only ml-[10px]"
            style={{
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
            className="crops-h crops-h--right-only mr-[10px]"
            style={{
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
