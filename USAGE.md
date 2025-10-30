# Quick Maps - Usage Guide

## Features Overview

Quick Maps is designed to be simple and intuitive. Here's what you can do:

### 🔍 Search Functionality
- **Instant Search**: Type any location and see it on the map immediately
- **Enter Key Support**: Press Enter to search without clicking the button
- **Smart Geocoding**: Converts place names to coordinates automatically
- **Dynamic Updates**: Map updates instantly with smooth animations

### 🗺️ Map Features
- **Interactive Map**: Pan, zoom, and explore using standard Google Maps controls
- **Location Marker**: A marker shows the exact location you searched for
- **Auto-Zoom**: Automatically adjusts zoom level based on the type of location
- **Default Location**: Opens with New York City as the default view

### 🎨 User Interface
- **Fixed Size**: 400x500 popup window for consistency
- **Clean Design**: Modern, minimal interface with blue theme
- **Responsive Elements**: Buttons and inputs respond to hover and click
- **Clear Feedback**: Error messages if location not found

## How to Use

### Basic Search
1. Click the Quick Maps icon in your Chrome toolbar
2. Type a location in the search bar:
   - City names: "Paris", "Tokyo"
   - Addresses: "1600 Amphitheatre Parkway, Mountain View, CA"
   - Landmarks: "Eiffel Tower", "Statue of Liberty"
   - Businesses: "Times Square", "Central Park"
3. Click "Search" or press Enter
4. The map updates to show your location with a marker

### Search Tips
- **Be Specific**: More specific searches yield better results
  - ✓ "Times Square, New York"
  - ✗ "Square"
- **Use Full Names**: Complete names work better
  - ✓ "Golden Gate Bridge, San Francisco"
  - ✗ "Bridge"
- **Include Country**: For international locations
  - ✓ "Tokyo Tower, Japan"
  - ✓ "Big Ben, London, UK"

### Keyboard Shortcuts
- **Enter**: Execute search from the input field
- **Tab**: Navigate between input and button

## Technical Details

### File Structure
```
QuickMaps/
├── manifest.json      # Extension configuration (Manifest V3)
├── popup.html         # UI structure with 400x500 dimensions
├── popup.css          # Styling with modern design
├── popup.js           # Core functionality and Google Maps integration
├── icon16.png         # Toolbar icon (16x16)
├── icon48.png         # Extension manager icon (48x48)
├── icon128.png        # Chrome Web Store icon (128x128)
├── README.md          # Project overview
├── SETUP.md           # Installation instructions
└── USAGE.md           # This file
```

### How It Works

**1. Initialization (popup.js)**
```javascript
- Loads Google Maps API
- Creates map instance with default location
- Initializes geocoder for address conversion
- Places initial marker
```

**2. Search Process**
```javascript
- User enters search query
- JavaScript captures the input
- Geocoder API converts query to coordinates
- Map centers on new location
- Marker updates to new position
- Viewport adjusts for optimal view
```

**3. UI Rendering (popup.css)**
```css
- Fixed 400x500 viewport
- Flexbox layout for responsive sections
- Blue (#4285f4) theme matching Google brand
- Smooth transitions on interactive elements
```

### API Usage

**Google Maps APIs Used:**
- **Maps JavaScript API**: Renders the interactive map
- **Geocoding API**: Converts addresses to coordinates
- **Places API**: Library loaded for potential future enhancements

### Code Architecture

**popup.js Functions:**
- `initMap()`: Initializes the map on page load
- `searchPlace(query)`: Handles location search and map updates
- Event listeners: Handle user interactions (clicks, keypresses)

**CSS Organization:**
- Reset styles for consistency
- Component-based styling (header, search, map)
- Responsive hover and active states
- Flexible layout with CSS Grid and Flexbox

## Best Practices

### For Users
- Keep searches simple and specific
- Use well-known place names for better results
- Include city/country for international locations
- Refresh if the extension doesn't load properly

### For Developers
- Replace API key before deployment
- Consider API usage limits (free tier has restrictions)
- Test with various location types
- Keep manifest version updated
- Follow Chrome extension best practices

## Troubleshooting

### Common Issues

**1. "Location not found" Error**
- Solution: Try a more specific search term
- Example: Instead of "Tower", try "Eiffel Tower, Paris"

**2. Map Not Loading**
- Check API key is correctly set in popup.html
- Verify Maps JavaScript API is enabled
- Check browser console for error messages

**3. Extension Icon Not Showing**
- Reload the extension in chrome://extensions/
- Ensure all icon files exist
- Check manifest.json has correct icon paths

**4. Search Not Working**
- Verify internet connection
- Check Geocoding API is enabled
- Look for JavaScript errors in console

### Developer Tools
Open Chrome DevTools while popup is open:
1. Right-click on the extension popup
2. Select "Inspect"
3. Check Console tab for errors
4. Use Network tab to verify API calls

## Privacy & Permissions

### Permissions Used
- **None**: This extension requires no special Chrome permissions
- All Google Maps API calls are standard HTTPS requests
- No user data is stored or collected
- No tracking or analytics included

### Data Usage
- Location searches are sent to Google Maps API
- No search history is stored
- No personal information is collected
- Extension works entirely in the browser

## Updates & Maintenance

### Version 1.0.0
- Initial release
- Basic search functionality
- Clean UI design
- Beginner-friendly code with comments

### Future Enhancements (Ideas)
- Save favorite locations
- Recent searches list
- Different map views (satellite, terrain)
- Directions between locations
- Dark mode support
- Customizable default location

## Support

For issues or questions:
1. Check this USAGE.md file
2. Review SETUP.md for installation help
3. Check the code comments in each file
4. Verify your API key is valid and properly configured

## Educational Value

This extension is designed to be beginner-friendly:
- **HTML**: Learn popup structure and semantic markup
- **CSS**: Understand modern styling and flexbox
- **JavaScript**: Event handling and API integration
- **Chrome Extensions**: Manifest V3 and extension architecture
- **Google Maps API**: Real-world API usage

Each file includes detailed comments explaining the code!
