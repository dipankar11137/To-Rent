import React, { useState } from 'react';

const HomePage = () => {
  const [category, setCategory] = useState('');
  return (
    <div className="mx-20 shadow-red-500 shadow-r-lg">
      <div className="grid grid-cols-12">
        <div className="col-span-2  mt-10 pr-4 border-r-2 ">
          <h1
            onClick={() => setCategory('Family')}
            className={
              category === 'Family'
                ? ' text-primary  font-semibold text-2xl border-r-4 border-spacing-6 border-primary cursor-pointer'
                : ' font-semibold text-2xl cursor-pointer'
            }
          >
            Family
          </h1>
          <br />
          <button>Bachelor</button>
          <button>category</button>
        </div>
        <div className="col-span-10  w-full pl-10">page </div>
      </div>
    </div>
  );
};

export default HomePage;
