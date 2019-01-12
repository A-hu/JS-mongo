const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/playground';

mongoose.connect(mongoDB, { useNewUrlParser: true })
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

async function createCourse() {
  // Course object
  const course = new Course({
    name: 'ReactJS',
    author: 'Louis',
    tag: [ 'React', 'Frontend' ],
    isPublished: true
  });

  const result = await course.save();
  console.log(result);
}

// createCourse()

async function getCourse() {
  const courses = await Course
    .find( {author: 'Louis', isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tag: 1 });
  console.log(courses);
}

getCourse()
