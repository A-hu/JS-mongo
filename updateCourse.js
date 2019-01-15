const Course = require('./courseClass')

async function updateCourse(id) {
  // Approach: Query first
  // findById()
  const course = await Course.findById(id);
  if(!course) return;

  // Modify its properties
  course.isPublished = true;
  course.author = 'Another Author';
  // course.set({
  //   isPublished: true,
  //   author: 'Another Auther'
  // });
  // save()
  const result = await course.save();
  console.log(result);
  //
  // Approach: Update first
  // Update directly
  // Optionally: get the updated document
}

updateCourse('5c3c5e1878a707c3ee7fa741');
