const Expertise = () => {
  return (
    <>
      <div className="container mt-20">
        <h3 className="text-2xl md:text-3xl font-bold">Expertise</h3>
        <div className="grid grid-rows-2 gap-4 pt-4 sm:p-4">
          <div className="flex flex-col gap-1 text-sm md:text-base">
            <div className="text-xl font-bold">Software Engineer</div>
            <div>
              Web application development, problem-solving.
              <br />
              Experienced in both functional and JavaScript, TypeScript, AWS,
              GCP, CI/CD and etc.
              <br />
              Over 6 years of development experience.
            </div>
          </div>
          <div className="flex flex-col gap-1 text-sm md:text-base">
            <div className="text-xl font-bold">Frontend React, NextJS</div>
            <div>
              A keen eye for design principles and aesthetics and passionate
              about UI/UX.
              <br />
              Development experience in HTML, CSS, JS,{' '}
              <span className="font-bold">React</span>,{' '}
              <span className="font-bold">NextJS</span> and Vue.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
