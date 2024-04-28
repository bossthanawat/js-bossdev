const About = () => {
  return (
    <>
      <div className="container pt-8">
        <div className="text-xl font-bold">About Me</div>
        <div className="mt-4">
          Hi, my name is name is Thanawat Kittichaikarn.
        </div>
        <div className="max-w-xl">
          Experienced front-end developer and software engineer with a focus on
          creating accessible web products. Proficient in React and dedicated to
          crafting visually appealing and user-friendly interfaces.
        </div>
        <div className="mt-2 mb-1 font-medium">Skill:</div>
        <li>Front-End Development: React, Next.js</li>
        <li>
          Software Engineering: Web application development, problem-solving
        </li>
        <li>UI/UX Design: A keen eye for design principles and aesthetics</li>

        <div className="mt-2 mb-1 font-medium">
          Here are a few technologies I’ve been working with recently:
        </div>
        <div className="grid sm:grid-cols-[repeat(1,minmax(140px,200px))] list-disc">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>NestJS</li>
        </div>

        <div className="grid md:grid-cols-3 gap-y-2 mt-2 text-gray-700">
          <div>
            <div className="font-medium">Libraries</div>
            <li>React Query</li>
            <li>Apollo GraphQL</li>
            <li>Langchain.js</li>
            <li>Jest</li>
            <li>Nx</li>
            <li>Framer motion</li>
          </div>
          <div>
            <div className="font-medium">UI library & CSS Utility</div>
            <li>Mui</li>
            <li>Tailwind</li>
            <li>Antd</li>
            <li>Headlessui</li>
          </div>
          <div>
            <div className="font-medium">Tools & Platforms</div>
            <li>AWS</li>
            <li>GCP</li>
            <li>Git</li>
            <li>Figma</li>
            <li>Docker</li>
            <li>Storybook</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
