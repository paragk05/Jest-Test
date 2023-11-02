const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/Jest-Test';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
  console.error(`MongoDB connection error: ${error}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = mongoose;
