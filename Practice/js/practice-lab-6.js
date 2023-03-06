

var myWindow = window.open("http://foo.com/bar.html", "My Foo Window", "width=900,height=600,scrollbars=3");

if (myWindow == null || typeof(myWindow) == "undefined") {
    alert("Popup blocker is enabled. Please allow popups for this site.");
} else {
    myWindow.focus();
}
