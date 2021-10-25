const readline = require('readline-sync');

calculaImc = () => {
  const peso = readline.question('Digite o seu peso: ');
  const altura = readline.question('Digite sua altura: ');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);
  
  console.log(`IMC: ${imc}`);

  if(imc < 18.5) {
    console.log("Situação: Abaixo do peso (magreza)");
    return;
  }
  if(imc >= 18.5 && imc <= 24.9) {
    console.log("Situação: Peso normal");
    return;
  }
  if(imc >= 25 && imc <= 29.9) {
    console.log("Situação: Acima do peso (sobrepeso)");
    return;
  }
  if(imc >= 30 && imc <= 34.9) {
    console.log("Situação: Obesidade grau I");
    return;
  }
  if(imc >= 35 && imc <= 39.9) {
    console.log("Situação: Obesidade grau II");
    return;
  } else {
    console.log("Situação: Obesidade graus III e IV");
    return;
  }
} 

calculaImc()