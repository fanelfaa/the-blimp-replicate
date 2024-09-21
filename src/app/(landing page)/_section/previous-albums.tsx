import { IconThunder } from '@/components/icons';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

const albumsVariants: Variants = {
  hidden: { opacity: 0, y: 100, visibility: 'hidden' },
  visible: {
    opacity: 1,
    y: 0,
    visibility: 'visible',
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const albumItemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const PreviousAlbums = () => {
  const targetScrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetScrollRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const albumsY = useTransform(scrollYProgress, [0, 0.6], [0, -200]);

  return (
    <>
      <div className="sticky top-0 mt-20">
        <section
          style={{
            padding: '290px 10px 40px',
            height: 'calc(100vh + 5px)',
          }}
          className="bg-background flex flex-col text-foreground font-mono text-xs overflow-hidden relative"
        >
          <h2 className="flex gap-x-2 items-center uppercase lead-1 absolute top-9">
            <IconThunder style={{ marginRight: 10 }} />
            {' Previous Albums '}
          </h2>
          <div className="grid grid-cols-12 items-center flex-1">
            <div className="col-span-4 uppercase">
              <motion.div className="flex flex-col" style={{ y: titleY }}>
                <div>Latest Entries</div>
                <h2 className="display-3 font-display">
                  Explore
                  <br />
                  {'the '}
                  <a className="animate-blink cursor-pointer">archive</a>
                </h2>
              </motion.div>
            </div>
            <motion.div className="col-span-8" style={{ y: albumsY }}>
              <header className="grid grid-cols-12 mb-[100px]">
                <div className="col-span-4">
                  <span className="crops-h crops-h-w">{' artist + title'}</span>
                </div>
                <div className="col-span-3 col-start-6">
                  <span className="crops-h crops-h-w">genre</span>
                </div>
                <div className="col-span-2 col-start-10">
                  <span className="crops-h crops-h-w">label</span>
                </div>
              </header>
              <motion.ul
                className="uppercase"
                variants={albumsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {Array.from(Array(23).keys()).map((i) => (
                  <motion.li key={'prev-album-' + i} variants={albumItemVariants}>
                    <a
                      className="grid grid-cols-12 relative animate-blink"
                      style={{ lineHeight: '18px' }}
                    >
                      <div className="absolute -left-8">
                        <span>591</span>
                      </div>
                      <div className="col-span-4">
                        <span className="h-w">
                          {i % 3 === 0 || i % 5 === 0
                            ? 'King Gizzard & The Lizard Wizard – The Silver Cord'
                            : 'The Conformists – Midwestless'}
                        </span>
                      </div>
                      <div className="col-span-3 col-start-6">
                        <span className="h-w">Indie / Punk / Alternative</span>
                      </div>
                      <div className="col-span-2 col-start-10">
                        <span className="h-w">Computer Students</span>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>
      </div>
      <div ref={targetScrollRef} className="target h-10"></div>
    </>
  );
};
