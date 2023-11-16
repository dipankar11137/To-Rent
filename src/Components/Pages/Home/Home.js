import React from "react";
import Footer from '../../Share/Footer';
import Contact from './Contact/Contact';
import HappyClient from './HappyClient/HappyClient';
import HomePage from './HomePage';

const Home = () => {
  return (
    <div>
      <HomePage />
      <HappyClient />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
