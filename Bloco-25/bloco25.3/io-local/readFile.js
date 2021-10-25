// Lendo arquivos com métodos assíncronos

// const fs = require('fs');

// const nomeDoArquivo = 'meu-arquivo.txt';

// fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo: ${data}`);
// });


// const fs = require('fs').promises;

// const nomeDoArquivo = 'meu-arquivo.txt';

// fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => {
//     console.log(`Conteúdo do arquivo: ${data}`);
//   })
//   .catch((err) => {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//   });

// Escrevendo dados em arquivos

// const fs = require('fs').promises;

// fs.writeFile('./meu-arquivo.txt', 'Matheus é bonitão')
//   .then(() => {
//     console.log('Arquivo escrito com sucesso!');
//   })
//   .catch((err) => {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   });

// Utilizando async/await

// const fs = require('fs').promises;

// async function main() {
//   try {
//     await fs.writeFile('./meu-arquivo.txt', 'ALINE É LINDA!');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (err) {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   }
// }

// main()

// Rodando promessas simultaneamente com Promise.all

// const fs = require('fs').promises;

// Promise.all([
//   fs.readFile('file1.txt'),
//   fs.readFile('file2.txt'),
//   fs.readFile('file3.txt'),
// ])
//   .then(([file1, file2, file3]) => {
//     const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
//     console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
//   })
//   .catch((err) => {
//     console.error(`Erro ao ler arquivos: ${err.message}`);
//   });

// Atributos adicionais na utilização de métodos de leitura e escrita no fs

const fs = require('fs').promises;

// A flag wx abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado
fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error('err');
  });