export function digitalClock(clock, btnPlay, btnStop) {
  let clockTime;

  document.addEventListener("click", () => {
    // Button start clock
    if (event.target.matches(btnPlay)) {
      clockTime = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString("es-Es");
        document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      event.target.disabled = true;
    }

    // Button stop clock
    if (event.target.matches(btnStop)) {
      clearInterval(clockTime);
      document.querySelector(clock).innerHTML = null;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}
export function alarm(sound, btnPlay, btnStop) {
  let alarmTime;

  const $alarm = document.createElement("audio");
  $alarm.src = sound;

  document.addEventListener("click", () => {
    // Play button listener
    if (event.target.matches(btnPlay)) {
      alarmTime = setTimeout(() => {
        $alarm.play();
      }, 1000);

      document.querySelector(btnPlay).disabled = true;
    }

    // Stop button listener
    if (event.target.matches(btnStop)) {
      clearTimeout(alarmTime);
      $alarm.pause();
      $alarm.currentTime = 0;

      document.querySelector(btnPlay).disabled = false;
    }
  });
}
