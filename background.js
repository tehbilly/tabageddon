// var settings = new Store("settings", {
//     "BeAggressive": "Be-eee aggressive"
// });

// Listen for commands
chrome.commands.onCommand.addListener(function(cmd) {
    console.log('Got cmd:', cmd);
    
    chrome.tabs.query({}, function(tabs) {
        console.log(tabs);
    })
    
    chrome.windows.create({
        url: "popup/window.html",
        type: "detached_panel"
    });
});