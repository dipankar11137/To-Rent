import React from 'react';
import { useForm } from 'react-hook-form';

const BookModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = data => {};
  return (
    <div className="modal-box w-[400px]">
      <div>
        <div className="fixed top-0 right-0  p-2 rounded-full text-xl font-extrabold text-primary  z-50 cursor-pointer">
          <label className="modal-backdrop cursor-pointer" htmlFor="my_modal_6">
            X
          </label>
        </div>
        <h1 className="text-2xl text-center font-semibold">Book Now</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
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
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Number</span>
            </label>
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
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
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
