let contagemDeClique = 0;
let textoQueVaiAparecer = document.querySelector('#texto');
let btn = document.querySelector('#btn');

btn.addEventListener("click", () => textoQueVaiAparecer.innerHTML = contagemDeClique += 1);
