const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// Connection URI
const uri = 'mongodb://localhost/Deepak'; // Change this to your MongoDB URI

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
    // You can start defining your models and performing operations using Mongoose
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags:[String],
    data: {type:Date,default:Date.now},
    isPublished: Boolean,
})

//Classes, Objects


//Creating a class
 const Course = mongoose.model('Course',courseSchema);
const course = new Course({
    name: 'Node.js',
    author: 'Deepak',
    tags: ['node','mongodb'],
    isPublished: true
});
course.save();