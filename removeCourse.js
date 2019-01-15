const Course = require('./courseClass')

async function removeCourse(id) {
  const course = await Course.findByIdAndRemove(id);
  // const result = await Course.deleteOne({ _id: id }); // delete one
  // const result = await Course.deleteMany({ _id: id }); // delete many
  console.log(course);
}

removeCourse('5c3d4ee44a63fe1311f6075d');
