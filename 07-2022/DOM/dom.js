// Clase 60 Web Apis

/* console.log(window);
      console.log(document);

      let texto = "Como realizar un loquendo en pleno 2022 hablando spanglish"; 
      const hablar = (texto) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

      hablar(texto); */

//Clase 61 DOM: Introducción

/* console.log("Elementos del documento");
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 5000);
document.write('<h2>Hola Mundo desde el DOM</h2>'); */

// Clase 62 DOM: Nodos, elementos y Selectores

/* console.log(document.getElementsByTagName("li")); // No usar
console.log(document.getElementsByClassName("card")); // No usar
console.log(document.getElementsByName("nombre")); // No usar

console.log(document.getElementById("menu")); // Más eficiente que usar un querySelector()
console.log(document.querySelector("#menu")); // Permite usar cualquier selector valido de css excepto seudoelementos. Solo devuelve el primer elemento encontrado
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
document.querySelectorAll("a").forEach((n) => console.log(n));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelector("#menu li")); */

// Clase 63 DOM: Atributos y Data-Attributes

/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
document.documentElement.lang = "en";
console.log(document.documentElement.getAttribute("lang"));
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.getAttribute("lang"));

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); */

// Data-Attributes

/* console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.getAttribute("data-description"));
$linkDOM.dataset.description = "Subscríbete a mi canal y comparte";
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); */

// CLase 64 DOM: Estilos y variables CSS

/* const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM)); */

// Variables CSS - Custom Propierties

/* const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#333");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor); */

// Clase 65 DOM: Classes con CSS

/* const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.classList);
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia"); */

// Clase 66 DOM: Texto y HTML

/* const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML
</p>
<p>
Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
<mark> El DOM no es parte de la especificación de JavaScript es una API para los navegadores.</mark>
</p>`;

$whatIsDOM.innerText = text; // No forma parte del estándar
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;

$whatIsDOM.outerHTML = text; */

// Clase 67 DOM: Traversing - Recorriendo el DOM.

/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.childNodes);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest('div')); // Método que busca el ancestro más cercano del tipo de selector indicado
console.log($cards.children[3].closest('section')); */

// Clase 68 DOM: Creando elementos y fragmentos.

/* const $figure = document.createElement("figure");
const $image = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");
const $cards = document.querySelector(".cards");
const $figure2 = document.createElement("figure");

$image.setAttribute("src", "https://placeimg.com/200/200/animals");
$image.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($image);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src='https://placeimg.com/200/200/people' alt='People'>
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const seasons = ["Primavera", "Verano", "Otoño", "Invierno"];
const $ul = document.createElement("ul");

document.write("<h3>Seasons of the year</h3>");
document.body.appendChild($ul);

seasons.forEach((n) => {
  const $li = document.createElement("li");
  $li.textContent = n;
  $ul.appendChild($li);
});

const continents = ["Africa", "América", "Asia", "Europa", "Oceanía"];
const $ul2 = document.createElement("ul");

document.write("<h3>Continents of the World</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continents.forEach((n) => ($ul2.innerHTML += `<li>${n}</li>`));

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

months.forEach((n) => {
  const $li = document.createElement("li");
  $li.textContent = n;
  $fragment.appendChild($li);
});

document.write("<h3>Months of the Year</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); */

// Clase 69 DOM: Templates HTML

/* const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();
const cardContent = [
  {
    title: "Tecnología",
    img: "https://placeimg.com/200/200/tech",
  },
  {
    title: "Animales",
    img: "https://placeimg.com/200/200/animals",
  },
  {
    title: "Arquitectura",
    img: "https://placeimg.com/200/200/arch",
  },
  {
    title: "Gente",
    img: "https://placeimg.com/200/200/people",
  },
  {
    title: "Naturaleza",
    img: "https://placeimg.com/200/200/nature ",
  },
];

cardContent.forEach((n) => {
  $template.querySelector("img").setAttribute("src", n.img);
  $template.querySelector("img").setAttribute("alt", n.title);
  $template.querySelector("figcaption").textContent = n.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */

// Clase 70 DOM: Modificando Elementos(Old Style)

/* const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");
const $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src='https://placeimg.com/200/200/any' alt='Any'>
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[2]);

// $cards.insertBefore($newCard, $cards.firstElementChild);

// $cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards); */

// Clase 71 DOM: Modificando Elementos (Cool Style)

/* 
.insertAdjacent...
  .insertAdjacentElement(position,el)
  .insertAdjacentHTML(position,html)
  .insertAdjacentText(position,text)
Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

/* const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");

const $contentCard = `
<img src='https://placeimg.com/200/200/any' alt='Any'>
<figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// $cards.insertAdjacentElement("afterbegin", $newCard);

$cards.prepend($newCard);
$cards.before($newCard);
$cards.append($newCard);
$cards.after($newCard) */

// Clase 72 DOM: Manejadores de Eventos

