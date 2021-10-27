const express = require('express');

const app = express();

app.get('/hello', handleHelloWordRequest);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
})

const handleHelloWordRequest = (req, res) => {
  return res.status(200).send('Hello World!');
}

