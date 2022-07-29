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

// Clase 65 DOM: 
