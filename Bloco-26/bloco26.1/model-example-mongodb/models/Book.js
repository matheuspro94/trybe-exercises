const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  const [book] = await connection.execute('SELECT * FROM books');
  return book.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const getByBookId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const findById = async (id) => {
  const [books] = await connection.execute('SELECT * FROM model_example.books WHERE id=?;', 
  [id]
  );

  if (books.length === 0) return null;

  return books.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
}

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
}

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
);

module.exports = {
  getAll,
  getByBookId,
  findById,
  isValid,
  create
}