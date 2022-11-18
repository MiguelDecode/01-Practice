import hamburgerMenu from "./hamburger_menu.js";
import { digitalClock, alarm } from "./clock.js";
import { moveBall, shortcuts } from "./keyboard.js";
import countdown from "./countdown.js";
import scrollTopButton from "./btn_scroll.js";
import dark_theme from "./dark_theme.js";

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
});

// Dark Theme
dark_theme(".dark-theme-btn", "dark-mode");

// Keyboard Events
document.addEventListener("keydown", () => {
  shortcuts();
  moveBall(event, ".ball", ".stage");
});
