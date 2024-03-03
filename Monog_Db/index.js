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

//Alternate-2
//This function is used to insert the course
async function createCourse(){
    const course = new Course({
        name: 'React.js',
        author: 'Deepak',
        tags: ['Redux','reactJS'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);

}

//This function is used to query the courses -with the given filter
async function getCourses(){
    const courses = await Course.find({author: 'Deepak Gupta',isPublished:false});
    console.log(courses.length);
}
// getCourses();

//Function to get the specific data not whole object
async function getCoursesSpecificData(){
    const courses = (await Course.find()
    .limit(3)
    .sort({name:1})
    .select({name:1}));
    console.log(courses);
}
// getCoursesSpecificData();

async function removeCourses(){
    const result = await Course.deleteMany();
    console.log(result);
    getCourses();
}
// removeCourses();
// createCourse();

//Mongoose is built on top of mongodb driver

//Comparison Operator
//eq-> Equal
//ne->Not equal
//gt-> greater than
//lt-> less than
//gte-> greater than or equal to
//lte -> less than or equal to
//in
//nin

//Inorder to use comparison  we use {key,value} where key is operator
//with a $ sign to indicate that this is an operator.

//Function to extract course with price with a condition
async function filterCourses(){
    const result = await Course
    // .find({price: {$gte:10,$lte:20}});
    .find({prices: {$in:[10,20,30]}})
    console.log(result);
}

