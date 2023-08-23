import React from 'react';
import { findBarsAroundMe } from '../utils/findBarsAroundMe'

const FindBarsButton = () => {
  const handleButtonClick = async () => {
    const bars = await findBarsAroundMe(100);
    console.log("Found bars:", bars);
  };

  return (
    <button onClick={handleButtonClick}>
      Find Bars Around Me
    </button>
  );
};

export default FindBarsButton;
