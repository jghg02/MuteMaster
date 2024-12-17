document.addEventListener('DOMContentLoaded', () => {
  // Detect dark mode preference and apply it
  function applyColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // Initial check and setup listener
  applyColorScheme();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyColorScheme);

  // Get the list and message elements
  const tabList = document.getElementById('tabList');
  const noTabsMessage = document.getElementById('noTabsMessage');

  // Define the paths to the icons
  const icons = {
    muted: "images/muted.png",
    unmuted: "images/unmuted.png"
  };

  // Query all tabs
  chrome.tabs.query({}, (tabs) => {
    let hasAudibleTabs = false;

    tabs.forEach((tab) => {
      if (tab.audible) {
        hasAudibleTabs = true;

        const tabItem = document.createElement('div');
        tabItem.className = 'tab-item';
        tabItem.style.cursor = 'pointer';

        const tabTitle = document.createElement('span');
        tabTitle.className = 'tab-title';
        tabTitle.textContent = tab.title;

        const muteButton = document.createElement('button');
        muteButton.className = 'mute-button';

        const icon = document.createElement('img');
        icon.src = tab.mutedInfo.muted ? icons.muted : icons.unmuted;
        icon.width = 20;
        icon.height = 20;

        muteButton.appendChild(icon);

        muteButton.addEventListener('click', (event) => {
          event.stopPropagation();

          // Always fetch the current state of the tab before toggling
          chrome.tabs.get(tab.id, (currentTab) => {
            const newMutedState = !currentTab.mutedInfo.muted;
            chrome.tabs.update(tab.id, { muted: newMutedState }, (updatedTab) => {
              icon.src = updatedTab.mutedInfo.muted ? icons.muted : icons.unmuted;
            });
          });
        });

        tabItem.addEventListener('click', () => {
          chrome.tabs.update(tab.id, { active: true });
          chrome.windows.update(tab.windowId, { focused: true });
        });

        tabItem.appendChild(tabTitle);
        tabItem.appendChild(muteButton);
        tabList.appendChild(tabItem);
      }
    });

    if (!hasAudibleTabs) {
      noTabsMessage.style.display = 'block';
    }
  });
});
