// VARIABLES
const iconMenu = document.getElementById("icon-menu");
const menu = document.getElementById("menu");

const features = document.getElementById("features");
const company = document.getElementById("company");
const featuresList = document.getElementById("features-li");
const companyList = document.getElementById("company-li");

// MOSTRAR MENU DESPLEGABLE EN MOVIL

iconMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("icon-menu--open");
  menu.classList.toggle("menu--open");
  companyList.classList.remove("nav__item--active");
  featuresList.classList.remove("nav__item--active");
});

// MOSTRAR MENUS DESPLEGABLES DE LAS SECCIONES DE NAVEGACIÓN

features.addEventListener("click", () => {
  featuresList.classList.toggle("nav__item--active");
  companyList.classList.remove("nav__item--active");
});

company.addEventListener("click", () => {
  companyList.classList.toggle("nav__item--active");
  featuresList.classList.remove("nav__item--active");
});
