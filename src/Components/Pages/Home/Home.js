import React from "react";
import Footer from '../../Share/Footer';
import HappyClient from './HappyClient/HappyClient';
import HomePage from './HomePage';

const Home = () => {
  return (
    <div>
      <HomePage />
      <HappyClient />
      <Footer />
    </div>
  );
};

export default Home;
