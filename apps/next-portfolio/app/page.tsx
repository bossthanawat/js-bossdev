import Chat from './components/sections/home/Chat';
import Expertise from './components/sections/home/Expertise';
import Hero from './components/sections/home/Hero';

export default async function Index() {
  return (
    <>
      <Hero />
      <Expertise />
      <div className="container mt-20">
        <h3 className="text-xl md:text-3xl font-medium">Mini Q&A</h3>
        <Chat />
      </div>
    </>
  );
}
