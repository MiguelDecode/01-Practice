const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('header__nav');

toggleMenuElement.addEventListener('click', ()=> {
    mainMenuElement.classList.toggle('header__nav--show');
})