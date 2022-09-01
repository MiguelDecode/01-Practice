import hamburgerMenu from "./menu_hamburger.js";
import { digitalClock, alarm } from "./clock.js";
import { moveBall, shortcuts } from "./keyboard.js";
import countdown from "./countdown.js";
import scrollTopBtn from "./btn_scroll.js";
import darkTheme from "./dark_theme.js";
import responsiveMedia from "./object_responsive.js";
import responsiveTester from "./test_responsive.js";
import userDeviceInfo from "./detection_device.js";
import networkStatus from "./network_status.js";
import webCam from "./webcam_detection.js";
import getGeolocation from "./geolocation.js";
import searchFilters from "./filter_search.js";
import draw from "./sorteo.js";
import slider from "./slider.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./video_intelligent.js";
import contactFormValidations from "./validate_form.js";
import speechReader from "./storyteller.js";

document.addEventListener("DOMContentLoaded", (event) => {
  // Menú de navegación
  hamburgerMenu(".hamburger", ".aside", ".nav__link");
  // Reloj digital
  digitalClock("#clock", "#activate-clock", "#deactivate-clock");
  // Alarma digital
  alarm("./assets/alarm.mp3", "#activate-alarm", "#deactivate-alarm");
  // Cuenta regresiva
  countdown(
    "countdown",
    "May 23, 2023 03:23:19",
    "Feliz Cumpleaños amigo y docente digital 🤓"
  );
  // Botón de scroll hacía el top de la página.
  scrollTopBtn(".scroll-top-btn");
  // Responsive responsable design
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=2" target="_blank" rel="noopener">Ver vídeo</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/Wy1eaHHnDAKZo9k46" target="_blank" rel="noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46778.376137285166!2d-8.579874837478528!3d42.88026248303424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2efe4326414707%3A0xa18e63b9d0a316c5!2sCatedral%20de%20Santiago%20de%20Compostela!5e0!3m2!1ses!2ses!4v1661026967326!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  // Tester de Responsive
  responsiveTester("responsiveTester");
  // Detección de dispositivos (User Agent)
  userDeviceInfo("user-device");
  // Detección de la cámara web
  webCam("webcam");
  // Detección de la geolocalización
  getGeolocation('geolocation');
  // Filtro de Búsqueda
  searchFilters('.card-filter', '.card')
  // Sorteo Digital
  draw('#winner-btn', '.player')
  // Slider
  slider()
  // Scroll Spy
  // scrollSpy();
  // Video Intelligente
  smartVideo();
  // Validación de formulario de Contacto
  contactFormValidations();
});

// Eventos de teclado
document.addEventListener("keydown", (event) => {
  shortcuts(event);
  moveBall(event, ".ball", ".stage");
});

// Tema Oscuro
darkTheme(".dark-theme-btn", "dark-mode");

// Network Status
networkStatus();

// Narrador
speechReader();