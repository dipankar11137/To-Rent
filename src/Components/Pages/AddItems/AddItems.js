import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
  const imageHostKey = '39899c0cdbfbe66a2dbde3818a91832c';

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = data => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const image = imageData.data.url;
        //  const changeUrl = { ...data, service: service, img: image };
        //  console.log(changeUrl);

        //  fetch(`http://localhost:5000/allServices`, {
        //    method: 'POST',
        //    headers: {
        //      'content-type': 'application/json',
        //    },
        //    body: JSON.stringify(changeUrl),
        //  })
        //    .then(res => res.json())
        //    .then(data => {
        //      toast.success('Successfully Add This ');
        //      reset();
        //    });
      });
  };
  return (
    <div className="mx-20 pb-10">
      <div className="mx-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex  lg:gap-x-32 mt-5">
            <div className="w-[400px]">
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
            <div className="">
              {/* Category */}
              <select
                onClick={e => setCategory(e.target.value)}
                className="select select-bordered w-full max-w-xs bg-white h-10 font-semibold"
              >
                <option disabled selected>
                  Select Your Rent Category
                </option>
                <option>HOME</option>
                <option>FAMILY</option>
                <option>BACHELOR</option>
                <option>SUBLET</option>
                <option>OFFICE</option>
                <option>HOSTEL</option>
              </select>
              <br />
              {/* Area */}
              <select
                onClick={e => setArea(e.target.value)}
                className="select select-bordered w-full max-w-xs bg-white h-10 font-semibold mt-3"
              >
                <option disabled selected>
                  Select Your Area
                </option>
                <option>DHAKA</option>
                <option>BARISHAL</option>
                <option>KHULNA</option>
                <option>SYLHET</option>
              </select>
              <br />
              {/* Bedroom */}
              <select
                onClick={e => setBedroom(e.target.value)}
                className="select select-bordered w-full max-w-xs bg-white h-10 font-semibold mt-3"
              >
                <option disabled selected>
                  Select Your Bedroom
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
              <br />
              {/* Bathroom */}
              <select
                onClick={e => setBathroom(e.target.value)}
                className="select select-bordered w-full max-w-xs bg-white h-10 font-semibold mt-3"
              >
                <option disabled selected>
                  Select Your Bathroom
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
              <br />
              {/* Balcony */}
              <select
                onClick={e => setBalcony(e.target.value)}
                className="select select-bordered w-full max-w-xs bg-white h-10 font-semibold mt-3"
              >
                <option disabled selected>
                  Select Your Balcony
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
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
              </div>
              <div>
                <h1>Image</h1>
              </div>
            </div>
          </div>
          <input
            className="btn btn-primary btn-md w-full text-white"
            type="submit"
            value=" Add Items "
          />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
