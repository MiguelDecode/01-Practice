const searchInput = document.querySelector('.search-input')
const iconSearch = document.querySelector('.icon-search')

iconSearch.addEventListener('click', () => {
  searchInput.classList.toggle('search-input--show')
  iconSearch.classList.toggle('icon-search--only')
})