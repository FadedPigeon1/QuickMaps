# QuickMaps

Quick Maps is a lightweight, modern Chrome extension that lets you get instant driving directions and explore places without ever leaving your current tab. Open the popup, enter your starting point (or use your current location), search a destination, and boom — a live Google Map route appears instantly. No new tabs. No distractions. Just fast navigation.

## 📖 Documentation

Everything you need to know is documented in the following guides:

- **[Quick Start Guide](QUICKSTART.md)** - Get up and running in 5 minutes!
- **[Setup Guide](SETUP.md)** - Detailed instructions on getting your Google Maps API key and installing the extension.
- **[Usage Guide](USAGE.md)** - Learn how to use all the features, shortcuts, and get the best directions.
- **[Features & Technical Details](FEATURES.md)** - Deep dive into how the extension is built, file structures, and core features.

## ✨ Key Features

- **🗺️ Instant Directions**: Get driving routes between any two points instantly.
- **📍 Geolocation**: One-click "My Location" to get directions directly from where you are.
- **🖥️ No Context Switching**: A compact 400x500 popup that doesn't disrupt your browsing experience.
- **🎨 Beautiful UI**: Modern aesthetic with purple-blue gradients and smooth animations.
- **⌨️ Keyboard Support**: Fully navigable via keyboard with intuitive Enter and Tab key handling.

## 🚀 Quick Setup

1. Clone or download this repository.
2. Get a free Google Maps API key (enable **Maps Embed API**).
3. Copy `secrets.example.js` to `secrets.js` and add your API key.
4. Open Chrome and go to `chrome://extensions/`.
5. Enable **Developer mode** and click **Load unpacked**, then select this folder.

_(For detailed instructions, see the [Setup Guide](SETUP.md) or [Quick Start](QUICKSTART.md))_

## 🛠️ Technology Stack

- **HTML5 / CSS3 / Vanilla JavaScript** - No heavy frameworks!
- **Chrome Extensions API (Manifest V3)** - Built to modern extension standards.
- **Google Maps Embed API via `<iframe>`** - Uses an Inline Frame (`iframe`) to embed a secure, lightweight, and fully interactive Google Map directly from Google's servers. This prevents the need to load heavy external JavaScript libraries and keeps the extension fast.

---

_Built for fast, distraction-free navigation._
