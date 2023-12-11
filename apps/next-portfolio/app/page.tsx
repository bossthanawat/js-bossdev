import Client from './about/client';
import Chat from './components/sections/home/Chat';
import Hero from './components/sections/home/Hero';
import { motion } from 'framer-motion';

export default async function Index() {
  return (
    <>
      <Hero />
      <Chat />
    </>
  );
}
