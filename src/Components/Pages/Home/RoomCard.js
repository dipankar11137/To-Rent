import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

const RoomCard = () => {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate('/roomDetails');
  };
  return (
    <div className="card card-side bg-white shadow-xl  hover:shadow-2xl hover:shadow-red-200">
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <img
            className="w-[300px] h-[260px]  rounded-l-xl"
            src="https://www.thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
            alt="Movie"
          />
        </div>
        <div className="col-span-5 ml-3">
          <div>
            <h2 className="text-3xl font-bold">Family </h2>
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
          <div className="mt-3 flex justify-between pr-2">
            <a
              target="blank"
              className="text-orange-500 underline font-semibold "
              href="https://maps.app.goo.gl/ijoYzpeV6Wfvtydj8"
            >
              Live Location
            </a>
            <button
              onClick={handleDetails}
              className="text-white bg-primary px-2 rounded-md"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
