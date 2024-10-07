import { IconThunderArrow } from '@/components/icons';
import { SpreadChar } from '@/components/spread-char';
import { StaggerFadeText } from '@/components/stagger-fade-text';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { MouseEventHandler, useRef } from 'react';
import { PostCard } from './post-card';
import { randomInt } from 'es-toolkit';

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

const fgColors = ['#d6ccc0', '#2a375c', '#555a72', '#d4cbbb'];
const bgColors = ['#c2bdb1', '#67687c', '#63697e', '#e4d8be'];

export const AlbumOfTheWeek = () => {
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const postcardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: endRef,
    offset: ['start end', 'end start'],
  });

  const yPostCard = useTransform(scrollYProgress, [0, 0.3], [0, -350]);
  const yPostCardSpring = useSpring(yPostCard, { stiffness: 600, damping: 60 });

  const onMouseMove: MouseEventHandler<HTMLDivElement> = () => {
    if (containerRef.current && postcardRef.current) {
      containerRef.current.style.backgroundColor = bgColors[randomInt(3)];
      const fgColor = fgColors[randomInt(3)];
      containerRef.current.style.color = fgColor;
      postcardRef.current.style.color = fgColor;
    }
  };

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    if (containerRef.current && postcardRef.current) {
      containerRef.current.style.backgroundColor = '#b3b2ae';
      containerRef.current.style.color = '#121212';
      postcardRef.current.style.color = 'white';
    }
  };

  return (
    <>
      <div ref={startRef} className="h-10 pointer-events-none" />
      <div className="bg-[#b3b2ae] sticky top-0 h-screen" ref={containerRef}>
        <section className="uppercase relative h-full">
          <h2 className="font-display display-hero mb-[20vh] px-3">
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
                <div className="text-xs uppercase absolute bottom-0 left-[150%] w-[350px] translate-y-full">
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
            className="font-mono !text-background lead-1 max-w-[350px] absolute"
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
            <span className="lead-1 uppercase font-mono">Explore</span>
            <IconThunderArrow className="-rotate-90 w-6 ml-4" />
          </div>
          <div className="grid grid-cols-12">
            <motion.div className="col-span-6 col-start-4" style={{ y: yPostCardSpring }}>
              <PostCard
                lead="IN THE RED"
                title="Alan Vega – Insurrection"
                genres={['ELECTRONICS']}
                className="w-[40vw] mx-auto"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                ref={postcardRef}
              />
            </motion.div>
          </div>
        </section>
      </div>
      <div style={{ height: 200 }} className="pointer-events-none" ref={endRef} />
    </>
  );
};
