import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import contact from '../../../../Images/Contact/contact.png';

const Contact = () => {
  return (
    <div className="bg-gradient-to-t bg-blue-100 text-black mt-36">
      <div className=" mx-20 grid grid-cols-3 ">
        <div className="p-4 col-span-2">
          <h1 className="py-4 text-4xl font-bold">
            Can't find the service you want? Contact us 24/6 with 16216 ...
          </h1>
          <div className="flex">
            <button className="buttonStyle py-4 px-8 hover:bg-primary hover:text-white text-2xl rounded-xl border-4 border-primary ml-52 mt-5">
              Request To Contact
            </button>
            <button className="flex py-4 px-8 hover:bg-primary  hover:text-white text-3xl rounded-xl border-4 border-primary ml-14 mt-5">
              <FaPhoneAlt className="mt-1 animate-bounce " />
              <span className="ml-3">16216</span>
            </button>
          </div>
        </div>
        <div className="">
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            style={{ marginTop: '-120px' }}
            className="h-96"
            src={contact}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
