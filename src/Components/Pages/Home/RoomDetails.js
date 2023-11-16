import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IoLocationSharp } from 'react-icons/io5';
import ImageView from '../ImageView';

const RoomDetails = () => {
  return (
    <div className="md:mx-36 mt-10 bg-green-50 ">
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <ImageView />
        </div>
        <div className="col-span-5 ml-20 mt-10">
          <div>
            <h2 className="text-4xl font-bold">Family </h2>
            <p>Uttara, Dhaka</p>
            <p className="mt-2 flex items-center">
              <FaCheck className="mr-2 text-green-600" />
              Gas
            </p>
            <p className="flex items-center">
              <ImCross className="text-sm text-red-700 mr-2" />
              Lift
            </p>
            <p className="flex items-center">
              <FaCheck className="mr-2 text-green-600" />
              Current
            </p>
            <p className="flex items-center">
              <FaCheck className="mr-2 text-green-600" />
              Water
            </p>
            <p className="mt-2">
              Size : <span className="font-semibold">2000 Square Feet</span>
            </p>
            <p>
              Rent : <span className="font-semibold">10000k</span>
            </p>
          </div>
          <div className="flex justify-between pr-2 mt-10">
            <h1>Contact : 017257985145</h1>
            <a
              target="blank"
              className="text-orange-500 underline font-semibold flex items-center"
              href="https://maps.app.goo.gl/ijoYzpeV6Wfvtydj8"
            >
              <IoLocationSharp className="mr-2 animate-bounce text-lg" /> Live
              Location
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
