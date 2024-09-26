'use client';

import { motion, Variants } from 'framer-motion';

import React from 'react';
import 'lenis/dist/lenis.css';
import { HighlightAlbums } from './_section/highlight-albums';
import { PreviousAlbums } from './_section/previous-albums';
import { AlbumOfTheWeek } from './_section/album-of-the-week';
import { SoundtrackForTheDay } from './_section/soundtrack-for-the-day';
import { SoonOver } from './_section/soon-over';
import { BackToTop } from './_section/back-to-top';

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export default function Home() {
  return (
    <motion.main variants={pageVariants}>
      <span id="top-spot"></span>
      <HighlightAlbums />
      <PreviousAlbums />
      <AlbumOfTheWeek />
      <SoundtrackForTheDay />
      <SoonOver />
      <BackToTop />
      <div className="h-screen bg-green-500 sticky top-0"></div>
    </motion.main>
  );
}
