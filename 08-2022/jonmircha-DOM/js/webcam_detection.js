export default function webCam(id) {
  const $video = document.getElementById(id);

  // console.log(navigator.mediaDevices.getUserMedia)
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.onplay();
      })
      .catch((error) => {
        $video.insertAdjacentHTML("beforebegin", `<p><mark>${error}</mark></p>`);
        console.log(`Sucedio el siguiente error ${error}`);
      });
  }
}