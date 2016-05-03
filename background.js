function filter() {
    var x = document.querySelectorAll('.contents .item');
    for (var i = 0; i < x.length; i++) {
        var y = x[i].querySelector('.zm-item-vote-count');
        if (y) {
            var vote = parseInt(y.innerHTML);
            if (vote < 30) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
        else {
            x[i].parentNode.removeChild(x[i]);
        }
    }
}


chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: "(" + filter.toString() + ")()"
    });
});
