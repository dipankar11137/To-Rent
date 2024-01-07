import React, { useState } from 'react';
import Footer from '../../Share/Footer';
import Navbar1 from '../../Share/Navbar1';
import Contact from './Contact/Contact';
import HappyClient from './HappyClient/HappyClient';
import HomePage from './HomePage';

const Home = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div>
      <Navbar1 sideBar={sideBar} setSideBar={setSideBar} />
      <HomePage sideBar={sideBar} setSideBar={setSideBar} />
      <HappyClient />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
