function criandoEstados(estados) {
  for (let value of estados) {
    let getEstado = document.getElementById('estado');
    let itemEstado = document.createElement('option');
    itemEstado.innerHTML = value;
    getEstado.appendChild(itemEstado);
  }
}
let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
criandoEstados(estados)

// function verificaoDeData() {
  
//   getDataInicial.value.indexOf()
//   // dia
//   if (getDataInicial.indeOf() > 0 && <= 31 ){
//     alert('Erro! dia in')
//   }
//   // mes
//   if (getDataInicial.value > 0 && <= 12){
//     alert('Erro digite uma data correta')
//   }
//   // ano
//   if (getDataInicial.value === negativo){
//     alert('Você não pode digitar um numero NEGATIVO!')
//   }
// }
// let getDataInicial = document.getElementById('data-inicial').innerHTML;
// verificaoDeData(getDataInicial)

function stopSetButton(event) {
  event.preventDefault()
}
let getElemButton = document.getElementById('enviar');
getElemButton.addEventListener('click', stopSetButton);