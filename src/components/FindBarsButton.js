import React from 'react';
import { findBarsAroundMe } from '../utils/findBarsAroundMe'

const FindBarsButton = () => {
  const handleButtonClick = async () => {
    const minRatings = 100;
  const ratingWeight = 0.5; 
  const distanceWeight = 0.5; 
  const numberOfBars = 5; 

  const bars = await findBarsAroundMe(minRatings, ratingWeight, distanceWeight, numberOfBars);
  console.log("Found bars:", bars);
  };

  return (
    <button onClick={handleButtonClick}>
      Find Bars Around Me
    </button>
  );
};

export default FindBarsButton;
