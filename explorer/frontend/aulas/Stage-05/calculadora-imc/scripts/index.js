import { Modal, handleCloseModal } from './modal.js';
import { calculateIMC, notANumber } from './utils.js';
import { alertError } from './alert-error.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');


const handleSubmit = (event) => {
  event.preventDefault();
  
  let weight = inputWeight.value
  let height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    alertError.open()
    return;
  }

  alertError.close()
  
  const result = calculateIMC(weight, height)

  displayResultMessage(result)

};

const displayResultMessage = (result) => {
  Modal.wrapper.classList.add('open')
  Modal.message.innerText = `Seu IMC é de ${result}`
};

inputWeight.oninput = () => alertError.close();
inputHeight.oninput = () => alertError.close();

form.onsubmit = handleSubmit;
Modal.btnClose.onclick = handleCloseModal;

