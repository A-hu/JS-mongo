const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/playground';

mongoose.connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err))
