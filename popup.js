/**
 * QuickMaps - Uses Google Maps Embed API (iframe)
 * This is the only approach that works with Chrome Extension Manifest V3 CSP restrictions
 */

document.addEventListener('DOMContentLoaded', () => {
  const originInput = document.getElementById('origin-input');
  const destinationInput = document.getElementById('destination-input');
  const directionsButton = document.getElementById('directions-button');
  const mapFrame = document.getElementById('map');

  // Check if API key is available from secrets.js
  if (typeof GOOGLE_MAPS_API_KEY === 'undefined' || !GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'REPLACE_WITH_YOUR_API_KEY') {
    console.error('GOOGLE_MAPS_API_KEY is not set. Create secrets.js from secrets.example.js and add your key.');
    mapFrame.srcdoc = '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:sans-serif;color:#666;text-align:center;padding:20px;">API key not configured.<br>See console for details.</div>';
    return;
  }

  /**
   * Load directions between two locations using the Maps Embed API
   * @param {string} origin - The starting point
   * @param {string} destination - The destination point
   */
  function loadDirections(origin, destination) {
    if (!origin || origin.trim() === '' || !destination || destination.trim() === '') {
      alert('Please enter both starting point and destination');
      return;
    }
    const encodedOrigin = encodeURIComponent(origin.trim());
    const encodedDestination = encodeURIComponent(destination.trim());
    // Use the Embed API "directions" mode
    const src = `https://www.google.com/maps/embed/v1/directions?key=${encodeURIComponent(GOOGLE_MAPS_API_KEY)}&origin=${encodedOrigin}&destination=${encodedDestination}`;
    mapFrame.src = src;
  }

  // Set initial default view (centered on Houston, TX)
  const defaultCenterSrc = `https://www.google.com/maps/embed/v1/view?key=${encodeURIComponent(GOOGLE_MAPS_API_KEY)}&center=29.7601,-95.3701&zoom=12`;
  mapFrame.src = defaultCenterSrc;

  // Handle directions button click
  directionsButton.addEventListener('click', () => {
    loadDirections(originInput.value, destinationInput.value);
  });

  // Handle Enter key press in origin input
  originInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      destinationInput.focus();
    }
  });

  // Handle Enter key press in destination input
  destinationInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      loadDirections(originInput.value, destinationInput.value);
    }
  });

  // Handle "Use My Location" button click
  const useLocationButton = document.getElementById('use-location-button');
  useLocationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    // Show loading state
    useLocationButton.textContent = '⌛ Getting location...';
    useLocationButton.disabled = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success - got the user's position
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        // Set the origin input to the coordinates
        originInput.value = `${lat},${lng}`;
        
        // Reset button state
        useLocationButton.textContent = '📍 My Location';
        useLocationButton.disabled = false;
        
        // Focus the destination input so user can type destination
        destinationInput.focus();
      },
      (error) => {
        // Error getting location
        let errorMessage = 'Unable to get your location. ';
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += 'Permission denied. Please allow location access.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += 'Location information unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage += 'Request timed out.';
            break;
          default:
            errorMessage += 'An unknown error occurred.';
        }
        alert(errorMessage);
        
        // Reset button state
        useLocationButton.textContent = '📍 My Location';
        useLocationButton.disabled = false;
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  });
});
