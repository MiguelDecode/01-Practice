import hamburgerMenu from "./menu_hamburger.js";
import { digitalClock, alarm } from "./clock.js";
import { moveBall, shortcuts } from "./keyboard.js";
import countdown from "./countdown.js";

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
});

// Eventos de teclado

document.addEventListener("keydown", (event) => {
  shortcuts(event);
  moveBall(event, ".ball", ".stage");
});
