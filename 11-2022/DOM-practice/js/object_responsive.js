export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakpoint = window.matchMedia(mq);

  const responsive = (event) => {
    if (event.matches) {
      document.getElementById(id).innerHTML = desktopContent;
    } else {
      document.getElementById(id).innerHTML = mobileContent;
    }
    // console.log(event.matches);
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
}
