// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "checkAndRedirect") {
        checkAndRedirect();
    }
});

function checkAndRedirect() {
    const currentUrl = window.location.href;

    if (currentUrl.includes("/shorts/")) {
        const newUrl = currentUrl.replace("/shorts/", "/watch/");
        window.location.href = newUrl;
    }
}
