# Quick Maps Setup Guide

## Overview

Quick Maps is a Chrome extension that provides instant driving directions using Google Maps. Get directions from your current location or any starting point without leaving your current tab.

## Prerequisites

- Google Chrome browser
- Google Maps API key (free to obtain)

## Getting a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable **Maps Embed API** (this is the ONLY API you need):
   - Go to [Maps Embed API](https://console.cloud.google.com/apis/library/maps-embed-backend.googleapis.com)
   - Click "Enable"
4. Go to "Credentials" and create an API key
5. Copy your API key

**Important**: You only need the **Maps Embed API**. You do NOT need:

- ❌ Maps JavaScript API
- ❌ Geocoding API
- ❌ Places API
- ❌ Directions API

## Installation Steps

### 1. Configure the API Key Securely

1. Copy the example secrets file:

   ```bash
   cp secrets.example.js secrets.js
   ```

2. Open `secrets.js` and replace the placeholder:

   ```javascript
   const GOOGLE_MAPS_API_KEY = "YOUR_ACTUAL_API_KEY_HERE";
   ```

3. **Important**: `secrets.js` is automatically excluded from git via `.gitignore`

### 2. Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" using the toggle in the top-right corner
3. Click "Load unpacked"
4. Select the QuickMaps folder containing the extension files
5. The Quick Maps icon should now appear in your Chrome toolbar

### 3. Use the Extension

1. Click the Quick Maps icon in your Chrome toolbar
2. A 400x500 popup will appear with directions inputs and a map
3. **Option A**: Click "📍 My Location" to use your current position as starting point
4. **Option B**: Manually type a starting location in the "From" field
5. Type your destination in the "To" field
6. Click "Get Directions" or press Enter
7. The map will display the route with turn-by-turn directions

## Features

- **📍 Geolocation**: Use your current location as starting point
- **🗺️ Instant Directions**: Get routes between any two points
- **🎨 Modern UI**: Beautiful gradient design with smooth animations
- **⌨️ Keyboard Support**: Press Enter to get directions quickly
- **🔒 Secure**: API key stored in gitignored file
- **📱 Compact**: 400x500 popup that doesn't disrupt your browsing

## File Structure

```
QuickMaps/
├── manifest.json         # Chrome extension configuration (Manifest V3)
├── popup.html            # Main popup HTML structure
├── popup.css             # Beautiful gradient styling
├── popup.js              # Directions & geolocation logic
├── secrets.js            # YOUR API KEY (gitignored - create from example)
├── secrets.example.js    # Template for API key file
├── .gitignore            # Excludes secrets.js from version control
├── icon16.png            # 16x16 icon
├── icon48.png            # 48x48 icon
├── icon128.png           # 128x128 icon
├── README.md             # Project description
├── SETUP.md              # This setup guide
├── QUICKSTART.md         # Quick start instructions
├── USAGE.md              # Usage guide
└── FEATURES.md           # Technical features
```

## Troubleshooting

**Map doesn't load / "Not authorized" error:**

- Ensure Maps Embed API is enabled (not Maps JavaScript API)
- Check that `secrets.js` exists and has your real API key
- Verify API key has no extra quotes or whitespace
- Enable billing on Google Cloud project (free tier available)

**"My Location" button doesn't work:**

- Click "📍 My Location" and allow location permission when prompted
- Check browser location permissions in chrome://settings/content/location
- If blocked, reset permissions for the extension

**Extension doesn't appear:**

- Make sure Developer mode is enabled in `chrome://extensions/`
- Try reloading the extension (click ⟳)
- Check for errors in chrome://extensions

**Directions not showing:**

- Enter both origin and destination
- Try more specific addresses (include city/state)
- Check console for errors (right-click popup → Inspect)

## Security Best Practices

🔒 **Protect Your API Key:**

1. Never commit `secrets.js` to git (already in `.gitignore`)
2. Add HTTP referrer restrictions in Google Cloud Console:
   - Go to Credentials → Edit API Key
   - Set "Application restrictions" to "HTTP referrers"
   - Add: `chrome-extension://<YOUR_EXTENSION_ID>/*`
   - Get your extension ID from `chrome://extensions/`
3. Rotate your API key periodically

## Technical Details

- **Architecture**: Chrome Extension Manifest V3
- **API**: Google Maps Embed API (iframe-based)
- **CSP Compliant**: No external script loading (CSP-safe)
- **Permissions**: Geolocation for "My Location" feature
- **Browser Support**: Chrome, Edge, Brave (Chromium-based)

## Code Comments

All code files include detailed comments to help you understand:

- HTML structure and semantic elements
- Modern CSS with gradients and animations
- JavaScript geolocation and event handling
- Google Maps Embed API integration

## License

This is a beginner-friendly educational project. Feel free to modify and learn from it!
