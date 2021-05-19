const criaFatorial = (fatorial) => {
let resultado = fatorial;
  for(let index = 1; index < fatorial; index += 1) {
    resultado *= index;
  }
  return resultado
}
let fatorial = 4;
criaFatorial(4)
// console.log(resultado)
console.log(criaFatorial(fatorial))
// console.log(resultado)
console.log(`O fotorial de ${fatorial} é: ${criaFatorial(fatorial)}`)
// console.log(resultado)

