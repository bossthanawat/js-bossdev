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
  return (
    <>
      <div className="relative isolate mt-20 lg:mt-40">
        <div className="container h-full py-4">
          <div className="flex items-center h-full">
            <div className="text-start">
              <h2 className="text-2xl font-medium lg:text-4xl">Hi I&apos;m</h2>
              <FullName />
              <p className="mt-1 text-lg font-normal text-gray-500">
                &lt;Software Engineer &bull; Front-End Developer&gt;
              </p>
              <div className="max-w-xl mt-4">
                Experienced front-end developer and software engineer with a
                focus on creating accessible web products.
              </div>
              <div className="mt-4">
                <Link
                  className="cursor-pointer"
                  href={PAGE_PATH.ABOUT}
                >{`About ->`}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

const FullName = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <h1 className="text-4xl font-bold lg:text-5xl">
            Boss Thanawat
            {/* <AnimatedLetters title="Boss Thanawat" staggerChildren={0.05} delayChildren={0}/> */}
          </h1>
        </TooltipTrigger>
        <TooltipContent>
          <p>Thanawat Kittichaikarn</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
