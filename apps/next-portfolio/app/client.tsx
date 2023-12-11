'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

// Client wraps any client/rsc components with AnimatePresence
export default function Client({ children }: { children: ReactNode }) {
  // const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      {/* <motion.div key={pathname}>{children}</motion.div> */}
      {children}
    </AnimatePresence>
  );
}
