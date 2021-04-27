//Agora inverta o lado do triângulo. Por exemplo:
// 1- Começa sempre com um asterisco no centro e a quantidade de espaços é n - 1;
// 2- Espaço do lado esquerdo (n - 1) / 2 espaços do lado direito (n - 1) / 2;
// 3- Aumentar o número de asterisco em 2, e diminui o número de espaço em 1 para cada lado;
// 4- Condição de parada será quando a quantidade de asteriscos for igual a n;

let n = 5;
let symbol = '*';
let inputLine = '';

let meio = (n + 1) / 2;
let meioEsq = meio;
let meioDir = meio;

for (let index = 0; index <= meio; index += 1){
  for (let colomnIndex = 0; colomnIndex <= n; colomnIndex += 1){
     if (colomnIndex > meioEsq && colomnIndex < meioDir) {
       inputLine = inputLine + symbol;
     } else {
       inputLine = inputLine + ' ';
     };
  }
  console.log(inputLine)
  inputLine = '';
  meioDir += 1;
  meioEsq -= 1;
};
