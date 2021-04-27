//Agora inverta o lado do triângulo. Por exemplo:
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;


for (let index = 0; index <= n; index += 1){
  for (let colomnIndex = 0; colomnIndex <= n; colomnIndex += 1){
    if (colomnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    }else {
      inputLine = inputLine + symbol;
    };
  };
console.log(inputLine);
inputLine = '';
inputPosition -= 1; 
};
