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

// function verificaoData {
//   let getDataInicial = document.getElementById('data-inicial');
//   // dia
//   // mes
//   // ano, não pode ser negativo
//   // exibir um alerta 

  
//   if (getDataInicial > 0 && <= 31 ) 
// }

function stopSetButton(event) {
  event.preventDefault()
}
let getElemButton = document.getElementById('enviar');
getElemButton.addEventListener('click', stopSetButton);