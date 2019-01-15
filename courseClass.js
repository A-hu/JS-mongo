const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/playground';

mongoose.connect(mongoDB)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err))

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tag: [ String ],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

// Course Class
const Course = mongoose.model('Course', courseSchema);

module.exports = Course
