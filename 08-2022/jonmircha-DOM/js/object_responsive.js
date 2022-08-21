export default function responsiveMedia(
  id,
  mediaquery,
  mobileContent,
  desktopContent
) {
  let breakpoint = window.matchMedia(mediaquery);

  const responsive = (event) => {
    if (event.matches) {
      document.getElementById(id).innerHTML = desktopContent;
    } else {
      document.getElementById(id).innerHTML = mobileContent;
    }
  };

  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
