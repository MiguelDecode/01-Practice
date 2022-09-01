export default function smartVideo() {
  const $videos = document.querySelectorAll("video[data-smart-video]");

  const fn = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      window.addEventListener("visibilitychange", (event) =>
        document.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };

  const observer = new IntersectionObserver(fn, { threshold: 0.5 });

  $videos.forEach((el) => observer.observe(el));
}
