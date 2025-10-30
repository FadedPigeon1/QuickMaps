# Quick Maps Setup Guide

## Overview
Quick Maps is a Chrome extension that allows you to search for locations and view them on an embedded Google Map without leaving your current tab.

## Prerequisites
- Google Chrome browser
- Google Maps API key (free to obtain)

## Getting a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Geocoding API
   - Places API
4. Go to "Credentials" and create an API key
5. Copy your API key

## Installation Steps

### 1. Configure the API Key

Open `popup.html` and replace `YOUR_API_KEY` with your actual Google Maps API key:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&libraries=places"></script>
```

### 2. Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" using the toggle in the top-right corner
3. Click "Load unpacked"
4. Select the QuickMaps folder containing the extension files
5. The Quick Maps icon should now appear in your Chrome toolbar

### 3. Use the Extension

1. Click the Quick Maps icon in your Chrome toolbar
2. A 400x500 popup will appear with a search bar and map
3. Type a location name or address in the search bar
4. Click "Search" or press Enter
5. The map will instantly update to show your searched location

## Features

- **Instant Search**: Search for any place and see it on the map immediately
- **Clean UI**: Simple, beginner-friendly interface
- **Compact Design**: 400x500 popup that doesn't disrupt your browsing
- **Keyboard Support**: Press Enter to search without clicking the button

## File Structure

```
QuickMaps/
├── manifest.json      # Chrome extension configuration
├── popup.html         # Main popup HTML structure
├── popup.css          # Styling for the popup
├── popup.js           # JavaScript functionality
├── icon16.png         # 16x16 icon
├── icon48.png         # 48x48 icon
├── icon128.png        # 128x128 icon
├── README.md          # Project description
└── SETUP.md          # This setup guide
```

## Troubleshooting

**Map doesn't load:**
- Ensure you've replaced `YOUR_API_KEY` with your actual API key
- Check that the Maps JavaScript API is enabled in Google Cloud Console

**Location not found:**
- Try being more specific with your search query
- Include city or country names for better results

**Extension doesn't appear:**
- Make sure Developer mode is enabled in `chrome://extensions/`
- Try reloading the extension

## Code Comments

All code files include detailed comments to help beginners understand:
- HTML structure and elements
- CSS styling choices
- JavaScript functionality and event handling
- Google Maps API integration

## License

This is a beginner-friendly educational project. Feel free to modify and learn from it!
