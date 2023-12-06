import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaHome, FaUniversity } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const navigate = useNavigate();
  const [booking, setBooking] = useState([]);
  const logout = () => {
    signOut(auth);
  };
  const [dbUser, setDbUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then(res => res.json())
      .then(data => setDbUser(data));
  }, [dbUser, email]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookFlats`)
      // fetch(`http://localhost:5000/bookFlats/${email}`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [booking]);

  const handleBook = () => {
    navigate('/showBookProducts');
  };

  const menuItems = (
    <>
      <li className="font-bold hover:text-orange-400  text-xl">
        <Link to="/">
          <FaHome />
        </Link>
      </li>
      <li className="font-bold hover:text-orange-400">
        <Link to="/blogs">Blogs</Link>
      </li>
      {user && (
        <li className="font-bold hover:text-orange-400">
          <Link to="/myOrders">My Orders</Link>
        </li>
      )}
      <li className="font-bold hover:text-orange-400">
        <Link to="/showAllReview">Reviews</Link>
      </li>

      {user && (
        <li className="font-bold hover:text-orange-400">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {/* <li className=" font-bold">
        {user ? (
          <button className=" font-bold" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li> */}
    </>
  );
  return (
    <div className="  navbar bg-secondary  text-white ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content   shadow bg-base-100 rounded-box w-52 text-black "
          >
            {/* {menuItems} */}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case font-bold lg:text-xl  sm:text-sm text-white"
        >
          <img
            className="h-10 rounded-2xl mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdr9q6UiCLATEAU_WSiVdUxKgENgCarm2g3A&usqp=CAU"
            alt=""
          />
          To Rent
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:pr-36 ml-40">
        {/* <ul className="menu menu-horizontal p-0">{menuItems}</ul> */}
      </div>
      {/* Image */}
      <div className="navbar-end">
        <label
          onClick={handleBook}
          tabindex="0"
          className="btn btn-ghost btn-circle mr-3"
        >
          <div className="indicator">
            {/* <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
               />
             </svg> */}
            <FaUniversity className="text-2xl" />
            <span className="badge badge-sm indicator-item badge-success">
              {booking.length}
            </span>
          </div>
        </label>
        {user ? (
          <div className="dropdown dropdown-end  mr-5">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="https://placeimg.com/80/80/people" alt="" /> */}
                {dbUser[0]?.image ? (
                  <img className="h-6" src={dbUser[0]?.image} alt="" />
                ) : (
                  // <h1>D</h1>
                  <img
                    className="h-6"
                    src="https://cdn.imgbin.com/6/25/24/imgbin-user-profile-computer-icons-user-interface-mystique-aBhn3R8cmqmP4ECky4DA3V88y.jpg"
                    alt=""
                  />
                )}
              </div>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-purple-900"
            >
              <li>
                <Link to="/addItems">Add Flats</Link>
              </li>
              {/* <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <Link to="/">Profile Settings</Link>
              </li> */}
              <li>
                <Link to="/showBookProducts">Show Booking</Link>
                <Link to="/manageFlats">Manage Flats</Link>
              </li>

              <li className=" font-bold">
                {user ? (
                  <button
                    className=" font-bold text-orange-500"
                    onClick={logout}
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        ) : (
          <ul className="mr-5">
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
