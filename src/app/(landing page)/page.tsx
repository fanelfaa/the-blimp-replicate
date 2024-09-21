'use client';

import { motion, Variants } from 'framer-motion';

import React from 'react';
import 'lenis/dist/lenis.css';
import { HighlightAlbums } from './_section/highlight-albums';
import { PreviousAlbums } from './_section/previous-albums';

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export default function Home() {
  return (
    <motion.main variants={pageVariants}>
      <HighlightAlbums />
      <PreviousAlbums />
      <div className="h-screen bg-foreground sticky top-0"></div>
    </motion.main>
  );
}
