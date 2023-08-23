import React, { useRef, useEffect } from 'react';

const MyMapComponent = ({ center = { lat: 0, lng: 0 }, zoom = 8 }) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  }, [center, zoom]);

  return <div ref={ref} id="map" style={{ width: '400px', height: '400px' }} />;
};

export default MyMapComponent;
