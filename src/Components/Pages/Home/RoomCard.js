import React from 'react';
import { FaCalendarAlt, FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import { useNavigate } from 'react-router-dom';

const RoomCard = ({ flat }) => {
  const navigate = useNavigate();
  const handleDetails = id => {
    navigate(`/roomDetails/${id}`);
  };
  return (
    <div className="card card-side bg-white shadow-xl  hover:shadow-lg hover:shadow-red-200  pr-2 ">
      <div className="grid grid-cols-12 ">
        <div className="col-span-7">
          <img
            className="w-[300px] h-[275px]  rounded-l-xl"
            src={flat?.image1}
            alt="flat"
          />
        </div>
        <div className="col-span-5 ml-3">
          <div>
            <h2 className="text-3xl font-bold mt-3">{flat?.category} </h2>
            <p>{flat?.address}</p>
            <p className="font-semibold flex gap-x-2 items-center">
              <FaCalendarAlt className="text-orange-600" /> {flat?.month},{'  '}
              {flat?.year}
            </p>
            <p className="mt-2 flex items-center">
              {flat?.gas ? (
                <FaCheck className="mr-2 text-green-600" />
              ) : (
                <ImCross className="text-sm text-red-700 mr-2" />
              )}
              Gas
            </p>
            <p className="flex items-center">
              {flat?.lift ? (
                <FaCheck className="mr-2 text-green-600" />
              ) : (
                <ImCross className="text-sm text-red-700 mr-2" />
              )}
              Lift
            </p>
            <p className="flex items-center">
              {flat?.current ? (
                <FaCheck className="mr-2 text-green-600" />
              ) : (
                <ImCross className="text-sm text-red-700 mr-2" />
              )}
              Current
            </p>
            <p className="flex items-center">
              {flat?.water ? (
                <FaCheck className="mr-2 text-green-600" />
              ) : (
                <ImCross className="text-sm text-red-700 mr-2" />
              )}
              Water
            </p>
            <p className="mt-2">
              Size :{' '}
              <span className="font-semibold">{flat?.size} Square Feet</span>
            </p>
            <p>
              Rent : <span className="font-semibold">{flat?.rent} Taka</span>
            </p>
          </div>
          <div className="mt-3 flex justify-between pr-2">
            <a
              target="blank"
              className="text-orange-500 underline font-semibold "
              href={flat?.location}
            >
              Live Location
            </a>
            <button
              onClick={() => handleDetails(flat?._id)}
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
