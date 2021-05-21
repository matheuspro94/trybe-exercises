// PARTE 2 
  // EXERCICIO 1
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNovaChave = (objeto, chave, valor) => {
objeto[chave] = valor
}
addNovaChave(lesson2, 'turno', 'noite');
// console.log(lesson2)

// Exercicio 2

const listKeys = (objeto) => Object.keys(objeto);
// console.log(listKeys(lesson2))

// Exercicio 3 

const tamanhoObjeto = (objeto) => Object.keys(objeto).length;
// console.log(tamanhoObjeto(lesson1));  

// Exercicio 4

const listaValores = (objeto) => Object.values(objeto);
// console.log(listaValores(lesson1));

// Exercicio 5

const todasLicoes = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(todasLicoes);
