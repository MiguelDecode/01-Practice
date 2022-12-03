import hamburgerMenu from "./hamburger_menu.js";
import { digitalClock, alarm } from "./clock.js";
import { moveBall, shortcuts } from "./keyboard.js";
import countdown from "./countdown.js";
import scrollTopButton from "./btn_scroll.js";
import dark_theme from "./dark_theme.js";
import responsiveMedia from "./object_responsive.js";
import responsiveTester from "./responsive_test.js";
import userDeviceInfo from "./device_detection.js";
import networkStatus from "./network_detection.js";
import webCam from "./webcam_detection.js";
import getGeolocation from "./geolocation.js";
import searchFilter from "./search_filter.js";
import draw from "./lottery.js";
import slider from "./slider.js";
import scrollSpy from "./scrollspy.js";
import smartVideo from "./smart_video.js";
import formValidator from "./form_validator.js";
import speechReader from "./storyteller.js";

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu
  hamburgerMenu(".hamburger", ".aside", ".menu__link");

  // Digital Clock
  digitalClock(".clock", "#start-clock", "#stop-clock");

  // Alarm Clock
  alarm("../assets/alarm.wav", "#start-alarm", "#stop-alarm");

  // Countdown
  countdown(
    "countdown",
    "May 23, 2024 03:23:19",
    "Feliz cumpleaños amigo y docente digital"
  );

  // Scroll Page
  scrollTopButton(".scroll-top-btn");

  // Responsive Media
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=2SetvwBV-SU&t=18s" target="_blank">Ver vídeo</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/Qzp5sfVwXg8UgTpu9" target="_blank">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.632696431719!2d-8.54683524842833!3d42.88059617905305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2efe4326414707%3A0xa18e63b9d0a316c5!2sCatedral%20de%20Santiago%20de%20Compostela!5e0!3m2!1ses!2ses!4v1669063275766!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  // Responsive Tester
  responsiveTester("responsive-tester");

  // Device Detection
  // userDeviceInfo("user-device");

  // WebCam Detection
  // webCam("webcam");

  // Geolocation
  getGeolocation("geolocation");

  // Search Filter
  searchFilter(".card-filter", ".card");

  // Lottery
  draw("#winner-btn", ".player");

  // Slider Responsive
  slider();

  // Scroll Spy
  scrollSpy();

  // Smart Video
  smartVideo();

  // Form Validator
  formValidator();
});

// Dark Theme
dark_theme(".dark-theme-btn", "dark-mode");

// Keyboard Events
document.addEventListener("keydown", () => {
  shortcuts();
  moveBall(event, ".ball", ".stage");
});

// Network Status
networkStatus();

// Speech Reader
speechReader();