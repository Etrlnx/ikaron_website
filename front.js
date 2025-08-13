const intro = document.getElementById("intro");
const mainContent = document.getElementById("main-content");
const pressEnter = document.getElementById("press-enter");

pressEnter.style.display = "none";

// Show "Press anywhere to enter" after company name fade-in
setTimeout(() => {
    pressEnter.style.display = "block";
}, 2000);

let hasEntered = false;
function enterSite() {
    if (hasEntered) return;
    hasEntered = true;

    // Play zoom + rotate + fade out animation
    intro.classList.add("zoom-animation");

    // Wait for zoom (2.5s) + 0.5s delay before homepage fade in
    setTimeout(() => {
        intro.style.display = "none";
        mainContent.style.display = "block";
        mainContent.classList.add("fade-up");
        document.body.style.overflow = "auto";
    }, 3000); // 2.5s animation + 0.5s delay
}

// Click anywhere on intro
intro.addEventListener("click", enterSite);

// Key press (Enter or Space)
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        enterSite();
    }
});
    
