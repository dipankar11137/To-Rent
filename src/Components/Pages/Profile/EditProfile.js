import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const EditProfile = () => {
  const [authUser] = useAuthState(auth);
  const [edit, setEdit] = useState(false);
  const [users, setUser] = useState([]);
  const [updateSex, setSex] = useState('');

  const user = users[0];
  const imageHostKey = 'ab492fa3bd4253f25e449094e4b48480';

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${authUser?.email}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [authUser?.email, user]);

  const onSubmit = data => {
    const image = data.image[0];
    console.log(image);

    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
      fetch(url, {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(imageData => {
          const UpdateImage = imageData.data.url;
          const name = data?.name || user.name;
          const birthday = data?.birthday || user.birthday;
          const phone = data?.phone || user.phone;
          const sex = updateSex || user.sex;
          const bio = data?.bio || user.bio;
          const image = UpdateImage || user.photo;
          const updatedProfile = {
            name,
            birthday,
            phone,
            sex,
            bio,
            image,
          };
          // console.log(updatedProfile);
          fetch(`http://localhost:5000/create-user/${user?.email}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(updatedProfile),
          })
            .then(res => res.json())
            .then(data => {
              toast.success('Profile Successfully Updated');
              reset();
              setEdit(false);
            });
        });
    } else {
      const name = data?.name || user.name;
      const birthday = data?.birthday || user.birthday;
      const phone = data?.phone || user.phone;
      const sex = updateSex || user.sex;
      const bio = data?.bio || user.bio;
      const image = user.photo;

      const updatedProfile = {
        name,
        birthday,
        phone,
        sex,
        bio,
        image,
      };
      fetch(`http://localhost:5000/create-user/${user?.email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      })
        .then(res => res.json())
        .then(data => {
          toast.success('Profile Successfully Updated');
          reset();
          setEdit(false);
        });
    }
  };
  const profilePic =
    'https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=';
  return (
    <div
      style={{
        backgroundImage: ` URL(
          'https://static.vecteezy.com/system/resources/previews/022/839/323/non_2x/concept-of-business-a-mortgage-white-house-construction-building-real-estate-house-on-table-white-background-3d-illustration-render-real-estate-property-concept-white-background-free-photo.jpg'
        )`,
      }}
      className="w-full md:flex"
    >
      <div
        style={{
          backgroundImage: ` URL(
          ''
        )`,
        }}
        className="indicator bg-no-repeat bg-white  rounded  m-4 w-1/3 h-fit  mt-40 shadow-xl shadow-blue-900"
      >
        <div className="-mt-6 ">
          <img
            style={{ margin: '-30px' }}
            className=" w-56 h-56 indicator-item indicator-center rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 "
            src={user?.image || profilePic}
            alt=""
          />
        </div>
        <div className="mt-16 pl-4 w-full ">
          <div className="text-left py-8">
            <div className="flex items-baseline text-sm justify-between">
              <p className="font-bold w-1/3">Name</p>
              <span className="w-2/3">: {user?.name}</span>
            </div>
            <div className="flex items-baseline text-sm justify-between mt-1">
              <p className="font-bold w-1/3">Email</p>
              <span className="w-2/3">: {user?.email}</span>
            </div>
            <div className="flex items-baseline text-sm justify-between mt-1">
              <p className="font-bold w-1/3">Birthday</p>
              <span className="w-2/3">: {user?.birthday}</span>
            </div>
            <div className="flex items-baseline text-sm justify-between mt-1">
              <p className="font-bold w-1/3">Phone</p>
              <span className="w-2/3">: {user?.phone}</span>
            </div>
            <div className="flex items-baseline text-sm justify-between mt-1">
              <p className="font-bold w-1/3">Sex</p>
              <span className="w-2/3">: {user?.sex}</span>
            </div>
            <div className="flex items-baseline text-sm justify-between mt-1">
              <p className="font-bold w-1/3">Bio</p>
              <span className="w-2/3">: {user?.bio}</span>
            </div>
          </div>
          <button
            onClick={() => setEdit(true)}
            className="btn btn-primary text-4xl border-0 w-2/3 my-6"
          >
            <FaEdit />
          </button>
        </div>
      </div>

      {edit && (
        <div className="md:w-2/4  bg-white rounded m-4 p-4 h-fit lg:ml-[200px] shadow-xl shadow-blue-500">
          <p className="text-2xl font-bold text-cyan-600 border-b-2 inline p-1">
            Update Your Profile
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Teacher Or student */}

            {/* name */}
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text ">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered bg-white w-full  "
                {...register('name', {})}
              />
            </div>
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text ">Birthday</span>
              </label>
              <input
                type="date"
                placeholder="Your name"
                className="input input-bordered bg-white w-full  "
                {...register('birthday', {})}
              />
            </div>

            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text ">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Your Phone Number"
                className="input input-bordered bg-white w-full  "
                {...register('phone', {})}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Sex</span>
              </label>
              <select
                onChange={e => setSex(e.target.value)}
                name="sex"
                className="select select-sm select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  {user?.sex ? user?.sex : 'Select SEX'}
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Common</option>
              </select>
            </div>
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text ">Bio</span>
              </label>
              <input
                type="text"
                placeholder="Your Bio"
                className="input input-bordered bg-white w-full  "
                {...register('bio', {})}
              />
            </div>

            {/* Image */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Input Your Image </span>
              </label>
              <input
                type="file"
                placeholder="Your Image"
                className="input input-bordered bg-white w-96 pt-2 sm:w-full   hover:shadow-xl shadow-inner"
                {...register('image', {})}
              />
            </div>

            <input
              className="btn w-full text-white btn-primary mt-2"
              type="submit"
              value="Update Profile"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
