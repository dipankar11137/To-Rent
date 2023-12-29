import React from 'react';
import { FaStar } from 'react-icons/fa';
const StarRating = ({ rating }) => {
  const stars = [];

  // Create an array of stars based on the rating value
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar className="text-yellow-600 text-md " key={i} />);
  }

  return <div className="flex mt-2">{stars}</div>;
};

export default StarRating;
