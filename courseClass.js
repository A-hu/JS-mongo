const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/playground';

mongoose.connect(mongoDB)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err))

// Should validate in both API and mongodb sites
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    // match: /pattern/
  },
  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'network']
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      validator: function(v) {
        return v && v.length > 0;
      },
      message: 'A course should have at least one tag.'
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function() { return this.isPublished; }, // Can NOT use arraw function
    min: 10,
    max: 200
  }
});

// Course Class
const Course = mongoose.model('Course', courseSchema);

module.exports = Course
