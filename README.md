# Mute Master

Mute Master is a lightweight browser extension that allows you to quickly see and control audio in open tabs. You can mute, unmute, and focus tabs that are currently playing sound. Additionally, it supports your system's dark mode preference and includes a close button to easily close tabs directly from the popup.

## Features

- **List Audible Tabs:** Quickly see which tabs are currently playing audio.
- **Mute/Unmute Tabs:** Toggle the audio state with a single click.
- **Quick Navigation:** Click on a listed tab to focus and bring it to the front.
  
## Installation

1. **Clone or Download the Project:**
   - Download the project as a `.zip` file and extract it, or clone the repository using:
     ```bash
     git clone https://github.com/YourUsername/MuteMaster.git
     ```

2. **Open the Extensions Page in Chrome or Safari:**
   - **For Chrome:** Go to `chrome://extensions/` in the address bar.
   - **For Safari:** Enable the Develop menu in Safari’s preferences and then use `Develop > Show Extension Builder`.

3. **Enable Developer Mode (Chrome Only):**
   - In Chrome’s Extensions page, toggle on **Developer mode** in the upper-right corner.

4. **Load the Unpacked Extension (Chrome):**
   - Click **Load unpacked** and select the folder containing the `manifest.json` file.
   
   **Load Extension (Safari):**
   - In Safari’s Extension Builder, select **Add Extension**, and choose the project folder.

5. **Verify and Pin the Extension:**
   - If using Chrome, pin the extension icon to your toolbar for quick access.
   - On Safari, ensure the extension is enabled in Safari’s Preferences > Extensions.

## Usage

1. **Open the Extension Popup:**
   - Click the extension icon to open the popup.

2. **View Audible Tabs:**
   - The popup lists all currently audible tabs.
   - Each entry displays the tab’s title.

3. **Mute/Unmute a Tab:**
   - Click the speaker icon to toggle the audio state.
   - Mute if it’s unmuted, unmute if it’s muted.
   - The icon updates to show the current state.

4. **Focus a Tab:**
   - Click anywhere on the tab’s row (except on the mute or close icons) to bring that tab into focus.
   - The browser window and tab will become active.

5. **Close a Tab:**
   - Click the close button (the “X” icon) to close the tab immediately.

6. **Dark/Light Mode:**
   - The extension checks your system’s color scheme.
   - If your OS is in dark mode, the popup uses a dark theme automatically.
   - If you switch modes, the extension updates on the fly.

## Troubleshooting

- **No Audible Tabs:**  
  If no tabs are playing sound, the popup will display a "No audible tabs available" message.
  
- **Button Icons Not Appearing:**  
  Ensure the `images` folder and icons (`muted.png`, `unmuted.png`, `close.png`) are in the correct directory as referenced in the code. Adjust file paths in `icons` if needed.

- **Permission Issues:**
  The extension requires `tabs` permission to query and control tabs. Ensure it’s granted during the installation process.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/my-new-feature