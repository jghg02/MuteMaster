// Define the paths to your icons
const icons = {
  muted: {
    "19": "images/muted.png",    // Path to your 19x19 muted icon
    "38": "images/muted.png"     // Path to your 38x38 muted icon
  },
  unmuted: {
    "19": "images/unmuted.png",  // Path to your 19x19 unmuted icon
    "38": "images/unmuted.png"   // Path to your 38x38 unmuted icon
  }
};

// Function to toggle the mute state of the current tab and update the icon
function toggleMute(tab) {
  let isMuted = tab.mutedInfo.muted;
  chrome.tabs.update(tab.id, { muted: !isMuted }, (updatedTab) => {
    updateIcon(updatedTab);
  });
}

// Function to update the browser action icon based on the tab's mute state
function updateIcon(tab) {
  let iconPath = tab.mutedInfo.muted ? icons.muted : icons.unmuted;
  chrome.browserAction.setIcon({ path: iconPath, tabId: tab.id });
}

// Listen for a click on the browser action (extension icon)
chrome.browserAction.onClicked.addListener((tab) => {
  toggleMute(tab);
});

// Update the icon when the tab is updated (e.g., becomes muted/unmuted)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.mutedInfo) {
    updateIcon(tab);
  }
});

// Update the icon when the active tab changes
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    updateIcon(tab);
  });
});
