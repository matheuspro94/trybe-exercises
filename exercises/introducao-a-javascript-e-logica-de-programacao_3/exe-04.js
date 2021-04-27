//Agora inverta o lado do triângulo. Por exemplo:
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
