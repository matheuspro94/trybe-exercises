let custDeProduto = 2;
let valorDeVenda = 4;

if (custDeProduto >= 0 && valorDeVenda >= 0) {
  let totalCustDeProduto = custDeProduto * 1.2;
  let totalLucro = (valorDeVenda - totalCustDeProduto) * 1000;
  console.log(totalLucro);
}else{
  console.log('Erro, os valores não podem ser negativos')
}