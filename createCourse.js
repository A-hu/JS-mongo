const Course = require('./courseClass');

async function createCourse() {
  // Course object
  const course = new Course({
    name: 'NodeJS',
    category: 'WEB',
    author: 'Louis',
    tags: ['frontend'],
    isPublished: true,
    price: 20.5
  });

  try {
    const result = await course.save();
    console.log(result);
  }
  catch (ex) {
    for (field in ex.errors)
      console.log(ex.errors[field].message);
  }
}

createCourse()
