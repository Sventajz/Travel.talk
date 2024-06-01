const { MongoClient } = require('mongodb');

let db;

async function connectToDatabase() {
  if (db) {
    return db;
  }
  
  const client = await MongoClient.connect('mongodb+srv://SvenTajz:CLONErepublic2@piprojekt.mnzp0np.mongodb.net/?retryWrites=true&w=majority&appName=piProjekt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  db = client.db('vue_express');
  return db;
}

module.exports = connectToDatabase;
