let activeIndex = 0;

// Grab Doom elements
const questionElements = document.querySelectorAll(".faq__question");

questionElements(activeIndex).classList.add("active")

// Listen for events
questionElements.forEach((element, index) => { 
    element.addEventListener("click", (event) => { 
        activeIndex = index
        const item = event.target
        item.classList.toggle("active")
    })
});


// Todavia faltan conocimientos suficientes de JavaScript para terminar el ejercicio 