const connection = require('./connection');
const { ObjectId } = require('mongodb');
const Author = require('./Author');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find({}).toArray())
    .then((book) => 
    book.map(({ _id, title, author_id }) => ({
      id: _id,
      title,
      authorId: author_id,
    }))
  );
}

const getByAuthorId = (authorId) => connection() // id dos livros
  .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray());

const findById = async (id) => {
  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));

  if (!book) return null;

  return book;
}

const isValid = async (title, authorId) => { // aqui tinha que passar id do mongoDB
  if (!title || typeof title !== 'string') return false;
  if (!authorId || typeof authorId !== 'string' || authorId.length !== 24 || !(await Author.findById(authorId))) return false;

  return true;
}

const create = async (title, author_id) => connection() //resolver
  .then((db) => db.collection('books').insertOne({ title, author_id }));

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create
}