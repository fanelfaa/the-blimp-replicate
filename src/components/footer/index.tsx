import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']);
  return (
    <footer
      className="text-foreground uppercase relative bg-background"
      style={{
        padding: '2vh 0 3vh',
      }}
      ref={ref}
    >
      <motion.a className="block cursor-pointer mb-5 px-2.5" style={{ y }}>
        <div className="flex items-center justify-between text-[clamp(32px,24.5vw,143px)] leading-[.8]">
          <span>THE</span>
          <span>BLIMP</span>
        </div>
      </motion.a>
      <motion.div className="flex justify-between lead-1 font-mono px-5" style={{ y }}>
        <div className="relative crops-h crops-h-w">
          <span>dev & content:</span>
          <a className="lowercase">yannis yannakopoulos</a>
        </div>
        <div className="relative crops-h crops-h-w">
          <span>design & art direction:</span>
          <a className="lowercase">isabel moranta</a>
        </div>
      </motion.div>
    </footer>
  );
};
