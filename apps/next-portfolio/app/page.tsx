import About from "./home/About";
import Hero from "./home/Hero";

export default async function Index() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}