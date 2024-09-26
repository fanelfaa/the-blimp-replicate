import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from 'lenis';
import { useRef } from 'react';

export const BackToTop = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);
  const bgColor = useTransform(scrollYProgress, [0, 1], ['#121212', '#c1c1bd']);

  function handleScrollToTop() {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.scrollTo(0);
  }

  return (
    <motion.section
      className="bg-background relative"
      style={{ y, zIndex: 4 }}
      ref={containerRef}
    >
      <motion.button
        className="p-[100px] bg-foreground w-full animate-blink"
        style={{ backgroundColor: bgColor }}
        onClick={handleScrollToTop}
      >
        <span className="crops-h uppercase font-mono text-xs text-background">
          Back to top
        </span>
      </motion.button>
    </motion.section>
  );
};
