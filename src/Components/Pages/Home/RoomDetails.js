import React from 'react';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IoLocationSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import ImageView from '../ImageView';
import BookModal from './HappyClient/BookModal';

const RoomDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  return (
    <div className="md:mx-36 mt-10 bg-green-50 pb-2">
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
          <div className="flex justify-between pr-2 mt-10 text-lg">
            <h1>Contact : 017257985145</h1>
            <a
              target="blank"
              className="text-primary underline font-semibold flex items-center"
              href="https://maps.app.goo.gl/ijoYzpeV6Wfvtydj8"
            >
              <IoLocationSharp className="mr-2 animate-bounce text-lg" /> Live
              Location
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-12">
        <div className="col-span-8 pl-2">
          <div className="text-lg font-semibold pl-5">
            <p>Bedroom : 3</p>
            <p>Bathroom : 2</p>
            <p>Balcony : </p>
            <p>Nearest Hospital : Akkas Hospital</p>
            <p>Nearest School : Akkash School</p>
            <p>Nearest Supermarket : Akkas Market</p>
          </div>
          <h1 className="text-3xl mt-3">
            <span className="underline">Description</span> :{' '}
          </h1>
          <p className="pr-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            distinctio fugit vero cum dolores, illo rerum commodi alias at ea
            ratione minima ducimus perspiciatis nobis obcaecati ipsam, porro
            velit illum. Repellendus, rem? Dignissimos, provident perspiciatis
            repudiandae odit quae a ipsam nihil possimus id ipsa totam non
            fugit! Nesciunt molestias quaerat voluptatum dignissimos! Odio
            exercitationem, eligendi voluptatum sint aspernatur quasi corporis,
            ratione ipsum sit officia tenetur atque explicabo! Hic, ducimus.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleBack}
            className="btn btn-primary ml-40 text-white"
          >
            {' '}
            <FaArrowLeft className="mr-3" />
            Back to Home
          </button>
        </div>
      </div>
      <div className="mt-10">
        {/* <button className="btn btn-primary w-full text-white">Book Now</button> */}
        <label
          htmlFor="my_modal_6"
          className="btn btn-primary w-full text-white"
        >
          Book Now
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <BookModal />
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
