let zIndex = 8;

function onLoad() {
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
    },1000);
    setTimeout(openWindow1, 2500);
    setTimeout(openWindow2, 2800);
    setTimeout(openWindow3, 3100);
    if (document.addEventListener) {
        document.addEventListener("click", function () {
            document.getElementById("context-menu").style.display = "none";
        })
    }
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
            getMousePosition();
            e.preventDefault();
            document.getElementById("context-menu").style.display = "table";
        }, false);
    }
    document.getElementById("a-github").onclick = function () {window.open('https://github.com/neostetic', '_blank')};
    document.getElementById("a-twitter").onclick = function () {window.open('https://twitter.com/neostetic', '_blank')};
    document.getElementById("a-instagram").onclick = function () {window.open('https://www.instagram.com/neopogger/', '_blank')};
}

function getMousePosition() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        let eventDoc, doc, body;
        event = event || window.event; // IE-ism
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
    }
    if (event.pageX >= window.innerWidth - 300) {
        document.getElementById("context-menu").style.left = event.pageX - 300 + "px";
    } else {
        document.getElementById("context-menu").style.left = event.pageX + "px";
    }
    if (event.pageY >= window.innerHeight - 126) {
        document.getElementById("context-menu").style.top = event.pageY - 126 + "px";
    } else {
        document.getElementById("context-menu").style.top = event.pageY + "px";
    }
}

function closeWindow(windowId) {
    let popup;
    switch (windowId) {
        case 1: popup = document.getElementById("popup1"); break;
        case 2: popup = document.getElementById("popup2"); break;
        case 3: popup = document.getElementById("popup3"); break;
        case 4: popup = document.getElementById("popup-projects"); break;
        default: break;
    }
    popup.style.display = "none";
    popup.style.zIndex = zIndex + "";
    zIndex++;
}

function openWindow(windowId) {
    let popup;
    switch (windowId) {
        case 1: popup = document.getElementById("popup1"); break;
        case 2: popup = document.getElementById("popup2"); break;
        case 3: popup = document.getElementById("popup3"); break;
        case 4: popup = document.getElementById("popup-projects"); break;
        default: popup = document.getElementById(windowId); break;
    }
    popup.style.display = "table";
    popup.style.zIndex = zIndex + "";
    zIndex++;
}

function openWindow1() {openWindow(1)}
function openWindow2() {openWindow(2)}
function openWindow3() {openWindow(3)}