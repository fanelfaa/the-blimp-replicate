'use client';

import { CursorEffect } from '@/components/cursor';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { LenisWrapper } from '@/components/lenis';
import { Preloader } from '@/components/preloader';
import { AnimatePresence, motion, useAnimationControls, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

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

  return (
    <>
      <LenisWrapper>
        <AnimatePresence>
          <motion.div
            key={pathname}
            variants={layoutVariants}
            initial="hidden"
            animate={constrols}
            exit="hidden"
            style={{ position: 'relative', isolation: 'isolate' }}
          >
            <Header />
            {children}
            <Footer />
          </motion.div>
        </AnimatePresence>
        <Preloader onFinishAnimation={() => constrols.start('visible')} />
      </LenisWrapper>
      <CursorEffect />
    </>
  );
}
