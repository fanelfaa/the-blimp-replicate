import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from 'lenis';
import { useRef } from 'react';

export const BackToTop = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end 0.8'],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-60%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const bgColor = useTransform(scrollYProgress, [0.3, 1], ['#121212', '#c1c1bd']);

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
      style={{ zIndex: 4 }}
      ref={containerRef}
    >
      <motion.button
        className="p-[100px] w-full animate-blink"
        style={{ backgroundColor: bgColor, y, opacity }}
        onClick={handleScrollToTop}
      >
        <span className="crops-h uppercase font-mono text-xs text-background">
          Back to top
        </span>
      </motion.button>
    </motion.section>
  );
};
