const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

// input.addEventListener('keyup', (event) => {
//     console.log(event);
// })

// button.addEventListener('click', (event)=> {
//     console.log(event.target)
// })

// const gallery = document.getElementById('gallery')

// gallery.addEventListener('click', (event) => {
//     event.target.classList.add('red')
// })

// gallery.addEventListener('click', (event) => {
//     console.log(event.target.textContent)
// })

const link = document.getElementById('link')

link.addEventListener('click', (e) => {
    e.preventDefault()
    
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('El formulario se ha enviado');
})

button.addEventListener('click', () => {
    input.value = 'Has hecho click'
})

button.click()

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log('El formulario se ha enviado')
// })

