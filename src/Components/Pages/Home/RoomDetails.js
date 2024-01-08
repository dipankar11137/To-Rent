import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaCheck, FaCommentAlt } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IoLocationSharp } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../Share/Navbar';
import ImageView from '../ImageView';
import AddReview from './Add Review/AddReview';
import ShowReview from './Add Review/ShowReview';
import BookModal from './HappyClient/BookModal';

const RoomDetails = () => {
  const { id } = useParams();
  const [flat, setFlat] = useState({});
  const [reviews, setReview] = useState([]);
  const cId = id;

  useEffect(() => {
    fetch(`http://localhost:5000/flat/${id}`)
      .then(res => res.json())
      .then(data => setFlat(data));
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:5000/review/${cId}`)
      .then(res => res.json())
      .then(data => setReview(data));
  }, [reviews, cId]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  const handleRating = () => {
    const reating = [];
  };
  return (
    <div className="bg-slate-900">
      <Navbar />
      <div className="md:mx-36 mt-10 bg-slate-800 rounded-lg pb-2 text-white">
        <div className="grid grid-cols-12">
          <div className="col-span-7 ml-3">
            <ImageView flat={flat} />
          </div>
          <div className="col-span-5 ml-20 mt-10">
            <div>
              <h2 className="text-4xl font-bold">{flat?.category} </h2>
              <p>{flat?.address}</p>
              <p className="font-semibold flex gap-x-2 items-center">
                <FaCalendarAlt className="text-orange-600" /> {flat?.month},{' '}
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
              <p className="mt-5">
                Size :{' '}
                <span className="font-semibold">{flat?.size} Square Feet</span>
              </p>
              <p>
                Rent : <span className="font-semibold">{flat?.rent} Taka</span>
              </p>
            </div>
            <div className="pr-2 mt-10 text-lg mb-4">
              <h1>Contact : {flat?.number}</h1>
              <a
                target="blank"
                className="text-primary underline font-semibold flex items-center border-2 px-2 py-1 rounded-md hover:bg-slate-300 w-[200px] mt-3"
                href={flat?.location}
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
              <p>Bedroom : {flat?.bedroom}</p>
              <p>Bathroom : {flat?.bathroom}</p>
              <p>Balcony : {flat?.balcony}</p>
              <a
                target="blank"
                className="text-green-600 underline font-semibold flex items-center border-2 px-2 py-1 rounded-md hover:bg-slate-300 w-[250px] mt-4"
                href={flat?.nHospital}
              >
                <IoLocationSharp className="mr-2 animate-bounce text-lg " />{' '}
                Nearest Hospital
              </a>
              <a
                target="blank"
                className="text-blue-500 underline font-semibold flex items-center border-2 px-2 py-1 rounded-md hover:bg-lime-300 w-[250px] mt-2"
                href={flat?.nSchool}
              >
                <IoLocationSharp className="mr-2 animate-bounce text-lg" />
                Nearest School
              </a>
              <a
                target="blank"
                className="text-red-600 underline font-semibold flex items-center border-2 px-2 py-1 rounded-md hover:bg-slate-300 w-[250px] mt-2"
                href={flat?.nMarket}
              >
                <IoLocationSharp className="mr-2 animate-bounce text-lg" />{' '}
                Nearest Supermarket
              </a>
            </div>
            <h1 className="text-3xl mt-3">
              <span className="mb-4 font-semibold">Description</span> :{' '}
            </h1>
            <p className="pr-3">{flat?.description}</p>
          </div>
          <div className="  justify-center w-[350px]">
            <p className="text-lime-500 text-xl  font-semibold">
              Previous Customer Review
            </p>
            <div className="border-[2px] border-slate-300 ">
              <div className=" h-[300px] overflow-y-scroll">
                {reviews.map(review => (
                  <ShowReview key={review._id} review={review}></ShowReview>
                ))}
              </div>
              <div className="flex justify-end mr-10 ">
                <div className="w-full  border-t-[2px] mt-2  flex justify-end">
                  <label
                    htmlFor="my_modal_7"
                    className="  flex items-center gap-x-2 cursor-pointer text-xl font-semibold pr-20"
                  >
                    <FaCommentAlt /> Comment
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my_modal_7"
                    className="modal-toggle"
                  />

                  <AddReview id={id} />
                </div>
              </div>
            </div>
            {/* <button onClick={handleBack} className="btn btn-primary  text-white">
            {' '}
            <FaArrowLeft className="mr-3" />
            Back to Home
          </button> */}
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
            <BookModal flat={flat} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
