import { useScroll, UseScrollOptions } from 'framer-motion';
import { Fragment, RefObject, useMemo } from 'react';
import { Char } from './char';

export const StaggerFadeText: React.FC<
  React.HTMLProps<HTMLDivElement> & {
    text: string;
    targetRef: RefObject<HTMLDivElement>;
    scrollOffset: UseScrollOptions['offset'];
    startDevider?: number;
  }
> = ({ text, targetRef, scrollOffset, startDevider = 1, ...otherProps }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: scrollOffset,
    layoutEffect: false,
  });

  const allChars = useMemo(() => text.split(''), [text]);

  return (
    <div {...otherProps}>
      {allChars.map((char, i) => {
        if (char === ' ') return <Fragment key={i}>&nbsp;</Fragment>;
        if (char === '\n') return <br key={i} />;
        const len = allChars.length;
        const start = i / len;
        const end = start + 1 / len;
        return (
          <Char
            key={i}
            progress={scrollYProgress}
            range={[start / startDevider, Math.min(end + 100 / len, 1)]}
          >
            {char}
          </Char>
        );
      })}
    </div>
  );
};
