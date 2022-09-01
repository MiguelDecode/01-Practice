export default function speechReader() {
  const $speechSelect = document.getElementById("speech-select"),
    $speechTextarea = document.getElementById("speech-text"),
    $speechBtn = document.getElementById("speech-btn");

  const speechMessage = new SpeechSynthesisUtterance();

  // console.log(speechMessage);

  let voices = [];

  document.addEventListener("DOMContentLoaded", (event) => {
    // console.log(window.speechSynthesis);
    // console.log(window.speechSynthesis.getVoices());

    window.speechSynthesis.addEventListener("voiceschanged", (event) => {
      // console.log(event);
      voices = window.speechSynthesis.getVoices();
      // console.log(voices);

      voices.forEach((el) => {
        const $option = document.createElement("option");
        $option.value = el.name;
        $option.textContent = `${el.name} / ${el.lang}`;

        $speechSelect.appendChild($option);
      });
    });
  });

  document.addEventListener("change", (event) => {
    if (event.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === event.target.value
      );
    }

    // console.log(speechMessage);
  });

  document.addEventListener("click", (event) => {
    if (event.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      window.speechSynthesis.speak(speechMessage);
    }
  });
}
