function showPopup(content, button) {
    document.getElementById("content").innerHTML = content;
    if (button != null) {
        document.getElementById("popupButton").innerHTML = button;
    }
    document.getElementById("popup").style = "display:block;";
    document.getElementById("background").style = "display:block;";
    document.body.style = "overflow:hidden;"
}

function hidePopup() {
    if (document.getElementById("menu") != null) {
        document.getElementById("menu").style = "transform: translateX(0px);";
    }
    document.getElementById("popup").style = "display:none;";
    document.getElementById("background").style = "display:none;";
    document.body.style = "overflow:hidden;"
}