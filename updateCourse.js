const Course = require('./courseClass')

async function updateCourse(id) {
  // Approach: Query first
  // findById()
  // const course = await Course.findById(id);
  //
  // https://docs.mongodb.com/manual/reference/operator/update/
  // const result = await Course.update({ _id: id }, {
  const course = await Course.findByIdAndUpdate({ _id: id }, {
    $set: {
      author: 'Jason',
      isPublished: false
    }
  }, { new: true });
  // if(!course) return;

  // Modify its properties
  // course.isPublished = true;
  // course.author = 'Another Author';
  // course.set({
  //   isPublished: true,
  //   author: 'Another Auther'
  // });
  // save()
  // const result = await course.save();
  console.log(course);
  //
  // Approach: Update first
  // Update directly
  // Optionally: get the updated document
}

updateCourse('5c3c5e1878a707c3ee7fa741');
