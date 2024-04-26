let xAttempts = 1;
const btnTry = document.querySelector('#btnTry');
let randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnReset = document.querySelector('#btnReset');

// Funções
const handleTryClick = (event) => {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if ( inputNumber.value < 0 ) {
    alert('O número não pode ser maior que 10 nem menor que 0. Digite um número entre 0 e 10.')
    location.reload()
    
  }  else if ( inputNumber.value > 10 ) {
    alert('O número não pode ser maior que 10 nem menor que 0. Digite um número entre 0 e 10.')
    location.reload()
  }

  if (inputNumber.value === '') {
    alert('O campo não pode ser vazio')
    xAttempts = 0
  }


  if ( Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    if ( xAttempts == 1) {
      document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativa.`

    } else {
      document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativas.`
    }
  }

  inputNumber.value = ''
  xAttempts++
}

const handleResetClick = () => {
  toggleScreen()
  xAttempts = 1
  location.reload()
}

const pressEnter = (e) => {
  if ( e.key == 'Enter' && screen1.classList.contains('hide') ) {
    handleResetClick()
  }
}

const toggleScreen = () => {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}  

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('Enter', pressEnter)

console.log(randomNumber)