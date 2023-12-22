import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const AddReview = ({ id }) => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [review, setReview] = useState('');
  //   const name = user?.displayName;
  //   const img = user?.photoURL;

  let img;
  let name;
  if (user?.photoURL == null) {
    img =
      'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png';
  } else {
    img = user?.photoURL;
  }
  if (user?.displayName == null) {
    name = 'Abbus';
  } else {
    name = user?.displayName;
  }

  const onSubmit = () => {
    const updateReview = { review, id };

    toast.success('Successfully Add Review');
    const url = `http://localhost:5000/addReview`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateReview),
    })
      .then(res => res.json())
      .then(result => {});
  };
  return (
    <div className=" modal" role="dialog">
      <div className="modal-box  w-96">
        <div className=" fixed modal-action -top-9 z-20 -right-0">
          <label
            htmlFor="my_modal_6"
            className=" text-red-600  text-3xl font-extrabold px-3 py-1 rounded-full shadow-2xl cursor-pointer"
          >
            x
          </label>
        </div>
        <div className="flex justify-center ">
          <div className=" w-96  rounded-lg   ">
            <label className="label">
              <span className="label-text font-bold text-lime-700 text-2xl mb-2">
                Add a Review
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Your Review"
              className="input input-bordered bg-white w-full max-w-xs h-32"
            />

            <div className="modal-action">
              <label
                onClick={onSubmit}
                htmlFor="my_modal_6"
                className="w-full btn"
              >
                Review
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
