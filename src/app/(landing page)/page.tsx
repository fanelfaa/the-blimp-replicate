'use client';

import { motion } from 'framer-motion';

import React from 'react';
import 'lenis/dist/lenis.css';
import { PostCard } from '@/components/post-card';

export default function Home() {
  return (
    <motion.main
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.3 } },
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="sticky top-0">
        <section
          style={{
            padding: '50px 10px',
            height: 777,
          }}
          className="bg-bg-light flex flex-col"
        >
          <ul
            style={{
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
            }}
            className="grid gap-5 flex-grow"
          >
            {Array.from(Array(5).keys()).map((i) => (
              <PostCard
                delay={i * 0.05 + 0.3}
                key={i}
                style={{ gridArea: i === 0 ? '1/1/3/3' : undefined }}
                lead="IN THE RED"
                title="ALAN VEGA _ INSURRECTION"
                genres={['ELECTRONICS']}
                big={i === 0}
              />
            ))}
          </ul>
        </section>
      </div>

      <div className="sticky top-0">
        <section
          style={{
            padding: '50px 10px',
            height: '100vh',
          }}
          className="bg-background flex flex-col"
        >
          <ul
            style={{
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
            }}
            className="grid flex-grow"
          ></ul>
        </section>
      </div>
    </motion.main>
  );
}
