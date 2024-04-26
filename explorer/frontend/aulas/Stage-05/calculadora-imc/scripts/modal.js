export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal span'),
  btnClose: document.querySelector('.modal button'),

  open() {
    Modal.wrapper.classList.add('open')

  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
};

export const handleCloseModal = () => {
  Modal.close()
};

export const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    Modal.close()
  }
};

window.addEventListener('keydown', handleKeyDown);