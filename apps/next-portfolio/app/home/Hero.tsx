import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@js-bossdev/components";

const Hero = () => {

  return (
    <>
      <div className="container">
        <h2 className="pt-12 text-2xl font-medium lg:text-4xl">
          Hi I&apos;m
        </h2>
        <FullName />
        <p className="font-normal text-gray-500">&lt;Software Engineer &bull; Front-End Developer&gt;</p>
      </div>
    </>
  );
}

export default Hero;


const FullName = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <h1 className="text-4xl font-medium lg:text-5xl text-start">Boss Thanawat</h1>
        </TooltipTrigger>
        <TooltipContent>
          <p>Thanawat Kittichaikarn</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>)
}