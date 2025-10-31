# Quick Maps - Quick Start Guide

Get up and running with Quick Maps in 5 minutes!

## Prerequisites

- Google Chrome browser
- Google Maps API key ([Get one free](https://console.cloud.google.com/))

## Installation (3 Steps)

### Step 1: Get Your API Key

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable **Maps Embed API** (this is the only API you need!)
4. Create credentials → API Key
5. Copy your API key

### Step 2: Configure the Extension

1. Copy `secrets.example.js` to `secrets.js`:

   ```bash
   cp secrets.example.js secrets.js
   ```

2. Open `secrets.js` and replace the placeholder with your actual API key:

   ```javascript
   const GOOGLE_MAPS_API_KEY = "AIzaSyABC123...YOUR_KEY_HERE...";
   ```

3. **Important**: `secrets.js` is gitignored and will NOT be committed to version control

### Step 3: Load in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right)
3. Click **Load unpacked**
4. Select the `QuickMaps` folder
5. Done! The extension icon appears in your toolbar

## First Directions

1. **Click** the Quick Maps icon in Chrome toolbar
2. **Enter starting point**: Type "New York, NY" or click "📍 My Location"
3. **Enter destination**: Type "Boston, MA"
4. **Click** "Get Directions" or press Enter
5. **See** the route on the map instantly!

## Try These Routes

- From: "Los Angeles, CA" → To: "San Francisco, CA"
- From: "London, UK" → To: "Paris, France"
- From: Your location → To: "Nearest Starbucks"
- From: "Times Square, New York" → To: "Statue of Liberty"

## Keyboard Shortcuts

- **Enter in origin field**: Jump to destination field
- **Enter in destination field**: Get directions
- **Tab**: Navigate between fields

## Need Help?

- **Setup Issues**: See [SETUP.md](SETUP.md)
- **Usage Questions**: See [USAGE.md](USAGE.md)
- **Technical Details**: See [FEATURES.md](FEATURES.md)

## Quick Troubleshooting

| Problem                      | Solution                                |
| ---------------------------- | --------------------------------------- |
| Map doesn't load             | Check API key in `secrets.js`           |
| "Not authorized" error       | Enable Maps Embed API in Google Cloud   |
| Extension not visible        | Enable Developer mode                   |
| Location button doesn't work | Allow location permission when prompted |

## File Overview

```
QuickMaps/
├── manifest.json         # Extension config
├── popup.html            # UI structure
├── popup.css             # Beautiful gradient styling
├── popup.js              # Directions & geolocation logic
├── secrets.js            # YOUR API KEY (gitignored, create from example)
├── secrets.example.js    # Template for secrets.js
├── .gitignore            # Prevents committing secrets.js
└── icon*.png             # Extension icons
```

## What Makes This Great?

✓ **One API Only**: Just enable Maps Embed API  
✓ **Secure**: API key stored in gitignored file  
✓ **Modern Design**: Beautiful gradients and animations  
✓ **Geolocation**: Use your current location as starting point  
✓ **MV3 Compliant**: Works with latest Chrome extension standards  
✓ **No External Scripts**: Uses iframe Embed API (CSP-safe)

## Next Steps

Once it's working:

1. Try different routes and locations
2. Use the "📍 My Location" button
3. Customize the gradient colors in `popup.css`
4. Change the default map center in `popup.js`
5. Add your own features!

## Security Note

🔒 Never share your API key publicly!

- `secrets.js` is gitignored by default
- Add HTTP referrer restrictions in Google Cloud Console
- Restrict to: `chrome-extension://<YOUR_EXTENSION_ID>/*`

## That's It!

You now have a working Chrome extension with directions and geolocation. Happy mapping! 🗺️
