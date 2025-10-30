// Global variables to store map and geocoder instances
let map;
let geocoder;
let marker;

/**
 * Initialize the Google Map when the page loads
 * This function is called automatically when the Google Maps API is ready
 */
function initMap() {
  // Default location - New York City coordinates
  const defaultLocation = { lat: 40.7128, lng: -74.0060 };

  // Create a new map instance centered on the default location
  map = new google.maps.Map(document.getElementById('map'), {
    center: defaultLocation,
    zoom: 12,
    // Optional: Add custom map styling options
    mapTypeControl: true,
    streetViewControl: false,
    fullscreenControl: false,
  });

  // Initialize geocoder for converting addresses to coordinates
  geocoder = new google.maps.Geocoder();

  // Create a marker for showing the searched location
  marker = new google.maps.Marker({
    map: map,
    position: defaultLocation,
  });
}

/**
 * Search for a place and update the map
 * @param {string} searchQuery - The place name or address to search for
 */
function searchPlace(searchQuery) {
  // Check if the search query is empty
  if (!searchQuery || searchQuery.trim() === '') {
    alert('Please enter a location to search');
    return;
  }

  // Use the Geocoder to convert the address/place name to coordinates
  geocoder.geocode({ address: searchQuery }, (results, status) => {
    if (status === 'OK') {
      // If search was successful, get the location coordinates
      const location = results[0].geometry.location;

      // Center the map on the new location
      map.setCenter(location);

      // Update marker position
      marker.setPosition(location);

      // Optionally adjust zoom level based on location type
      if (results[0].geometry.viewport) {
        map.fitBounds(results[0].geometry.viewport);
      } else {
        map.setZoom(15);
      }
    } else {
      // If search failed, show an error message
      alert('Location not found: ' + status + '\nPlease try a different search term.');
    }
  });
}

/**
 * Event listener for when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the map
  initMap();

  // Get references to the search input and button elements
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  /**
   * Handle search button click
   */
  searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value;
    searchPlace(searchQuery);
  });

  /**
   * Handle Enter key press in the search input
   * This allows users to search by pressing Enter instead of clicking the button
   */
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const searchQuery = searchInput.value;
      searchPlace(searchQuery);
    }
  });
});
