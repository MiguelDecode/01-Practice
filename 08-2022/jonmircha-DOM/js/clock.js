export function digitalClock(idClock, btnPlay, btnStop) {
  let clockTimer;
  document.addEventListener("click", (event) => {
    if (event.target.matches(btnPlay)) {
      clockTimer = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString("en-GB");
        document.querySelector(idClock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      event.target.disabled = true;
    }

    if (event.target.matches(btnStop)) {
      clearInterval(clockTimer);
      document.querySelector(idClock).innerHTML = null;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(sound, btnPlay, btnStop) {
  let alarmTimer;
  const $alarm = document.createElement("audio");
  $alarm.src = sound;

  document.addEventListener("click", (event) => {
    if (event.target.matches(btnPlay)) {
      alarmTimer = setTimeout(() => {
        $alarm.play();
      }, 2000);

      event.target.disabled = true;
    }
    if (event.target.matches(btnStop)) {
      clearTimeout(alarmTimer);
      $alarm.pause();
      $alarm.currentTime = 0;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}
