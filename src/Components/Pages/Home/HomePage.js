import React, { useEffect, useState } from 'react';
import {
  FaBlind,
  FaHeading,
  FaHome,
  FaUniversity,
  FaUserFriends,
} from 'react-icons/fa';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import RoomCard from './RoomCard';

const HomePage = () => {
  const [category, setCategory] = useState('');
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/flats')
      .then(res => res.json())
      .then(data => setFlats(data));
  }, [flats]);
  return (
    <div className="mx-20 shadow-red-500 shadow-r-lg">
      <div className="grid grid-cols-12">
        <div className="col-span-2  mt-10 pr-4 border-r-2 ">
          <h1
            onClick={() => setCategory('Home')}
            className={
              category === 'Home'
                ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center bg-white'
                : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
            }
          >
            <FaHome className="mr-3" /> Home
          </h1>
          <h1
            onClick={() => setCategory('Family')}
            className={
              category === 'Family'
                ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center bg-white'
                : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
            }
          >
            <MdOutlineFamilyRestroom className="mr-3" />
            Family
          </h1>
          <h1
            onClick={() => setCategory('Bachelor')}
            className={
              category === 'Bachelor'
                ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center bg-white'
                : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
            }
          >
            <FaBlind className="mr-3" />
            Bachelor
          </h1>
          <h1
            onClick={() => setCategory('Sublet')}
            className={
              category === 'Sublet'
                ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center bg-white'
                : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
            }
          >
            <FaUserFriends className="mr-3" /> Sublet
          </h1>
          <h1
            onClick={() => setCategory('Office')}
            className={
              category === 'Office'
                ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center  bg-white'
                : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
            }
          >
            <FaUniversity className="mr-3" /> Office
          </h1>
          <h1
            onClick={() => setCategory('Hostel')}
            className={
              category === 'Hostel'
                ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center bg-white'
                : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
            }
          >
            <FaHeading className="mr-3" /> Hostel
          </h1>

          <h1 className="text-3xl my-3 font-bold uppercase underline text-blue-700">
            Area
          </h1>
          <h1
            onClick={() => setCategory('Dhaka')}
            className={
              category === 'Dhaka'
                ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase  bg-white'
                : ' font-semibold text-xl cursor-pointer mt-2 uppercase'
            }
          >
            Dhaka
          </h1>
          <h1
            onClick={() => setCategory('Barishal')}
            className={
              category === 'Barishal'
                ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase  bg-white'
                : ' font-semibold text-xl cursor-pointer mt-2 uppercase'
            }
          >
            Barishal
          </h1>
          <h1
            onClick={() => setCategory('Khulna')}
            className={
              category === 'Khulna'
                ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase bg-white'
                : ' font-semibold text-xl cursor-pointer mt-2 uppercase'
            }
          >
            Khulna
          </h1>
          <h1
            onClick={() => setCategory('Sylhet')}
            className={
              category === 'Sylhet'
                ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase bg-white'
                : ' font-semibold text-xl cursor-pointer mt-2 uppercase'
            }
          >
            Sylhet
          </h1>
        </div>
        <div className="col-span-10  w-full pl-10 mt-5">
          <div className="grid grid-cols-2 gap-10 ">
            {flats.map(flat => (
              <RoomCard key={flat._id} flat={flat}></RoomCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
