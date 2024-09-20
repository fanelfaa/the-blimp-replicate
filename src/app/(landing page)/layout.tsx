'use client';

import { Header } from '@/components/header';
import { LenisWrapper } from '@/components/lenis';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function LandngPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <LenisWrapper>
      <AnimatePresence>
        <motion.div
          key={pathname}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3 } },
          }}
          initial="hidden"
          animate="visible"
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
