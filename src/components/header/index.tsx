import React from 'react';
import { NavLink } from './nav-link';
import { motion } from 'framer-motion';

const HEADER_DURATION = 0.3;
const DELAY = 0.05;

export const Header = () => {
  return (
    <motion.header
      variants={{
        hidden: { opacity: 0, visibility: 'hidden' },
        visible: {
          opacity: 1,
          visibility: 'visible',
          transition: { duration: HEADER_DURATION },
        },
      }}
      initial="hidden"
      animate="visible"
      className="bg-background z-[90001] relative text-foreground font-superbold px-2 overflow-hidden site-header"
    >
      <a className="block cursor-pointer">
        <div className="flex items-center justify-between text-[clamp(32px,24.5vw,143px)] leading-[.8]">
          <span>THE</span>
          <span>BLIMP</span>
        </div>
      </a>
      <div className="flex items-center font-mono text-xs uppercase">
        <div className="flex-1">
          <ul className="flex ml-2">
            {navLinks.map((l, i) => (
              <NavLink
                label={l}
                key={`nav-link-${i}`}
                delay={DELAY * i + HEADER_DURATION}
              />
            ))}
          </ul>
        </div>
        <div className="flex-1 flex justify-end">
          <motion.div
            variants={{
              hidden: { y: 50 },
              visible: {
                y: 0,
              },
            }}
            transition={{
              type: 'tween',
              delay: (navLinks.length + 1) * DELAY + HEADER_DURATION,
            }}
          >
            {' Last Updated: '}
            <time dateTime="2024-07-31">31/07/2024</time>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

const navLinks = ['Home', 'Archive', 'Genres', 'Artists', 'Labels', 'Years', 'Locales'];
