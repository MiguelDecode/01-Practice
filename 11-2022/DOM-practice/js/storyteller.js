export default function speechReader() {
  const $speechSelect = document.getElementById("speech-select");
  const $speechTextarea = document.getElementById("speech-text");
  const $speechBtn = document.getElementById("speech-btn");

  const speechMessage = new SpeechSynthesisUtterance();

  // console.log(speechMessage);

  let voices = [];

  document.addEventListener("DOMContentLoaded", (event) => {
    // console.log(speechSynthesis);

    speechSynthesis.addEventListener("voiceschanged", (event) => {
      voices = speechSynthesis.getVoices();

      voices.forEach((voice) => {
        const $option = document.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} *** ${voice.lang}`;

        $speechSelect.appendChild($option);
      });
    });
  });
  document.addEventListener("change", (event) => {
    if (event.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === event.target.value
      );
      console.log(speechMessage);
    }
  });
  document.addEventListener("click", (event) => {
    if (event.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      speechSynthesis.speak(speechMessage);
    }
  });
}
