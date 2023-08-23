
const getDistance = (p1, p2) => {
    let rad = function(x) {
      return x * Math.PI / 180;
    };
  
    const R = 6378137; // Земной радиус в метрах
    const dLat = rad(p2.lat - p1.lat);
    const dLong = rad(p2.lng - p1.lng);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };
  
 
  export const planRoute = (bars, ratingWeight, distanceWeight, numberOfBars, userLocation) => {
    let sortedBars = bars.slice().sort((a, b) => {
      const ratingDiff = b.rating * ratingWeight - a.rating * ratingWeight;
      const distanceDiff = getDistance(userLocation, a.geometry.location) * distanceWeight -
                           getDistance(userLocation, b.geometry.location) * distanceWeight;
      return ratingDiff + distanceDiff;
    });
  
    return sortedBars.slice(0, numberOfBars);
  };
  