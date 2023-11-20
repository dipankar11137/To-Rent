import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageFlat = ({ booking, handleDelete }) => {
  const navigator = useNavigate();
  const handleDetails = id => {
    navigator(`/roomDetails/${id}`);
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar mr-4">
            <div className="mask rounded-xl w-20 h-20 ">
              <img src={booking?.image1} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{booking?.category}</div>
            <div className="text-sm opacity-50">{booking?.flat?.address}</div>
          </div>
        </div>
      </td>
      <td>{booking?.size} Square Feet</td>
      <td>{booking?.rent} Taka</td>
      <td>{booking?.number}</td>
      <td>
        <button
          onClick={() => handleDetails(booking?._id)}
          className="btn btn-xs btn-warning"
        >
          Details
        </button>
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

export default ManageFlat;
