const pressEnter = document.getElementById("press-enter");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("main-content");

// Hide "Press to Enter" initially
pressEnter.style.display = "none";

// Show it after 1 second
setTimeout(() => {
    pressEnter.style.display = "block";
}, 1000);

function enterSite() {
    intro.style.opacity = 0;
    setTimeout(() => {
        intro.style.display = "none";
        mainContent.style.display = "block";
        setTimeout(() => {
            mainContent.style.opacity = 1;
        }, 50);
        document.body.style.overflow = "auto";
    }, 1000);
}

// Click or key press to enter
pressEnter.addEventListener("click", enterSite);
document.addEventListener("keydown", enterSite);
