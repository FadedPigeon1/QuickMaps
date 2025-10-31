# Quick Maps - Usage Guide

## Features Overview

Quick Maps provides instant driving directions with a beautiful, modern interface. Here's what you can do:

### �️ Directions Functionality

- **Instant Directions**: Get routes between any two points
- **📍 Current Location**: Use your GPS location as starting point
- **Enter Key Support**: Press Enter to get directions quickly
- **Turn-by-Turn**: Full route with driving directions displayed on map
- **Dynamic Updates**: Map updates instantly with the route

### 📍 Geolocation Features

- **One-Click Location**: Click "📍 My Location" to use current position
- **Auto-Focus**: After getting location, destination field is automatically focused
- **Permission Handling**: Browser prompts for location access (one-time approval)
- **Coordinate Display**: Shows your lat/lng coordinates in origin field

### 🗺️ Map Features

- **Interactive Map**: Pan, zoom, and explore using standard Google Maps controls
- **Route Display**: Shows full driving route with turn-by-turn directions
- **Default View**: Opens with Houston, TX as the default center
- **Embedded Maps**: Uses Google Maps Embed API (no external scripts)

### 🎨 User Interface

- **Modern Design**: Beautiful purple-blue gradient theme
- **Smooth Animations**: Buttons lift and glow on hover
- **Responsive Elements**: All inputs and buttons with focus states
- **Compact Size**: 400x500 popup window
- **Clear Layout**: Clean, focused interface for directions only

## How to Use

### Get Directions (Manual Entry)

1. Click the Quick Maps icon in your Chrome toolbar
2. Type your starting point in the "From" field:
   - City: "Los Angeles, CA"
   - Address: "1600 Amphitheatre Parkway, Mountain View, CA"
   - Landmark: "Times Square, New York"
3. Type your destination in the "To" field:
   - Business: "Starbucks, Downtown LA"
   - Place: "Golden Gate Bridge"
   - Address: "123 Main St, San Francisco, CA"
4. Click "Get Directions" or press Enter
5. The map displays the route with turn-by-turn directions

### Use Current Location

1. Click the Quick Maps icon
2. Click the **"📍 My Location"** button
3. Allow location access when Chrome prompts (first time only)
4. Your coordinates auto-fill in the "From" field
5. Type your destination in the "To" field
6. Press Enter or click "Get Directions"
7. See the route from your current location!

### Tips for Best Results

- **Be Specific**: Include city/state for better accuracy
  - ✓ "Starbucks, 5th Avenue, New York, NY"
  - ✗ "Starbucks"
- **Use Full Addresses**: Complete addresses work best
  - ✓ "123 Main Street, Boston, MA"
  - ✗ "Main Street"
- **Include Country**: For international routes
  - ✓ "Paris, France" to "London, UK"
  - ✓ "Tokyo Tower, Japan" to "Osaka Castle, Japan"

### Keyboard Shortcuts

- **Enter in origin field**: Jump to destination field
- **Enter in destination field**: Get directions
- **Tab**: Navigate between fields and buttons

## Technical Details

### File Structure

```
QuickMaps/
├── manifest.json         # Extension configuration (Manifest V3)
├── popup.html            # UI structure with 400x500 dimensions
├── popup.css             # Beautiful gradient styling and animations
├── popup.js              # Directions logic and geolocation
├── secrets.js            # Your API key (gitignored)
├── secrets.example.js    # Template for secrets.js
├── .gitignore            # Protects secrets.js from being committed
├── icon16.png            # Toolbar icon (16x16)
├── icon48.png            # Extension manager icon (48x48)
├── icon128.png           # Chrome Web Store icon (128x128)
├── README.md             # Project overview
├── SETUP.md              # Installation instructions
├── QUICKSTART.md         # Quick start guide
├── USAGE.md              # This file
└── FEATURES.md           # Technical features
```

### How It Works

**1. Initialization (popup.js)**

```javascript
- Loads secrets.js with API key
- Creates iframe with default map view (Houston, TX)
- Sets up event listeners for inputs and buttons
- Initializes geolocation handler
```

**2. Directions Process**

```javascript
- User enters origin and destination (or uses geolocation)
- JavaScript captures the inputs
- Maps Embed API URL is constructed with origin/destination
- Iframe src is updated with directions URL
- Map displays full route with turn-by-turn directions
```

**3. Geolocation Process**

```javascript
- User clicks "📍 My Location" button
- Browser requests permission (first time)
- navigator.geolocation.getCurrentPosition() called
- Coordinates are retrieved (lat, lng)
- Origin field is populated with coordinates
- Destination field is focused for user input
```

**4. UI Rendering (popup.css)**

```css
- Fixed 400x500 viewport
- Flexbox layout for responsive sections
- Purple-blue gradient theme (#667eea to #764ba2)
- Smooth hover animations with transforms
- Box shadows for depth
- Rounded corners (8px border-radius)
```

### API Usage

**Google Maps APIs Used:**

- **Maps Embed API**: Displays maps and directions in iframe
  - `/v1/view` mode: Default map view
  - `/v1/directions` mode: Route between two points

