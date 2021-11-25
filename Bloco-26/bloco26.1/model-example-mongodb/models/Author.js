const connection = require('./connection');
const { ObjectId } = require('mongodb');

// const serialize = (authorData) => {
//   return {
//     id: authorData.id,
//     firstName: authorData.first_name,
//     middleName: authorData.middle_name,
//     lastName: authorData.last_name,
//   }
// }

const getAll = async () => {
  return connection()
  .then((db) => db.collection('authors').find().toArray())
  .then((authors) => {
    return authors.map(({ _id, firstName, middleName, lastName }) => {
      return {
        id: _id,
        firstName,
        middleName,
        lastName
      }
    });
  });
}

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)))

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return ({
    id,
    firstName,
    middleName,
    lastName,
  })
}

const create = async (firstName, middleName, lastName) => { // faltava um return 
  return await connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => ({ id: result.insertedId, firstName, middleName, lastName }));
}

module.exports = {
  getAll,
  findById,
  create,
}