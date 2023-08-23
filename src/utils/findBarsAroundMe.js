import { getCurrentPosition } from './geolocationUtils';
import { getNearbyBars } from './getNearbyBars';
import { planRoute } from './routePlanner';  

export const findBarsAroundMe = async (minRatings, ratingWeight, distanceWeight, numberOfBars) => {
  try {
    const position = await getCurrentPosition();
    const userLocation = position.coords;
    const bars = await getNearbyBars(userLocation, minRatings);
    const selectedBars = planRoute(bars, ratingWeight, distanceWeight, numberOfBars, userLocation);
    console.log(selectedBars);
    return selectedBars;  
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
