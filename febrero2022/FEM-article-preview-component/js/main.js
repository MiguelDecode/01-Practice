// Grab DOOM Elements
const shareIcon = document.querySelector(".card__share")
const tooltip = document.querySelector(".tooltip")

// Listen for click events
shareIcon.addEventListener("click", () => {
    tooltip.classList.toggle("active")
})