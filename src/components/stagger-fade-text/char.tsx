import { MotionValue, useTransform, motion, easeInOut } from 'framer-motion';

export const Char: React.FC<
  React.PropsWithChildren<{
    progress: MotionValue<number>;
    range: [number, number];
  }>
> = ({ progress, range, children }) => {
  const opacity = useTransform(progress, range, [0, 1], { ease: easeInOut });
  return (
    <motion.span className="inline-block s-char" style={{ opacity }}>
      {children}
    </motion.span>
  );
};
