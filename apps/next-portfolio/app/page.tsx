import About from './components/sections/home/About';
import Hero from './components/sections/home/Hero';
import Worked from './components/sections/home/Worked';

export default async function Index() {
  return (
    <>
    
      <Hero />
      <About />
      <Worked />
    </>
  );
}
