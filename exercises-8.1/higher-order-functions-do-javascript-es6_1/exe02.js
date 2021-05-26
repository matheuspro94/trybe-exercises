const verificaCondicao = (meuNumero, numeroAlet) => meuNumero === numeroAlet; 
const resultadoDojogo = (meuNumero, callback) => {
  const numeroAlet = Math.floor((Math.random() * 5) + 1);
  console.log(numeroAlet);
  if (callback(meuNumero, numeroAlet)) {
    return 'Parabéns você ganhou!'
  } else {
    return 'Tente novamente:('
  }
}

console.log(resultadoDojogo(5, verificaCondicao))