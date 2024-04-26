const students = [
  {
    name: 'Taiane',
    firstTest: 9,
    secondTest: 7,
  },
  {
    name: 'Karine',
    firstTest: 9,
    secondTest: 10,
  },
  {
    name: 'Andreia',
    firstTest: 5,
    secondTest: 3,
  },
];


const averageCalculation = (firstTest, secondTest) => {
  return ((firstTest + secondTest) / 2).toFixed(2)
};


for(let result of students) {

  if (averageCalculation(result.firstTest, result.secondTest) >= 7) {

    alert(`
      A média do(a) aluno(a) ${result.name} é: ${averageCalculation(result.firstTest, result.secondTest)}
      Parabéns ${result.name}! Você foi aprovado(a) no concurso!
   `)

  } else {

      alert(`
        A média do(a) aluno(a) ${result.name} é: ${averageCalculation(result.firstTest, result.secondTest)}
        Não foi dessa vez ${result.name}! Tente novamente!
    `)

  }
}


