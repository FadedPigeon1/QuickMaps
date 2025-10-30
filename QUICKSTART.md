# Quick Maps - Quick Start Guide

Get up and running with Quick Maps in 5 minutes!

## Prerequisites
- Google Chrome browser
- Google Maps API key ([Get one free](https://console.cloud.google.com/))

## Installation (3 Steps)

### Step 1: Get Your API Key
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable **Maps JavaScript API** and **Geocoding API**
4. Create credentials → API Key
5. Copy your API key

### Step 2: Configure the Extension
Open `popup.html` and find line 35:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
```

Replace `YOUR_API_KEY` with your actual API key:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABC123...&libraries=places"></script>
```

### Step 3: Load in Chrome
1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right)
3. Click **Load unpacked**
4. Select the `QuickMaps` folder
5. Done! The extension icon appears in your toolbar

## First Search

1. **Click** the Quick Maps icon in Chrome toolbar
2. **Type** a location: "Paris, France"
3. **Press** Enter or click Search
4. **See** the map update instantly!

## Try These Searches

- "Tokyo Tower, Japan"
- "1600 Amphitheatre Parkway, Mountain View, CA"
- "Eiffel Tower"
- "Times Square, New York"
- "Sydney Opera House"
- "Big Ben, London"

## Keyboard Shortcuts

- **Enter**: Search from input field
- **Tab**: Navigate between input and button

## Need Help?

- **Setup Issues**: See [SETUP.md](SETUP.md)
- **Usage Questions**: See [USAGE.md](USAGE.md)
- **Technical Details**: See [FEATURES.md](FEATURES.md)

## Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Map doesn't load | Check API key is correct |
| "Location not found" | Try more specific search terms |
| Extension not visible | Enable Developer mode |
| Search not working | Verify Geocoding API is enabled |

## File Overview

```
QuickMaps/
├── manifest.json     # Extension config (edit version/name here)
├── popup.html        # UI structure (ADD YOUR API KEY HERE)
├── popup.css         # Styling (edit colors here)
├── popup.js          # Functionality (edit behavior here)
└── icon*.png         # Extension icons
```

## What Makes This Beginner-Friendly?

✓ **Extensive Comments**: Every line explained  
✓ **Simple Structure**: HTML, CSS, JS clearly separated  
✓ **Clean Code**: Easy to read and understand  
✓ **No Build Tools**: Just edit and reload  
✓ **Modern Practices**: Learn current best practices  
✓ **Real API**: Work with actual Google Maps API  

## Next Steps

Once it's working:
1. Experiment with different searches
2. Read the code comments to understand how it works
3. Try modifying colors in popup.css
4. Change the default location in popup.js
5. Add your own features!

## Security Note

🔒 Never share your API key publicly! Add domain restrictions in Google Cloud Console to protect it.

## That's It!

You now have a working Chrome extension. Happy mapping! 🗺️
