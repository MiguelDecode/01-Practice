/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
// Selecciona todos los section con un atributo id

function scrollActive() {
  const scrollY = window.scrollY;
  // Guarda en una variable el numero de pixeles que has sido desplazados en el scroll vertical

  sections.forEach((current) => {
    // Recorre los elementos guardados en la variable sections
    const sectionHeight = current.offsetHeight;
    // OffsetHeight devuelve el alto de un elmento
    const sectionTop = current.offsetTop - 50;
    // OffsetHeight devuelve la distancia del elemento al borde superior del elemento padre más cercano
    sectionId = current.getAttribute("id");
    // Guarda el atributo id del elemento actual

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
// Escucha el evento scroll y ejecuta la furción scrollActive

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
