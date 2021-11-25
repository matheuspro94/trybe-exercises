const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const Author = require('./controllers/Author');
const Book = require('./models/Book');

app.use(bodyParser.json());

app.get('/authors', Author.getAll)

app.get('/authors/:id', Author.findById);

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
})

app.post('/authors', Author.create);

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  console.log(req.body)
  if (!await Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  await Book.create(title, author_id);
  res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))