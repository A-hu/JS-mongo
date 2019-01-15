const Course = require('./courseClass');

async function getCourse() {
  // MongoDB command
  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // get (greater than or equal)
  // lt （less than)
  // lte (less than or equal)
  // in
  // nin (not in)
  //
  // or
  // and

  const pageNumber = 1;
  const pageSize   = 10;

  const courses = await Course
    // /api/courses?pageNumber=2&pageSize=10

    // .find( {author: 'Louis', isPublished: true })
    .find( { _id: '5c3d5ddd0ecd126d8b8791d2' })
    // Pagination
    // .skip((pageNumber - 1)* pageSize)
    // .limit(pageSize)
    // .find({ price: { $gte: 10, $lte: 20 } })
    // .find({ price: { $in: [10, 15, 20] } })
    // .find()
    // .and([ { author: 'Louis' }, { isPublished: true } ])
    // .or([ { author: 'Louis' }, { isPublished: true } ])

    // Regular expression
    // https://docs.mongodb.com/manual/reference/operator/query/regex/
    // starts with Lou
    // .find({ author: /^Lou/ })

    // end with Tseng
    // .find({ author: /Tseng$/i }) // i means case insensitive

    // contains with Lou
    // .find({ author: /.*Lou.*/i })

    // .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tag: 1, price: 1 });
    // .count()
  console.log(courses[0].price);
}

getCourse();
