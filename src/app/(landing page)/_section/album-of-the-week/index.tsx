import { IconThunderArrow } from '@/components/icons';
import { StaggerFadeText } from '@/components/stagger-fade-text';
import { cx } from '@/utils/cx';

import { easeOut, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';

const description = `HARVESTMAN, the psych/folk/ambient project
of Neurosis’ Steve Von Till, arises with its
most exploratory and ambitious works to
date, a three-album series titled Triptych,
with each installment coordinated for
release on specifically chosen full moons
this year. The first, Triptych: Part One,
will be released on Von Till’s own Neurot
Recordings on April 23rd with the rising of
the Pink Moon. Triptych: Part One was
recorded and mixed at The Crow’s Nest in
North Idaho by Steve Von Till who creates
the movements using guitars, bass, synths,
percussion, stock tank,…`;

export const AlbumOfTheWeek = () => {
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: endRef,
    offset: ['start end', 'end start'],
  });

  const yPostCard = useTransform(scrollYProgress, [0, 0.3], [0, -350]);
  const yPostCardSpring = useSpring(yPostCard, { stiffness: 600, damping: 60 });

  return (
    <>
      <div ref={startRef} className="h-10 pointer-events-none" />
      <div className="bg-[#b3b2ae] sticky top-0 h-screen" ref={containerRef}>
        <section className="uppercase relative h-full">
          <h2 className="font-display display-hero mb-[20vh] px-3 text-background">
            <span className="flex justify-between">
              {'Album'.split('').map((c, i) => (
                <SpreadChar key={'char' + c + i} isFirst={i === 0} targetRef={startRef}>
                  {c}
                </SpreadChar>
              ))}
            </span>
            <span className="flex justify-between">
              <span>of</span>
              <span className="relative">
                {' the '}
                <div className="text-xs uppercase text-background absolute bottom-0 left-[150%] w-[350px] translate-y-full">
                  <StaggerFadeText
                    text="Week: 39"
                    scrollOffset={['start 0.8', 'start 0.3']}
                    targetRef={containerRef}
                    className="lead-1 font-mono"
                    startDevider={5}
                  />
                  <StaggerFadeText
                    text="23rd sep"
                    scrollOffset={['start 0.8', 'start 0.3']}
                    targetRef={containerRef}
                    startDevider={5}
                    className="display-4"
                  />
                </div>
              </span>
              <span className="flex">
                <IconThunderArrow />
                <span>week</span>
              </span>
            </span>
          </h2>
          <StaggerFadeText
            text={description}
            className="font-mono text-background lead-1 max-w-[350px] absolute"
            style={{
              left: '5.5%',
              top: '22%',
            }}
            scrollOffset={['end 0.7', 'end start']}
            targetRef={startRef}
            startDevider={1.5}
          />
          <div
            className="absolute flex items-center"
            style={{
              left: '10%',
              top: '65%',
            }}
          >
            <span className="lead-1 uppercase font-mono text-background">Explore</span>
            <IconThunderArrow className="-rotate-90 w-6 ml-4" />
          </div>
          <div className="grid grid-cols-12">
            <motion.div className="col-span-6 col-start-4" style={{ y: yPostCardSpring }}>
              <PostCard
                lead="IN THE RED"
                title="Alan Vega – Insurrection"
                genres={['ELECTRONICS']}
                className="w-[40vw] mx-auto"
              />
            </motion.div>
          </div>
        </section>
      </div>
      <div style={{ height: 200 }} className="pointer-events-none" ref={endRef} />
    </>
  );
};

const SpreadChar = ({
  children,
  isFirst,
  targetRef,
}: {
  children: ReactNode;
  isFirst?: boolean;
  targetRef?: RefObject<HTMLDivElement>;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [baseX, setBaseX] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['-160% end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 0.9], [isFirst ? 0 : -baseX, 0], {
    ease: easeOut,
  });

  const xSpring = useSpring(x, { stiffness: 600, damping: 60 });

  useEffect(() => {
    function getX() {
      if (ref.current) {
        const { x } = ref.current.getBoundingClientRect();
        setBaseX(x);
      }
    }
    getX();
    document.addEventListener('resize', getX);
    return () => {
      document.removeEventListener('resize', getX);
    };
  }, []);

  return (
    <span ref={ref}>
      <motion.div style={{ x: xSpring, willChange: 'transform' }}>{children}</motion.div>
    </span>
  );
};

const PostCard: React.FC<
  {
    lead: string;
    title: string;
    big?: boolean;
    genres: string[];
  } & React.HTMLProps<HTMLDivElement>
> = ({ lead, title, big, genres, className, ...otherProps }) => {
  return (
    <article
      className={cx(
        'min-h-[600px] h-full post-card bg-foreground hover:bg-background text-background hover:text-white transition-colors duration-300',
        className,
      )}
      {...otherProps}
    >
      <a className="flex flex-col h-full p-2.5 cursor-pointer crops-f">
        <header>
          <div className="text-xs tracking-wide uppercase font-mono">
            <span>{lead}</span>
          </div>
          <h2
            className={cx(
              'max-w-[350px] uppercase font-superbold',
              big ? 'display-3' : 'display-4',
            )}
          >
            {title}
          </h2>
        </header>
        <footer className="mt-auto flex justify-between items-end">
          <div className="text-xs tracking-wide uppercase font-mono">
            {genres.join(' / ')}
          </div>
          <div className={cx('size-[300px]', 'relative')}>
            <Image
              fill
              src="https://blimp.b-cdn.net/app/uploads/2024/07/a3113517095_10-300x300.jpg.webp"
              alt={title}
              className="bg-neutral-800 size-full"
            />
          </div>
        </footer>
      </a>
    </article>
  );
};
