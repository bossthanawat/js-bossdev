'use client';
import { motion } from 'framer-motion';

const AnimatedLetters = ({
  title = '',
  delayChildren = 0.2,
  staggerChildren = 0.1,
  y = 200,
}) => {
  const banner = {
    animate: {
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };

  const letterAni = {
    initial: { y },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };
  return (
    <>
      <div className="z-50 relative">
        <div className="overflow-hidden">
          <motion.div variants={banner} initial="initial" animate="animate">
            {[...title].map((letter, i) => (
              <motion.span
                key={i}
                variants={letterAni}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AnimatedLetters;
