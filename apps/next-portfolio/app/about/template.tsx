'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';

type MainLayoutProps = {
  children?: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <motion.main
        initial={{ opacity: 0, filter: 'blur(5px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ type: 'linear', duration: 0.5 }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default MainLayout;
