const readline = require('readline-sync');

logResultado = (numero, resposta) => {
  if(numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O numero era ${numero}`);
  }
  return console.log('Parabens, numero correto!');
}

runGame = () => {
  const numero = parseInt(Math.random() * 10);

  const resposta = readline.questionInt(
    "Digite um numero entre 0 e 10 para saber se é numero que estou pensando: "
  );

  logResultado(numero, resposta);
  const novamente = readline.question(
   'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if(novamente !== "s") {
    return console.log('Ok, até a proxima!')
  }

  runGame();
}

runGame();
