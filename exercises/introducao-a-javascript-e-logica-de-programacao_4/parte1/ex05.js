let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};

for (let propriedades in info){
  if (
    info[propriedades] === info.recorrente && 
    info[propriedades] === 'sim' &&
    info2[propriedades] === 'sim'
  ) {
    console.log('Ambos recorrentes');
  }else {
    console.log(info[propriedades] + ' e ' + info2[propriedades])
  }
}
