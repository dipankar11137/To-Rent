import React, { useEffect, useState } from 'react';
import {
  FaBlind,
  FaHeading,
  FaHome,
  FaUniversity,
  FaUserFriends,
} from 'react-icons/fa';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import RoomCard from './RoomCard';

const HomePage = ({ sideBar, setSideBar }) => {
  const [category, setCategory] = useState('');
  const [flats, setFlats] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchGet, setSearchGet] = useState([]);
  const [lowerPrice, setLowerPrice] = useState('');
  const [upperPrice, setUpperPrice] = useState('');

  // console.log(category);
  useEffect(() => {
    fetch(`http://localhost:5000/flats/${category}`)
      .then(res => res.json())
      .then(data => setFlats(data));
  }, [category]);

  // filter Rent
  const handleFilter = () => {
    const lower = parseFloat(lowerPrice);
    const upper = parseFloat(upperPrice);

    if (!isNaN(lower) && !isNaN(upper)) {
      const filtered = flats.filter(flat => {
        const rent = parseFloat(flat?.rent);
        return !isNaN(rent) && rent >= lower && rent <= upper;
      });

      setFlats(filtered);
    }
  };

  //  console.log(filteredArray);
  // search

  const handleHome = () => {
    setCategory('');
    setSearchGet([]);
  };
  const handleSearch = e => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter cards based on search query
    const filtered = flats.filter(card =>
      card.address.toLowerCase().includes(query.toLowerCase())
    );

    setSearchGet(filtered);
    // setFlats(filtered);

    // console.log(filtered);
  };
  const navigation = useNavigate();
  const handleAdd = () => {
    navigation('/addItems');
  };
  return (
    <div className=" shadow-red-500 shadow-r-lg">
      {!sideBar && (
        <div className="bg-slate-800 pb-64 ">
          <div className="  p-4 pt-28">
            <h1 className="text-9xl font-extrabold text-center mb-5 text-yellow-600">
              <span className="text-white">To</span>-
              <span className="text-yellow-600">R</span>ent
            </h1>
            <div className="flex justify-center">
              <p className="text-center w-[500px] text-slate-200">
                Discover your ideal living space effortlessly with our
                innovative platform. From detailed property listings to
                immersive virtual experiences, we prioritize your comfort and
                convenience in finding your perfect home.
              </p>
            </div>
            <div className="flex justify-center gap-20 mt-16">
              <div>
                <button
                  onClick={() => setSideBar(true)}
                  className="btn btn-secondary w-full text-white "
                >
                  Rent Flats
                </button>
              </div>
              <div>
                <button
                  onClick={handleAdd}
                  className="btn btn-info w-full text-white "
                >
                  Add Flats
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-12 mx-20">
        {sideBar && (
          <div className="col-span-2 text-white  mt-10 pr-4 border-r-2 ">
            <h1
              onClick={handleHome}
              className={
                category === ''
                  ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center bg-white'
                  : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
              }
            >
              <FaHome className="mr-3" /> Home
            </h1>
            <h1
              onClick={() => setCategory('FAMILY')}
              className={
                category === 'FAMILY'
                  ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center bg-white'
                  : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
              }
            >
              <MdOutlineFamilyRestroom className="mr-3" />
              Family
            </h1>
            <h1
              onClick={() => setCategory('BACHELOR')}
              className={
                category === 'BACHELOR'
                  ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center bg-white'
                  : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
              }
            >
              <FaBlind className="mr-3" />
              Bachelor
            </h1>
            <h1
              onClick={() => setCategory('SUBLET')}
              className={
                category === 'SUBLET'
                  ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center bg-white'
                  : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
              }
            >
              <FaUserFriends className="mr-3" /> Sublet
            </h1>
            <h1
              onClick={() => setCategory('OFFICE')}
              className={
                category === 'OFFICE'
                  ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center  bg-white'
                  : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
              }
            >
              <FaUniversity className="mr-3" /> Office
            </h1>
            <h1
              onClick={() => setCategory('HOSTEL')}
              className={
                category === 'HOSTEL'
                  ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase flex items-center bg-white'
                  : ' font-semibold text-xl cursor-pointer mt-2 uppercase flex items-center'
              }
            >
              <FaHeading className="mr-3" /> Hostel
            </h1>

            <h1 className="text-3xl my-3 font-bold uppercase underline text-blue-700 text-center">
              Area
            </h1>
            <div>
              <input
                className="w-[190px] border-2 p-2 text-black  rounded-lg border-blue-200 "
                placeholder="Search Hare"
                type="search"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div>
              <div className="mt-10">
                <div>
                  <label>
                    <h1 className="font-semibold">Lower Rent:</h1>
                  </label>
                  <input
                    className="w-[120px] border-2 p-2 text-black rounded-lg border-blue-200 "
                    type="text"
                    value={lowerPrice}
                    onChange={e => setLowerPrice(e.target.value)}
                  />
                </div>

                <div>
                  <label>
                    <h1 className="font-semibold mt-3">Upper Rent:</h1>
                  </label>

                  <input
                    className="w-[120px] border-2 p-2 text-black rounded-lg border-blue-200 "
                    type="text"
                    value={upperPrice}
                    onChange={e => setUpperPrice(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="btn mt-3 btn-sm btn-primary w-[120px]"
                onClick={handleFilter}
              >
                SUbmit
              </button>
            </div>
          </div>
        )}

        <div className="col-span-10  w-full pl-10 mt-5">
          <div className="grid grid-cols-2 gap-10 ">
            {/* {flats.map(flat => (
              <RoomCard key={flat._id} flat={flat}></RoomCard>
            ))} */}
            {searchGet.length === 0
              ? flats.map(flat => (
                  <RoomCard key={flat._id} flat={flat}></RoomCard>
                ))
              : searchGet.map(flat => (
                  <RoomCard key={flat._id} flat={flat}></RoomCard>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
