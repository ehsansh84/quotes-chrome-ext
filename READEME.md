To use this extension:

1. Clone this repo.
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select your extension directory.

This extension will now:
1. Display a random quote when opened.
2. Show a "New Quote" button to get another random quote.
3. Attempt to get the user's location (with permission).
4. Display the current weather for the user's location at the bottom of the popup, using the wttr.in service.

This approach eliminates the need for an API key while still providing weather information for the extension.
