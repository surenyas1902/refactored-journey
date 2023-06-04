"use strict";

let winDocument = window.document;
function setProps() {
    let container = winDocument.getElementById("mycontainer");
    container.style.width = window.innerWidth - 20;
    container.style.height = window.innerHeight;
}


MicroModal.init({
    onShow: function(modal) { console.info(`${modal.id} is shown`) }, // [1]
    onClose: function(modal) { console.info(`${modal.id} is hidden`)}, // [2]
    openTrigger: 'data-custom-open', // [3]
    closeTrigger: 'data-custom-close', // [4]
    openClass: 'is-open', // [5]
    disableScroll: true, // [6]
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: true // [10]
  });

/* Onload & On Resize initialization - Start */
window.addEventListener('resize', function(event) {
    setProps();
}, false);

window.addEventListener('load', function(event) {
    setProps();
});

/* Onload & On Resize initialization - End */

/* Button Declarations - Start */
var receivalButton = winDocument.getElementById("receival-btn");
var dispatchBtn = winDocument.getElementById("dispatch-btn");
var largeBtn = winDocument.getElementById("large-btn");
var smallBtn = winDocument.getElementById("small-btn");

var grossInBtn = winDocument.getElementById("grossInBtn");
var tareOutBtn = winDocument.getElementById("tareOutBtn");
var printReceivalBtn = winDocument.getElementById("printReceivalBtn");
var receivalClearBtn = winDocument.getElementById("receivalClearBtn");

var tareInBtn = winDocument.getElementById("tareInBtn");
var grossOutBtn = winDocument.getElementById("grossOutBtn");
var printDispatchBtn = winDocument.getElementById("printDispatchBtn");
var clearDispatchBtn = winDocument.getElementById("clearDispatchBtn");

var nav1 = winDocument.getElementById("nav-1");
var nav2 = winDocument.getElementById("nav-2");
var nav3 = winDocument.getElementById("nav-3");

var printTicket = winDocument.getElementById("printTicket");
var printTicket2 = winDocument.getElementById("printTicket2");
/* Button Declarations - End */

var user = "admin1";
var mainNavigation = winDocument.getElementById("main-navigations");

/* Action Implementations - Start */
receivalButton.addEventListener("click", function(event) {
    event.preventDefault();

    dispatchBtn.classList.remove("active");
    receivalButton.classList.add("active");

    var dispatchDocs = winDocument.getElementsByClassName("dispatch-inputs");
    for(var i = 0; dispatchDocs && dispatchDocs.length > 0 && i < dispatchDocs.length ; i++) {
        let dispatchDoc = dispatchDocs[i];
        if (dispatchDoc) {
            dispatchDoc.setAttribute("hidden", "true");
        }
    }

    var receivalDocs = winDocument.getElementsByClassName("receival-inputs");
    for(var i = 0; receivalDocs && receivalDocs.length > 0 && i < receivalDocs.length ; i++) {
        let receivalDoc = receivalDocs[i];
        if (receivalDoc) {
            receivalDoc.removeAttribute("hidden")
        }
    }
});

dispatchBtn.addEventListener("click", function(event) {
    event.preventDefault();

    receivalButton.classList.remove("active");
    dispatchBtn.classList.add("active");

    var receivalDocs = winDocument.getElementsByClassName("receival-inputs");
    for(var i = 0; receivalDocs && receivalDocs.length > 0 && i < receivalDocs.length ; i++) {
        let receivalDoc = receivalDocs[i];
        if (receivalDoc) {
            receivalDoc.setAttribute("hidden", "true");
        }
    }

    var dispatchDocs = winDocument.getElementsByClassName("dispatch-inputs");
    for(var i = 0; dispatchDocs && dispatchDocs.length > 0 && i < dispatchDocs.length ; i++) {
        let dispatchDoc = dispatchDocs[i];
        if (dispatchDoc) {
            dispatchDoc.removeAttribute("hidden");
        }
    }
});

grossInBtn.addEventListener("click", function(event) {
    event.preventDefault();
});

tareOutBtn.addEventListener("click", function(event) {
    event.preventDefault();
});

printReceivalBtn.addEventListener("click", function(event) {
    event.preventDefault();
    //MicroModal.show("receival-print-dialogs");
    MicroModal.show("receival-print-ticket");
    //MicroModal.show("receival-print-ticket2");
});

receivalClearBtn.addEventListener("click", function(event) {
    event.preventDefault();
});

tareInBtn.addEventListener("click", function(event) {
    event.preventDefault();
});

grossOutBtn.addEventListener("click", function(event) {
    event.preventDefault();
});

printDispatchBtn.addEventListener("click", function(event) {
    event.preventDefault();
});

clearDispatchBtn.addEventListener("click", function(event) {
    event.preventDefault();
});

nav1.addEventListener("click", function(event) {
    var navItem = document.getElementById("nav-items-1");
    var mainNavItem = document.getElementById("main-navigation-1");
    if (nav1.classList.contains("closed")) {
        nav1.classList.remove("closed");
        navItem.removeAttribute("hidden");
        mainNavItem.classList.remove("closed");
    } else {
        navItem.setAttribute("hidden", "true");
        nav1.classList.add("closed");
        mainNavItem.classList.add("closed");
    }
});

nav2.addEventListener("click", function(event) {
    event.preventDefault();
    var navItem = document.getElementById("nav-items-2");
    var mainNavItem = document.getElementById("main-navigation-2");
    if (nav2.classList.contains("closed")) {
        nav2.classList.remove("closed");
        navItem.removeAttribute("hidden");
        mainNavItem.classList.remove("closed");
    } else {
        navItem.setAttribute("hidden", "true");
        nav2.classList.add("closed");
        mainNavItem.classList.add("closed");
    }
});

nav3.addEventListener("click", function(event) {
    event.preventDefault();
    var navItem = document.getElementById("nav-items-3");
    var mainNavItem = document.getElementById("main-navigation-3");
    if (nav3.classList.contains("closed")) {
        nav3.classList.remove("closed");
        navItem.removeAttribute("hidden");
        mainNavItem.classList.remove("closed");
    } else {
        navItem.setAttribute("hidden", "true");
        nav3.classList.add("closed");
        mainNavItem.classList.add("closed");
    }
});

printTicket.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    //get the content from "print-ticket-content" id.
});

printTicket2.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    //get the content from "print-ticket-content2" id.
});

winDocument.querySelectorAll("#receival-log-table table tbody").forEach(function(event) {
    event.addEventListener("click", function(clickEvent) {
        clickEvent.target.parentNode.classList.toggle("selected");
    })
})

winDocument.querySelectorAll("#dispatch-log-table table tbody").forEach(function(event) {
    event.addEventListener("click", function(clickEvent) {
        clickEvent.target.parentNode.classList.toggle("selected");
    })
})

if (user != "admin") {
    mainNavigation.classList.add("non-admin-user");
}

/* Action Implementations - End */

/*Custom Actions - Start */
receivalButton.click();
/*Custom Actions - End */
