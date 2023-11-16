import React from 'react';

const HomePage = () => {
  return (
    <div className='mx-20 grid grid-cols-12'>
      <div className='col-span-2 border-r-2 border-black'>
        <button>Family</button>
        <button>Bachelor</button>
      </div>
      <div className='col-span-10  w-full pl-10'>page </div>
    </div>
  );
};

export default HomePage;