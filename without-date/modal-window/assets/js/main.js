// SHOW MODAL

const showModal =(idBtn, idContainer) => {
  const modalOpener = document.getElementById(idBtn);
  const modalContainer = document.getElementById(idContainer);

  if(modalOpener && modalContainer) {
    modalOpener.addEventListener('click', () => {
      modalContainer.classList.add('modal__container--show')
    })
  }
}

showModal('open-modal','modal-container')

// CLOSE MODAL

const hideModal = (idBtn, idContainer) => {
  const modalCloser = document.getElementById(idBtn);
  const modalContainer = document.getElementById(idContainer);

  if(modalCloser && modalContainer) {
    modalCloser.addEventListener('click', () => {
      modalContainer.classList.remove('modal__container--show')
    })
  }
  
}

hideModal('close-modal', 'modal-container')
