import React, { useEffect } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import FindBarsButton from './components/FindBarsButton';
import MyMapComponent from './components/MyMapComponent';  // Предполагается, что у вас есть такой компонент

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

const App = () => (
  <div className="App">
    <h1>Find Nearby Bars</h1>
    <FindBarsButton />
    <Wrapper apiKey={"AIzaSyDns5rOlHj-9CslKGig8Va8OYyWxj81QWo"} libraries={["places"]}  render={render} />
  </div>
);

export default App;
