// LINK ACTIVE

const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  linkColor.forEach((element) => element.classList.remove("nav__link--active"));
  this.classList.add("nav__link--active");
}

linkColor.forEach((element) => element.addEventListener("click", colorLink));

// SHOW HIDDEN MENU

const showMenu = (toggleId, navbarId) => {
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId);

  if(toggle && navbar) {
    toggle.addEventListener('click', () => {
      /* Show menu */
      navbar.classList.toggle('show-menu');
      /* Rotate toggle icon */
      toggle.classList.toggle('brand__toggle--rotate')
    })
  }
};

showMenu('brand__toggle', 'nav')
