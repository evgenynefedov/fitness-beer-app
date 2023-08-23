import React, { useEffect } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import FindBarsButton from './components/FindBarsButton';
import MyMapComponent from './components/MyMapComponent';  // Предполагается, что у вас есть такой компонент
import Container from '@mui/material/Container';
import Search from './components/Search/Search'

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
  return (
    <Container component="main" maxWidth="xs">
      <Search />

      <Wrapper apiKey={"AIzaSyDns5rOlHj-9CslKGig8Va8OYyWxj81QWo"} libraries={["places"]}  render={null} />
      
    </Container>
  );
}