/* function helloWorld() {
  alert("Hello World");
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = helloWorld;
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo manejador de eventos semántico");
  console.log(e);
  console.log(event);
};

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", helloWorld);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo manejador de Eventos Múltiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
}); */

// Clase 73 DOM: Eventos con Parámetros y Remover Eventos.

/* const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");

function greet(name = "Desconocido/a") {
  console.log(`Hola ${name} - ${event}`);
}

$eventoMultiple.addEventListener("click", () => greet());
$eventoMultiple.addEventListener("click", () => greet("Miguel"));

const removerDobleClick = () => {
  alert(`Removiendo el evento de tipo ${event.type}`);
  console.log(event);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick); // Requiere el nombre de la función como segundo parámetro
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick); */

// Clase 74 DOM: Flujo de Eventos (Burbuja y Captura)

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");

console.log($divsEventos);

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos);
  // Fase de burbuja
  div.addEventListener("click", flujoEventos, false);
  // Fase de captura
  div.addEventListener("click", flujoEventos, true);
  // Otros valores
  div.addEventListener("click", flujoEventos, {
    capture: true,
  });
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true,
  });
}); */

// Clase 75 DOM: stopPropagation & preventDefault

// const $divsEventos = document.querySelectorAll(".eventos-flujo div");
// const $linkEventos = document.querySelector(".eventos-flujo a");

// console.log($divsEventos);

// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
//   );
//   e.stopPropagation(); // Método para detener la propagación.
// }

// $divsEventos.forEach((div) => {
//   div.addEventListener("click", flujoEventos);
//   // // Fase de burbuja
//   // div.addEventListener("click", flujoEventos, false);
//   // // Fase de captura
//   // div.addEventListener("click", flujoEventos, true);
//   // // Otros valores
//   // div.addEventListener("click", flujoEventos, {
//   //   capture: true,
//   // });
//   // div.addEventListener("click", flujoEventos, {
//   //   capture: false,
//   //   once: true,
//   // });
// });

// $linkEventos.addEventListener("click", (event) => {
//   alert("Hola soy tu amigo y docente digital Jonathan Mircha");
//   event.preventDefault();
//   event.stopPropagation();
// });

// Clase 76 DOM: Delegación de Eventos

/* function flujoEventos(event) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${event.target.className}`
  );
}

document.addEventListener("click", (event) => {
  console.log(`Click en ${event.target}`);

  if (event.target.matches("eventos-flujo div")) {
    flujoEventos(event);
  }

  if (event.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital Jonathan Mircha");
    event.preventDefault();
  }
}); */

// Clase 77 BOM: Propiedades y Eventos

/* window.addEventListener("resize", (event) => {
  console.clear();
  console.log("Evento Resize");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(event);
});

window.addEventListener("scroll", (event) => {
  console.clear();
  console.log("Evento Scroll");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(event);
});

window.addEventListener("load", (event) => {
  console.clear();
  console.log("Evento Load");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(event);
});

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("Evento DOMContentLoaded");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(event);
}); */

// Clase 78 BOM: Métodos

/* const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (event) => {
  ventana = window.open('https://jonmircha.com')
});

$btnCerrar.addEventListener("click", (event) => {
  //window.close();
  ventana.close();
});

$btnImprimir.addEventListener("click", (event) => {
  window.print();
}); */

// Clase 79 BOM: Objetos: URL, Historial y Navegador

/* console.log(location);
console.log(location.origin); // Muestra el origen de la pagina https://127.0.0.1:5500
console.log(location.protocol); // Muestra el protocolo usado
console.log(location.host); // Muestra el nombre del dominio
console.log(location.hostname); // Muestra el nombre del dominio
console.log(location.port); // Muestra el puerto
console.log(location.href); // Muestra la dirección url al completo
console.log(location.hash); // Muestra el valor de url después de un hash
console.log(location.search); // Muestra los valores despues de un interrogante
console.log(location.pathname); */

/* console.log(history);
console.log(history.length); // Muestra el total de páginas entre las que se ha navegado
console.log(history.back(3)); // Retorna una cantidad indicada de páginas hacia atrás
console.log(history.forward(3)); // Avanza una cantidad indicada de páginas hacia delante
console.log(history.go()); // Avanza o retorna una cantidad indicada de páginas según el signo y el número aportado */

/* console.log(navigator);
console.log(navigator.connection); // Nos da información de la conexión del usuario
console.log(navigator.geolocation); // Nos da información sobre la geolocalización
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes); // Los tipos de formatos que acepta el navegador
console.log(navigator.onLine); // Nos da información sobre el estado de la conexión
console.log(navigator.serviceWorker.Worker); // Un API que ayuda a hacer Progressive Web Apps
console.log(navigator.storage); // API de almacenamiento
console.log(navigator.usb); // Detectar dispositivos USB
console.log(navigator.userAgent); // Nos da información sobre el sistema operativo del usuario */