**Browser APIs Used:**

- **Geolocation API**: Gets user's current GPS coordinates
  - `navigator.geolocation.getCurrentPosition()`
  - Requires user permission

### Code Architecture

**popup.js Functions:**

- `loadDirections(origin, destination)`: Constructs and loads directions URL
- Event listeners: Handle button clicks, Enter key, geolocation
- Geolocation handler: Manages location permission and coordinate retrieval

**CSS Organization:**

- Modern gradients and color schemes
- Component-based styling (header, directions, map)
- Interactive hover and focus states
- Smooth transitions and transforms
- Flexbox layout for responsiveness

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

**1. "Google Maps Platform rejected your request" / "Not authorized"**

- **Solution**: Enable Maps Embed API in Google Cloud Console
- Go to: https://console.cloud.google.com/apis/library/maps-embed-backend.googleapis.com
- Click "Enable" and wait 1-2 minutes
- Reload the extension

**2. Map Not Loading / Blank iframe**

- Check `secrets.js` exists and has your real API key
- Verify API key has no extra quotes, spaces, or line breaks
- Ensure billing is enabled on Google Cloud project
- Check browser console for error messages

**3. "📍 My Location" Button Not Working**

- Click the button and allow location permission when prompted
- Check Chrome location settings: chrome://settings/content/location
- If blocked, reset extension permissions
- Ensure you're using HTTPS or localhost (geolocation requirement)

**4. Extension Icon Not Showing**

- Reload the extension in chrome://extensions/ (click ⟳)
- Ensure all icon files exist (icon16.png, icon48.png, icon128.png)
- Check manifest.json has correct icon paths

**5. Directions Not Displaying**

- Enter both origin AND destination (both fields required)
- Try more specific addresses with city/state
- Check that coordinates are valid if using "My Location"
- Ensure Maps Embed API is enabled (not Maps JavaScript API)

### Developer Tools

Open Chrome DevTools while popup is open:

1. Right-click on the extension popup
2. Select "Inspect"
3. Check Console tab for errors
4. Check iframe src URL in Elements tab
5. Use Network tab to verify API calls

### Location Permission Issues

If geolocation is blocked:

1. Go to chrome://extensions/
2. Find QuickMaps → Click "Details"
3. Scroll to "Permissions" → Check "Location"
4. Or: Click the lock icon in the popup → Set Location to "Allow"

## Privacy & Permissions

### Permissions Used

- **Geolocation**: Required for "📍 My Location" feature
  - Only accessed when you click the location button
  - Browser prompts for permission (one-time approval)
  - You can deny permission and still use manual addresses
- All Google Maps API calls are standard HTTPS requests
- No user data is stored or collected
- No tracking or analytics included

### Data Usage

- Directions queries are sent to Google Maps Embed API
- Geolocation coordinates used only for directions (not stored)
- No search history is stored
- No personal information is collected
- API key stored locally in gitignored `secrets.js`
- Extension works entirely in the browser

### Security

- API key never committed to version control (.gitignore)
- Recommended: Restrict API key to your extension ID in Google Cloud
- No external script loading (CSP-compliant)
- All data processed client-side

## Updates & Maintenance

### Version 1.0.0

- Directions functionality with origin/destination
- Geolocation support ("My Location" button)
- Beautiful gradient UI with animations
- Maps Embed API integration (Manifest V3 compliant)
- Secure API key storage (gitignored secrets.js)
- Beginner-friendly code with extensive comments

### Future Enhancement Ideas

- Multiple route options (fastest, shortest, avoid tolls)
- Different travel modes (driving, walking, transit, cycling)
- Save favorite routes
- Recent directions history
- Different map views (satellite, terrain)
- Dark mode support
- Waypoints for multi-stop routes
- Estimated time and distance display

## Support

For issues or questions:

1. Check this USAGE.md file
2. Review SETUP.md for installation help
3. Check the code comments in each file
4. Verify your API key is valid and properly configured

## Educational Value

This extension is designed to be beginner-friendly and teach modern web development:

- **HTML**: Semantic popup structure and form elements
- **CSS**: Modern gradients, animations, flexbox, and transforms
- **JavaScript**: Event handling, geolocation API, and iframe manipulation
- **Chrome Extensions**: Manifest V3 architecture and permissions
- **Google Maps Embed API**: Real-world API integration (iframe-based)
- **Security**: Gitignore patterns and API key protection
- **Browser APIs**: Geolocation with permission handling

Each file includes detailed comments explaining the code!

## Example Use Cases

### Daily Commute

- Click "📍 My Location"
- Type "Work" or your office address
- Get instant directions

### Travel Planning

- From: "Hotel in Paris"
- To: "Eiffel Tower"
- See the walking/driving route

### Finding Nearby Places

- Click "📍 My Location"
- Type "Nearest Hospital" or "Starbucks"
- Get directions from your current position

### Cross-Country Routes

- From: "New York, NY"
- To: "Los Angeles, CA"
- See the full driving route across the US
