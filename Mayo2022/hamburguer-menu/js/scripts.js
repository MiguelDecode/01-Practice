const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main__menu');

toggleMenuElement.addEventListener('click', ()=> {
    mainMenuElement.classList.toggle('main__menu--show');
})
