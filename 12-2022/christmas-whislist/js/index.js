const book = document.getElementById("book");
const song = document.getElementById("song");
const whishlist = document.getElementById("whislist");
const input = document.getElementById("whish");

input.addEventListener("keyup", (event) => {
  if(event.code === 'Enter') {
    const $li = document.createElement("li");
    $li.textContent = input.value;
    whishlist.appendChild($li);
    input.value = '';
  }
});

book.addEventListener("mouseenter", () => {
  song.play();
});

book.addEventListener("mouseleave", () => {
  song.pause();
});
