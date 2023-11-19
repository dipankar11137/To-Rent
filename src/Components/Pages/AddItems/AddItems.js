import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import ImageToUrl from './ImageToUrl';

const AddItems = () => {
  const [category, setCategory] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [balcony, setBalcony] = useState('');
  const [area, setArea] = useState('');
  const [gas, setGas] = useState(false);
  const [lift, setLift] = useState(false);
  const [current, setCurrent] = useState(false);
  const [water, setWater] = useState(false);
  const [urlToImage, setUrlToImage] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = data => {
    const updateData = { ...data, area, gas, lift, current, water, category };
    console.log(updateData);
    fetch(`http://localhost:5000/flats`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Successfully Add This Flat');
        // reset();
      });
  };
  return (
    <div className="mx-20 pb-10">
      <div className="mx-20 bg-blue-50 rounded-lg p-2 shadow-xl">
        {urlToImage && <ImageToUrl />}
        <h1 className="mt-3 text-center text-3xl font-bold">Add Items</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex  lg:gap-x-14 mt-5">
            <div className="w-[350px] ">
              {/* Name */}
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered h-10 bg-white w-full "
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Phone */}
              <div className="form-control w-full ">
                <input
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="input input-bordered h-10 bg-white w-full "
                  {...register('number', {
                    required: {
                      value: true,
                      message: 'Number is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.number?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.number.message}
                    </span>
                  )}
                </label>
              </div>
              {/* address */}
              <div className="form-control w-full ">
                <textarea
                  type="text"
                  placeholder="Enter Your Address"
                  className="input input-bordered h-14 bg-white w-full  pt-1"
                  {...register('address', {
                    required: {
                      value: true,
                      message: 'Address is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.address?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              {/* size */}
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Enter Flat Size (Square Feet)"
                  className="input input-bordered h-10 bg-white w-full  pt-1"
                  {...register('size', {
                    required: {
                      value: true,
                      message: 'Size is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.size?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.size.message}
                    </span>
                  )}
                </label>
              </div>
              {/* location */}
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Enter Your Location ( From Google Map)"
                  className="input input-bordered h-10 bg-white w-full  pt-1"
                  {...register('location', {
                    required: {
                      value: true,
                      message: 'Location is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.location?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.location.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Nearest Hospital */}
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Enter Nearest Hospital Name"
                  className="input input-bordered h-10 bg-white w-full  pt-1"
                  {...register('nHospital', {
                    required: {
                      value: true,
                      message: 'Nearest Hospital is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.nHospital?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.nHospital.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Nearest School */}
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Enter Nearest School Name"
                  className="input input-bordered h-10 bg-white w-full  pt-1"
                  {...register('nSchool', {
                    required: {
                      value: true,
                      message: 'Nearest School is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.nSchool?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.nSchool.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Nearest Supermarket */}
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Enter Nearest Supermarket Name"
                  className="input input-bordered h-10 bg-white w-full  pt-1"
                  {...register('nMarket', {
                    required: {
                      value: true,
                      message: 'Nearest Supermarket  is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.nMarket?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.nMarket.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Description */}
              <div className="form-control w-full ">
                <textarea
                  type="text"
                  placeholder="Description"
                  className="input input-bordered h-14 bg-white w-full  pt-1"
                  {...register('description', {
                    required: {
                      value: true,
                      message: 'Description is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.description?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className=" w-[300px]">
              {/* Category */}
              <select
                onClick={e => setCategory(e.target.value)}
                className="select select-bordered w-full max-w-xs bg-white h-10 font-semibold text-primary"
              >
                <option disabled selected>
                  Select Your Rent Category
                </option>
                <option className=" text-black">FAMILY</option>
                <option className=" text-black">BACHELOR</option>
                <option className=" text-black">SUBLET</option>
                <option className=" text-black">OFFICE</option>
                <option className=" text-black">HOSTEL</option>
              </select>
              <br />
              {/* Area */}
              <select
                onClick={e => setArea(e.target.value)}
                className="select select-bordered w-full max-w-xs bg-white h-10 font-semibold mt-3 text-primary"
              >
                <option className="text-black" disabled selected>
                  Select Your Area
                </option>
                <option className=" text-black">DHAKA</option>
                <option className=" text-black">BARISHAL</option>
                <option className=" text-black">KHULNA</option>
                <option className=" text-black">SYLHET</option>
              </select>
              <br />
              {/* Bedroom */}
              <select
                onClick={e => setBedroom(e.target.value)}
                className="select select-bordered w-full max-w-xs bg-white h-10 font-semibold mt-3 text-primary"
              >
                <option disabled selected>
                  Select Your Bedroom
                </option>
                <option className=" text-black">1</option>
                <option className=" text-black">2</option>
                <option className=" text-black">3</option>
                <option className=" text-black">4</option>
                <option className=" text-black">5</option>
                <option className=" text-black">6</option>
                <option className=" text-black">7</option>
              </select>
              <br />
              {/* Bathroom */}
              <select
                onClick={e => setBathroom(e.target.value)}
                className="select select-bordered w-full max-w-xs bg-white h-10 font-semibold mt-3 text-primary"
              >
                <option disabled selected>
                  Select Your Bathroom
                </option>
                <option className=" text-black">1</option>
                <option className=" text-black">2</option>
                <option className=" text-black">3</option>
                <option className=" text-black">4</option>
                <option className=" text-black">5</option>
                <option className=" text-black">6</option>
                <option className=" text-black">7</option>
              </select>
              <br />
              {/* Balcony */}
              <select
                onClick={e => setBalcony(e.target.value)}
                className="select select-bordered w-full max-w-xs bg-white h-10 font-semibold mt-3 text-primary"
              >
                <option disabled selected>
                  Select Your Balcony
                </option>
                <option className=" text-black">1</option>
                <option className=" text-black">2</option>
                <option className=" text-black">3</option>
                <option className=" text-black">4</option>
                <option className=" text-black">5</option>
                <option className=" text-black">6</option>
                <option className=" text-black">7</option>
              </select>
              <div className="grid grid-cols-2 gap-3 mt-3 text-xl w-[400px]">
                <label>
                  <input
                    className="mr-2 bg-primary"
                    type="checkbox"
                    checked={gas}
                    onChange={() => setGas(!gas)}
                  />
                  Gas
                </label>
                <label>
                  <input
                    className="mr-2 bg-primary"
                    type="checkbox"
                    checked={lift}
                    onChange={() => setLift(!lift)}
                  />
                  Lift
                </label>
                <label>
                  <input
                    className="mr-2 bg-primary"
                    type="checkbox"
                    checked={water}
                    onChange={() => setWater(!water)}
                  />
                  Water
                </label>
                <label>
                  <input
                    className="mr-2 bg-primary"
                    type="checkbox"
                    checked={current}
                    onChange={() => setCurrent(!current)}
                  />
                  Current
                </label>
                {/* rent */}
                <h1 className="text-xl mt-5 font-semibold">Rent</h1>
                <br />
                <div className="form-control w-full ">
                  <input
                    type="number"
                    placeholder="Enter Your Rent"
                    className="input input-bordered h-10 bg-white  pt-1 w-[300px]"
                    {...register('rent', {
                      required: {
                        value: true,
                        message: 'Rent is Required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.rent?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.rent.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className="w-[350px] ">
              <h1 className="text-xl mb-3 font-semibold">Enter Five Image</h1>
              {/* Image 1 */}
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Image No 1 (url)"
                  className="input input-bordered h-10 bg-white w-full "
                  {...register('image1', {
                    required: {
                      value: true,
                      message: 'Image 1 is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.image1?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.image1.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Image 2 */}
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Image No 2 (url)"
                  className="input input-bordered h-10 bg-white w-full "
                  {...register('image2', {
                    required: {
                      value: true,
                      message: 'Image 2 is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.image2?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.image2.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Image 3 */}
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Image No 3 (url)"
                  className="input input-bordered h-10 bg-white w-full "
                  {...register('image3', {
                    required: {
                      value: true,
                      message: 'Image 3 is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.image3?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.image3.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Image 4 */}
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Image No 4 (url)"
                  className="input input-bordered h-10 bg-white w-full "
                  {...register('image4', {
                    required: {
                      value: true,
                      message: 'Image 4 is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.image4?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.image4.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Image 5 */}
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="Image No 5 (url)"
                  className="input input-bordered h-10 bg-white w-full "
                  {...register('image5', {
                    required: {
                      value: true,
                      message: 'Image 5 is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.image5?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.image5.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="text-xl mt-4 text-primary font-semibold">
                <label>
                  <input
                    className="mr-2 bg-primary text-primary"
                    type="checkbox"
                    checked={urlToImage}
                    onChange={() => setUrlToImage(!urlToImage)}
                  />
                  Get Image To Url
                </label>
              </div>
            </div>
          </div>
          {category && bedroom && bathroom && balcony && area ? (
            <input
              className="btn btn-primary btn-md w-full text-white"
              type="submit"
              value=" Add Items "
            />
          ) : (
            <input
              disabled
              className="btn btn-primary btn-md w-full text-white"
              type="submit"
              value=" Add Items "
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default AddItems;
