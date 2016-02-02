'use strict';

var appData = {
    tabs: []
};

var getTabs = function () {
    chrome.tabs.query({}, function (t) {
        appData.tabs = t;
    });
};

chrome.window.getAll(function(windows) {console.log(windows)});

var app = new Vue({
    el: '#tg-window',
    data: appData,
    ready: function () {
        getTabs();
    },
    methods: {
        // Binding to it directly doesn't work, so... This works!
        uriToStyle: function(uri) {
            return uri;
        }
    }
});