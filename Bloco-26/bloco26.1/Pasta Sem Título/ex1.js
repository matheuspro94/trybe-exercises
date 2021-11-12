function multiples_of_3_or_5(roof) {
  let multDe3 = 0;
  let multDe5 = 0;
  let soma;
  for (let i = 0;i <= roof; i += 1) {
    if(i % 3 === 0) {
      multDe3 += i
      console.log(multDe3)
    }
    if(i % 5 === 0) {
      multDe5 += i
      // console.log(multDe5)
    }
  }
  soma = multDe3 + multDe5
  return soma
}
multiples_of_3_or_5(10)