'use client';

import { motion, Variants } from 'framer-motion';

import React from 'react';
import 'lenis/dist/lenis.css';
import { PostCard } from '@/components/post-card';

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export default function Home() {
  return (
    <motion.main variants={pageVariants}>
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
                key={i}
                style={{ gridArea: i === 0 ? '1/1/3/3' : undefined }}
                lead="IN THE RED"
                title="Alan Vega – Insurrection"
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
