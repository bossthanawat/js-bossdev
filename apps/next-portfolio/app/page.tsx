// import AnimatedLetters from './components/animated/AnimatedLetters';
// import Chat from './components/sections/home/Chat';
import Expertise from './components/sections/home/Expertise';
import Hero from './components/sections/home/Hero';

export default async function Index() {
  return (
    <>
      <Hero />
      <Expertise />
      <div className="text-5xl font-bold px-4">
        {/* <AnimatedLetters title="ABOUT" /> */}
      </div>

      {/* <Chat /> */}
    </>
  );
}
