import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowBookProduct = ({ booking, handleDelete }) => {
  const navigator = useNavigate();
  const handleDetails = id => {
    navigator(`/roomDetails/${id}`);
  };
  const handlePayment = id => {
    navigator(`/payment/${id}`);
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar mr-4">
            <div className="mask rounded-xl w-20 h-20 ">
              <img
                src={booking?.flat?.image1}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{booking?.flat?.category}</div>
            <div className="text-sm opacity-50">{booking?.flat?.address}</div>
          </div>
        </div>
      </td>
      <td>{booking?.flat?.size} Square Feet</td>
      <td>{booking?.flat?.rent} Taka</td>
      <td>{booking?.flat?.number}</td>

      <td>
        <button
          onClick={() => handleDetails(booking?.flat?._id)}
          className="btn btn-xs btn-warning"
        >
          Details
        </button>
      </td>
      <td>
        {booking.payment ? (
          <h1 className="text-xl font-bold text-green-800">Done</h1>
        ) : (
          <button
            onClick={() => handlePayment(booking?._id)}
            className="btn btn-info btn-sm"
          >
            Payment
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(booking?._id)}
          className="btn btn-xs btn-primary"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ShowBookProduct;
