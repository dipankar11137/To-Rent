import React from 'react';
import Banner from './Banner';

const HappyClient = () => {
  return (
    <div className="mt-32 text-black mx-20 pb-5   rounded-lg pt-3 pl-4">
      <h1 className="text-2xl font-semibold mt-2">SOME HAPPY FACES</h1>
      <h1 className="text-4xl font-semibold mb-3 mt-3">
        Real happy customers, real stories
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h1 className="text-2xl mt-28">
            Such service platforms are available in other countries. I have
            personally used them when I was abroad. I am very happy that such a
            portal is available here in Bangladesh as well. thank you
          </h1>
        </div>
        <div className="col-span-2">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
