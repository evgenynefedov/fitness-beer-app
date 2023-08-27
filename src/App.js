import React, { useEffect, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyMapComponent from './components/MyMapComponent';
import Container from '@mui/material/Container';
import Search from './components/Search/Search'
import Onboarding from './components/Onboarding/Onboarding'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <p>Loading...</p>;
    case Status.FAILURE:
      return <p>Error loading Google Maps</p>;
    case Status.SUCCESS:
      return <MyMapComponent />;
    default:
      return <p>Loading...</p>;
  }
};

export default function App() {

  const [onboarded, setOnboarded] = useState(false)

  const getStarted = () => {
    setOnboarded(true)
  }

  return (
    <Container component="main" >
      {onboarded ?
        <Search />
        :
        <Onboarding getStarted={getStarted} />
      }
      <Wrapper apiKey={"AIzaSyDns5rOlHj-9CslKGig8Va8OYyWxj81QWo"} libraries={["places"]}  render={null} />
    </Container>
  );
}