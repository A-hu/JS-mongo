const Course = require('./courseClass');

async function createCourse() {
  // Course object
  const course = new Course({
    // name: 'NodeJS',
    author: 'Louis',
    tag: [ 'Node', 'Backend' ],
    isPublished: true
  });

  try {
    const result = await course.save();
    console.log(result);
  }
  catch (ex) {
    console.log(ex.message);
  }
}

createCourse()
