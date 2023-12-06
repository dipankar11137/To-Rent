import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IoLocationSharp } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import ImageView from '../ImageView';
import BookModal from './HappyClient/BookModal';

const RoomDetails = () => {
  const { id } = useParams();
  const [flat, setFlat] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/flat/${id}`)
      .then(res => res.json())
      .then(data => setFlat(data));
  }, [id]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  return (
    <div className="md:mx-36 mt-10 bg-green-50 pb-2">
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <ImageView flat={flat} />
        </div>
        <div className="col-span-5 ml-20 mt-10">
          <div>
            <h2 className="text-4xl font-bold">FAMILY </h2>
            <p>{flat?.address}</p>
            <p className="mt-2 flex items-center">
              <ImCross className="text-sm text-red-700 mr-2" />
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
            <p className="mt-5">
              Size : <span className="font-semibold">2000 Square Feet</span>
            </p>
            <p>
              Rent : <span className="font-semibold">12000 Taka</span>
            </p>
          </div>
          <div className="flex justify-between pr-2 mt-10 text-lg">
            <h1>Contact : 017584612254</h1>
            <a
              target="blank"
              className="text-primary underline font-semibold flex items-center"
              href="https://maps.app.goo.gl/CJi6Tk4to9fXhP5U9"
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
            <p>Bedroom : 5</p>
            <p>Bathroom : 3</p>
            <p>Balcony : 2</p>
            <a
              target="blank"
              className="text-green-600 underline font-semibold flex items-center"
              href="https://maps.app.goo.gl/CJi6Tk4to9fXhP5U9"
            >
              <IoLocationSharp className="mr-2 animate-bounce text-lg" />{' '}
              Nearest Hospital
            </a>
            <a
              target="blank"
              className="text-blue-500 underline font-semibold flex items-center"
              href="https://maps.app.goo.gl/CJi6Tk4to9fXhP5U9"
            >
              <IoLocationSharp className="mr-2 animate-bounce text-lg" />
              Nearest School
            </a>
            <a
              target="blank"
              className="text-red-600 underline font-semibold flex items-center"
              href="https://maps.app.goo.gl/CJi6Tk4to9fXhP5U9"
            >
              <IoLocationSharp className="mr-2 animate-bounce text-lg" />{' '}
              Nearest Supermarket
            </a>
          </div>
          <h1 className="text-3xl mt-3">
            <span className="underline">Description</span> :{' '}
          </h1>
          <p className="pr-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            facere, eaque quaerat minima praesentium autem est distinctio ut
            fugit nostrum hic vel, commodi illo voluptas fuga quas sit
            asperiores vitae illum ipsam, quidem accusamus laudantium pariatur.
            Nisi temporibus quaerat recusandae?
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
          <BookModal flat={flat} />
        </div>
      </div>
    </div>
    // <div className="md:mx-36 mt-10 bg-green-50 pb-2">
    //   <div className="grid grid-cols-12">
    //     <div className="col-span-7">
    //       <ImageView flat={flat} />
    //     </div>
    //     <div className="col-span-5 ml-20 mt-10">
    //       <div>
    //         <h2 className="text-4xl font-bold">{flat?.category} </h2>
    //         <p>{flat?.address}</p>
    //         <p className="mt-2 flex items-center">
    //           {flat?.gas ? (
    //             <FaCheck className="mr-2 text-green-600" />
    //           ) : (
    //             <ImCross className="text-sm text-red-700 mr-2" />
    //           )}
    //           Gas
    //         </p>
    //         <p className="flex items-center">
    //           {flat?.lift ? (
    //             <FaCheck className="mr-2 text-green-600" />
    //           ) : (
    //             <ImCross className="text-sm text-red-700 mr-2" />
    //           )}
    //           Lift
    //         </p>
    //         <p className="flex items-center">
    //           {flat?.current ? (
    //             <FaCheck className="mr-2 text-green-600" />
    //           ) : (
    //             <ImCross className="text-sm text-red-700 mr-2" />
    //           )}
    //           Current
    //         </p>
    //         <p className="flex items-center">
    //           {flat?.water ? (
    //             <FaCheck className="mr-2 text-green-600" />
    //           ) : (
    //             <ImCross className="text-sm text-red-700 mr-2" />
    //           )}
    //           Water
    //         </p>
    //         <p className="mt-5">
    //           Size :{' '}
    //           <span className="font-semibold">{flat?.size} Square Feet</span>
    //         </p>
    //         <p>
    //           Rent : <span className="font-semibold">{flat?.rent} Taka</span>
    //         </p>
    //       </div>
    //       <div className="flex justify-between pr-2 mt-10 text-lg">
    //         <h1>Contact : {flat?.number}</h1>
    //         <a
    //           target="blank"
    //           className="text-primary underline font-semibold flex items-center"
    //           href={flat?.location}
    //         >
    //           <IoLocationSharp className="mr-2 animate-bounce text-lg" /> Live
    //           Location
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-5 grid grid-cols-12">
    //     <div className="col-span-8 pl-2">
    //       <div className="text-lg font-semibold pl-5">
    //         <p>Bedroom : {flat?.bedroom}</p>
    //         <p>Bathroom : {flat?.bathroom}</p>
    //         <p>Balcony : {flat?.balcony}</p>
    //         <a
    //           target="blank"
    //           className="text-green-600 underline font-semibold flex items-center"
    //           href={flat?.nHospital}
    //         >
    //           <IoLocationSharp className="mr-2 animate-bounce text-lg" />{' '}
    //           Nearest Hospital
    //         </a>
    //         <a
    //           target="blank"
    //           className="text-blue-500 underline font-semibold flex items-center"
    //           href={flat?.nSchool}
    //         >
    //           <IoLocationSharp className="mr-2 animate-bounce text-lg" />
    //           Nearest School
    //         </a>
    //         <a
    //           target="blank"
    //           className="text-red-600 underline font-semibold flex items-center"
    //           href={flat?.nMarket}
    //         >
    //           <IoLocationSharp className="mr-2 animate-bounce text-lg" />{' '}
    //           Nearest Supermarket
    //         </a>
    //       </div>
    //       <h1 className="text-3xl mt-3">
    //         <span className="underline">Description</span> :{' '}
    //       </h1>
    //       <p className="pr-3">{flat?.description}</p>
    //     </div>
    //     <div className="flex items-center justify-center">
    //       <button
    //         onClick={handleBack}
    //         className="btn btn-primary ml-40 text-white"
    //       >
    //         {' '}
    //         <FaArrowLeft className="mr-3" />
    //         Back to Home
    //       </button>
    //     </div>
    //   </div>
    //   <div className="mt-10">
    //     {/* <button className="btn btn-primary w-full text-white">Book Now</button> */}
    //     <label
    //       htmlFor="my_modal_6"
    //       className="btn btn-primary w-full text-white"
    //     >
    //       Book Now
    //     </label>

    //     {/* Put this part before </body> tag */}
    //     <input type="checkbox" id="my_modal_6" className="modal-toggle" />
    //     <div className="modal" role="dialog">
    //       <BookModal flat={flat} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default RoomDetails;
