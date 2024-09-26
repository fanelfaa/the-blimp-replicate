import {
  easeOut,
  useScroll,
  useSpring,
  useTransform,
  motion,
  UseScrollOptions,
} from 'framer-motion';
import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';

export const SpreadChar = ({
  children,
  isFirst,
  targetRef,
  offset = ['-160% end', 'end start'],
}: {
  children: ReactNode;
  isFirst?: boolean;
  targetRef?: RefObject<HTMLDivElement>;
  offset?: UseScrollOptions['offset'];
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [baseX, setBaseX] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset,
  });

  const x = useTransform(scrollYProgress, [0, 0.9], [isFirst ? 0 : -baseX, 0], {
    ease: easeOut,
  });

  const xSpring = useSpring(x, { stiffness: 600, damping: 60 });

  useEffect(() => {
    function getBaseX() {
      if (ref.current) {
        const { x } = ref.current.getBoundingClientRect();
        setBaseX(x);
      }
    }
    getBaseX();
    document.addEventListener('resize', getBaseX);
    return () => {
      document.removeEventListener('resize', getBaseX);
    };
  }, []);

  return (
    <span ref={ref}>
      <motion.div style={{ x: xSpring, willChange: 'transform' }}>{children}</motion.div>
    </span>
  );
};
