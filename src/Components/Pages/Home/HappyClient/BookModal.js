import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const BookModal = ({ flat }) => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = data => {
    const updateData = { ...data, flat, email };
    fetch(`https://to-rent-server.onrender.com/bookFlats`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Successfully Book This Flat');
        reset();
      });
  };

  return (
    <div className="modal-box w-[400px]">
      <div>
        <div className="fixed top-0 right-0  p-2 rounded-full text-xl font-extrabold text-primary  z-50 cursor-pointer">
          <label className="modal-backdrop cursor-pointer" htmlFor="my_modal_6">
            X
          </label>
        </div>
        <h1 className="text-2xl text-center font-semibold text-black">
          Book Now
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered h-10 bg-white text-black w-full "
              {...register('bookerName', {
                required: {
                  value: true,
                  message: 'Name is Required',
                },
              })}
            />
            <label className="label">
              {errors.bookerName?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.bookerName.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="phone"
              placeholder="Enter Your Phone Number"
              className="input input-bordered h-10 bg-white text-black w-full "
              {...register('bookerNumber', {
                required: {
                  value: true,
                  message: 'Number is Required',
                },
                pattern: {
                  value: /^[0-9]{11}$/, // Adjust the regex pattern as needed
                  message: 'Invalid phone number format',
                },
              })}
            />
            {errors.bookerNumber && (
              <span className="text-xs mt-2 text-red-600">
                {errors.bookerNumber.message}
              </span>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <textarea
              type="text"
              placeholder="Enter Your Address"
              className="input input-bordered h-14 text-black bg-white w-full  pt-1"
              {...register('bookerAddress', {
                required: {
                  value: true,
                  message: 'Address is Required',
                },
              })}
            />
            <label className="label">
              {errors.bookerAddress?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.bookerAddress.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn btn-primary btn-md w-full text-white"
            type="submit"
            value="Book "
          />
        </form>
      </div>
      {/* <div className="modal-action ">
        <label htmlFor="my_modal_6" className="btn">
          Close!
        </label>
      </div> */}
    </div>
  );
};

export default BookModal;
