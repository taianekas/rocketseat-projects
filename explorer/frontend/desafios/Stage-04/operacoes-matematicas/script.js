let firstNumber = Number(prompt(`Digite o primeiro número`));
let secondNumber = Number(prompt(`Digite o segundo número`));

const sum = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = (firstNumber / secondNumber).toFixed(2);
const restOfDivision = firstNumber % secondNumber;
const oddOrEven = sum;


alert(`A soma dos dois números é ${sum}`);
alert(`A subtração dos dois números é ${subtraction}`);
alert(`A divisão dos dois números é ${division}`);
alert(`O resto da divisão dos dois números é ${restOfDivision}`);


if (oddOrEven % 2 == 0) {
  alert(`O resultado da soma dos dois números que é ${oddOrEven}, é par.`)
} else {
  alert(`O resultado da soma dos dois números que é ${oddOrEven}, é ímpar.`)
}

if (firstNumber === secondNumber) {
  alert(`Os números digitados são iguais.`)
} else {
  alert(`Os números digitados são diferentes.`)
}