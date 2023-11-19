const About = () => {
  return (
    <>
      <div id="about" />
      <div className="container pt-8">
        <div className="text-xl font-bold">About Me</div>
        <div className="mt-4">
          Hi, my name is name is Thanawat Kittichaikarn.
        </div>
        <div className="max-w-xl">
          Experienced front-end developer and software engineer with a focus on
          creating accessible web products. Proficient in React and dedicated to
          crafting visually appealing and user-friendly interfaces. Adept at
          merging technical expertise with a passion for aesthetics and
          photography.
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
        </div>

        {/* <div className="my-2 h-0.5 border-t-0 bg-gray-300" /> */}
        <div className="grid md:grid-cols-3 gap-y-2 mt-2 text-gray-700">
          <div>
            <div className="font-medium">Libraries</div>
            <li>React Query</li>
            <li>Apollo GraphQL</li>
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

        <div className="text-xl font-bold mt-4">Where I’ve Worked</div>
        <div className="flex flex-col gap-2 mt-2">
          <div>
            <div className="font-medium">Easy Rice Digital Technology</div>
            <div>Front-End Developer</div>
            <div>Feb 2021 - Present</div>
            <li>
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </li>
            <li>Lead the development of accessible web products</li>
            <li>
              Collaborated with cross-functional teams to deliver high-quality
              and user-centric solutions.
            </li>
          </div>
          <div>
            <div className="font-medium">NTT Global</div>
            <div>Software Engineer</div>
            <div>Nov 2019 - Jan 2021</div>
            <li>
              Developed a web application for managing the production process,
              catering specifically to the needs of Tesco.
            </li>
            <li>Contributed to the design and implementation of interfaces.</li>
            <li>
              Utilized Robotic Process Automation (RPA) to enhance and
              streamline services for clients
            </li>
          </div>
          <div>
            <div className="font-medium">Dimension Data</div>
            <div>Software Engineer</div>
            <div>Jun 2017 - Oct 2019</div>
            <li>PDF generation for the fax system used by banks</li>
            <li>
              implemented Interactive Voice Response (IVR) systems, managing
              various flow logics for user interactions, notably for clients
              such as Agoda.
            </li>
            <li>
              Oversaw and maintained diverse systems based on client products,
              ensuring seamless functionality.
            </li>
          </div>
        </div>

        <div className="text-xl font-bold mt-4 mb-2">Education</div>
        <div>King Mongkut&apos;s Institute of Technology Ladkrabang</div>
        <div>Bachelor&apos;s Degree in Computer Engineering (Information)</div>
        <div>2013 - 2016</div>
      </div>
    </>
  );
};

export default About;
