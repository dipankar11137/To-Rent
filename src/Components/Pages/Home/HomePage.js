import React, { useState } from 'react';

const HomePage = () => {
  const [category, setCategory] = useState('');
  const catas = ['Family', ' Bachelor', 'Sublet', 'office'];
  return (
    <div className="mx-20 shadow-red-500 shadow-r-lg">
      <div className="grid grid-cols-12">
        <div className="col-span-2  mt-10 pr-4 border-r-2 ">
          <h1
            onClick={() => setCategory('Home')}
            className={
              category === 'Home'
                ? ' text-primary  font-semibold text-2xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 mt-2'
                : ' font-semibold text-2xl cursor-pointer mt-2 mt-2'
            }
          >
            Home
          </h1>
          <h1
            onClick={() => setCategory('Family')}
            className={
              category === 'Family'
                ? ' text-primary  font-semibold text-2xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 mt-2'
                : ' font-semibold text-2xl cursor-pointer mt-2 mt-2'
            }
          >
            Family
          </h1>
          <h1
            onClick={() => setCategory('Bachelor')}
            className={
              category === 'Bachelor'
                ? ' text-primary  font-semibold text-2xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2'
                : ' font-semibold text-2xl cursor-pointer mt-2'
            }
          >
            Bachelor
          </h1>
          <h1
            onClick={() => setCategory('Sublet')}
            className={
              category === 'Sublet'
                ? ' text-primary  font-semibold text-2xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2'
                : ' font-semibold text-2xl cursor-pointer mt-2'
            }
          >
            Sublet
          </h1>
          <h1
            onClick={() => setCategory('Office')}
            className={
              category === 'Office'
                ? ' text-primary  font-semibold text-2xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2'
                : ' font-semibold text-2xl cursor-pointer mt-2'
            }
          >
            Office
          </h1>
          <h1
            onClick={() => setCategory('Hostel')}
            className={
              category === 'Hostel'
                ? ' text-primary  font-semibold text-2xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2'
                : ' font-semibold text-2xl cursor-pointer mt-2'
            }
          >
            Hostel
          </h1>
        </div>
        <div className="col-span-10  w-full pl-10">page </div>
      </div>
    </div>
  );
};

export default HomePage;
