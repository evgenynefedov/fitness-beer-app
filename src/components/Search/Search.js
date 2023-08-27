import React, { useEffect, useState } from 'react';
import { findBarsAroundMe } from './../../utils/findBarsAroundMe'
import Form from './Form/Form'
import Result from './Result/Result'

export default function Search() {

  const [difficulty, setDifficulty] = useState(50);
  const [barsQuantity, setBarsQuantity] = useState(2);
  const [mode, setMode] = useState('walking');

  const [result, setResult] = useState(false)

  const handleDifficulty = (event, newValue) => {
    setDifficulty(newValue);
  };

  const handleBarsQuantity = (event, newValue) => {
    if (newValue < 2) {
      setBarsQuantity(2);
    } else {
      setBarsQuantity(newValue);
    }
  };

  const handleMode = (event, newValue) => {
    if (newValue !== null) {
      setMode(newValue);
    }
  };

  const handleSubmit = async (event) => {
    const minRatings = 100;
    const ratingWeight = 50;
    const distanceWeight = difficulty;
    const numberOfBars = barsQuantity;

    const bars = await findBarsAroundMe(minRatings, ratingWeight, distanceWeight, numberOfBars);
    setResult(bars)
    
    console.log("Found bars:", bars);
  }

  useEffect(() => {
    console.log(`difficulty: ${difficulty}, barsQuantity ${barsQuantity}, mode ${mode}`)
  }, [difficulty, barsQuantity, mode])

  return (
    <>
      {result === false ?
        <Form difficulty={difficulty} handleDifficulty={handleDifficulty} barsQuantity={barsQuantity} handleBarsQuantity={handleBarsQuantity} mode={mode} handleMode={handleMode} handleSubmit={handleSubmit} /> :
        <Result bars={result} />
      }
    </>
  );
}