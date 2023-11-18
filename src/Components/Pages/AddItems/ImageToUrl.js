import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ImageToUrl = () => {
  const imageHostKey = '39899c0cdbfbe66a2dbde3818a91832c';
  const [url, getUrl] = useState('Get Url This Place');
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
        // const image = imageData.data.url;
        // console.log(image);
        getUrl(imageData.data.url);
      });
  };
  return (
    <div className="mt-5">
      <div className="flex items-center gap-x-3">
        <h1 className="w-[500px] bg-white py-3 rounded-md pl-2">{url}</h1>
        <form
          className="flex items-center gap-x-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            {/* <label className="label">
              <span className="label-text text-xl font-semibold">
                Input Image{' '}
              </span>
            </label> */}
            <input
              type="file"
              className="input input-bordered text-black w-96 pt-2   hover:shadow-xl shadow-inner"
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image is Required',
                },
              })}
            />
          </div>

          <input
            className="btn  disable text-white w-20"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ImageToUrl;
