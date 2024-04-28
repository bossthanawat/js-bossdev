'use client';

import Marquee from 'react-fast-marquee';

const UnderConstruction = () => {
  return (
    <>
      <div className="w-full bg-yellow-400 text-gray-500">
        <Marquee autoFill speed={20}>
          <span className='mr-40'>🚧Under Construction: Work in progress</span>
        </Marquee>
      </div>
    </>
  );
};

export default UnderConstruction;
