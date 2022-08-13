import hamburgerMenu from "./menu_hamburger.js";
import {digitalClock, alarm} from "./clock.js";

document.addEventListener('DOMContentLoaded', event => {
  // Menú de navegación 
  hamburgerMenu('.hamburger','.aside', '.nav__link' );
  // Reloj digital
  digitalClock('#clock', '#activate-clock', '#deactivate-clock');
  // Alarma digital
  alarm('./assets/alarm.mp3', '#activate-alarm', '#deactivate-alarm');
})

