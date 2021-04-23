let chessPiece = 'Rei';

switch (chessPiece.toLocaleLowerCase()) {
  case 'peão':
    console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas');
    break;
  case 'cavalo': 
    console.log('Cavalo -> "L" pode pular as peças');
  break;
  case 'torre': 
    console.log('Torre -> Horizontal e vertical');
  break;
  case 'rainha': 
    console.log('Rainha -> Diagonal, horizontal e vertical');
  break;
  case 'rei': 
    console.log('Rei -> Uma casa apenas para qualquer direção')
  break;
  case 'bispo': 
    console.log('Bispo -> Diagonal')
  break;
  default:
    console.log('Erro! Peça inválida.')
}