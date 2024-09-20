'use client';

import { Header } from '@/components/header';
import { LenisWrapper } from '@/components/lenis';
import { AnimatePresence, motion, useAnimationControls, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const layoutVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export default function LandngPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const constrols = useAnimationControls();

  useEffect(() => {
    setTimeout(() => {
      constrols.start('visible');
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LenisWrapper>
      <AnimatePresence>
        <motion.div
          key={pathname}
          variants={layoutVariants}
          initial="hidden"
          animate={constrols}
          exit="hidden"
          style={{ position: 'relative' }}
        >
          <Header />
          {children}
        </motion.div>
      </AnimatePresence>
    </LenisWrapper>
  );
}
