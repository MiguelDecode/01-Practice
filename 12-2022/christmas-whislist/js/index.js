const book = document.getElementById('book')
const song = document.getElementById('song')

book.addEventListener('click', () => {
  song.play();
})