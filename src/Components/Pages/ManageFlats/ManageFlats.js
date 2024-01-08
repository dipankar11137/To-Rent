import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Navbar from '../../Share/Navbar';
import ManageFlat from './ManageFlat';

const ManageFlats = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    fetch(`https://to-rent-server.onrender.com/manageFlats/${email}`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [bookings, email]);
  const handleDelete = id => {
    // console.log(id);
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `https://to-rent-server.onrender.com/flats/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = bookings.filter(product => product._id !== id);
          setBooking(remaining);
          toast.success('Successfully Delete');
        });
    }
  };
  return (
    <div className=" bg-slate-900 pb-[1100px]">
      <Navbar />
      <div className="overflow-x-auto mx-20 mt-1 shadow-lg">
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
              <ManageFlat
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

export default ManageFlats;
