import React, { useEffect, useState } from 'react';
import {
  FaBlind,
  FaHeading,
  FaHome,
  FaUniversity,
  FaUserFriends,
} from 'react-icons/fa';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import RoomCard from './RoomCard';

const HomePage = () => {
  const [category, setCategory] = useState('');
  const [flats, setFlats] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
   const [searchGet, setSearchGet] = useState([]);
   console.log(searchGet);
   // console.log(category);
   useEffect(() => {
     fetch(`http://localhost:5000/flats/${category}`)
       .then(res => res.json())
       .then(data => setFlats(data));
   }, [category, flats]);
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
   };
   return (
     <div className="mx-20 shadow-red-500 shadow-r-lg">
       <div className="grid grid-cols-12">
         <div className="col-span-2  mt-10 pr-4 border-r-2 ">
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

           <h1 className="text-3xl my-3 font-bold uppercase underline text-blue-700">
             Area
           </h1>
           <div>
             <input
               className="w-[190px] border-2 p-2 rounded-l-lg border-blue-200"
               placeholder="Search Hare"
               type="search"
               value={searchQuery}
               onChange={handleSearch}
             />
           </div>
           <h1
             onClick={() => setCategory('')}
             className={
               category === 'Dhaka'
                 ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase  bg-white'
                 : ' font-semibold text-xl cursor-pointer mt-2 uppercase'
             }
           >
             Dhaka
           </h1>
           <h1
             onClick={() => setCategory('')}
             className={
               category === 'Barishal'
                 ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase  bg-white'
                 : ' font-semibold text-xl cursor-pointer mt-2 uppercase'
             }
           >
             Barishal
           </h1>
           <h1
             onClick={() => setCategory('')}
             className={
               category === 'Khulna'
                 ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase bg-white'
                 : ' font-semibold text-xl cursor-pointer mt-2 uppercase'
             }
           >
             Khulna
           </h1>
           <h1
             onClick={() => setCategory('')}
             className={
               category === 'Sylhet'
                 ? ' text-primary  font-semibold text-xl border-r-4 border-spacing-6 border-primary cursor-pointer mt-2 uppercase bg-white'
                 : ' font-semibold text-xl cursor-pointer mt-2 uppercase'
             }
           >
             Sylhet
           </h1>
         </div>
         <div className="col-span-10  w-full pl-10 mt-5">
           <div className="grid grid-cols-2 gap-10 ">
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
