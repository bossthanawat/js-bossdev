'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type MainLayoutProps = {
  children?: ReactNode;
};

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default MainLayout;
