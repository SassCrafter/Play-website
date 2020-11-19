function getElPos(element) {
    let topPos = element.getBoundingClientRect().top;
    return topPos;
}

function checkElemInView(element) {
    let elementPos = getElPos(element);
    if (elementPos < 500) {
        element.classList.add("animate");
    }
}


let video = document.querySelector(".hero-iframe-container");


window.addEventListener("scroll", function() {
    checkElemInView(video);
})

