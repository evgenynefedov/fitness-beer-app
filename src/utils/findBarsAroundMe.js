import { getCurrentPosition } from './geolocationUtils';
import { getNearbyBars } from './getNearbyBars';

export const findBarsAroundMe = async (minRatings) => {
  try {
    const position = await getCurrentPosition();
    const bars = await getNearbyBars(position.coords, minRatings);
    return bars;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
