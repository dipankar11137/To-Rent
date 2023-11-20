import React, { useEffect, useState } from 'react';
import ShowBookProduct from './ShowBookProduct';

const ShowBookProducts = () => {
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookFlats`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [bookings]);
  const handleDelete = id => {};
  return (
    <div className="h-screen">
      <div className="overflow-x-auto mx-20 mt-1 shadow">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Category</th>
              <th>Size</th>
              <th>Rent</th>
              <th>Phone Number</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <ShowBookProduct
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBookProducts;
