const SEARCH_RADIUS = 290000
const PLACE_TYPE = 'restaurant'

export const getNearbyBars = async (userLocation, minRatings) => {
    try {
      if (!window.google) {
        console.error('Google Maps API is not loaded');
        return [];
      }
  
      return new Promise((resolve, reject) => {
        const service = new google.maps.places.PlacesService(document.createElement('div'));
  
        const request = {
          location: new google.maps.LatLng(userLocation.latitude, userLocation.longitude),
          radius: SEARCH_RADIUS,
          type: [PLACE_TYPE],
          fields: ['name', 'rating', 'user_ratings_total', 'geometry', 'photos'],
        };
  
        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            const filteredBars = results.filter(bar => bar.user_ratings_total >= minRatings)

            resolve(filteredBars);
          } else {
            reject(`Error fetching nearby bars: ${status}`);
          }
        });
      });
    } catch (error) {
      console.error("Error fetching nearby bars:", error);
      return [];
    }
  };
  