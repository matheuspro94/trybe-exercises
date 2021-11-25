const Author = require('../models/Author');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" "); 
    
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  return true;
}

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
}

const findById = async (id) => {
  const author = await Author.findById(id);

  return getNewAuthor(author)
}

const create = async (firstName, middleName, lastName) => {
  const authorValid = isValid(firstName, middleName, lastName);

  if (!authorValid) return false;

  const { insertedId } = await Author.create(firstName, middleName, lastName);
  console.log(insertedId)

  // não consigo retornar o objeto de criação com as chaves e valores.
  return getNewAuthor({
    id: insertedId,
    firstName,
    middleName, 
    lastName,
  });
}

module.exports = {
  getAll,
  findById,
  create
}