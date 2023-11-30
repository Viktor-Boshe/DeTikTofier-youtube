// background.js
chrome.webNavigation.onCompleted.addListener(details => {
    chrome.tabs.sendMessage(details.tabId, { action: "checkAndRedirect" });
});
