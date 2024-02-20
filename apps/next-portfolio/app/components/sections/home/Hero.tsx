'use client';
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@js-bossdev/components';
import { PAGE_PATH } from '../../../lib/constants';
import Link from 'next/link';
import AnimatedLetters from '../../animated/AnimatedLetters';

const Hero = () => {
  // h-[calc(100vh-52px)]
  // h-screen
  return (
    <>
      <div className="relative bg-slate-0 text-slate-900 mt-40">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col text-center items-center container">
            <h1 className="text-[10vw] md:text-[5vw] font-bold">THANAWAT.K</h1>
            <h2 className="text-xs md:text-lg">
              SOFTWARE ENGINEER, FRONT END & MINI BACK END.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
