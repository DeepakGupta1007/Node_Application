const mongoose = require('mongoose');
const { brotliDecompress } = require('zlib');
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


//Logical Operators
//or
//and

//Function to implment the query for one of the two criteria
async function applyLogicalOperator(){
    const result = await Course
    .find()
    // .or({author: "Deepak Gupta"},{isPublished:false});
    .and([{author: "Deepak Gupta"},{isPublished:false}]);
    console.log(result);
}

// applyLogicalOperator();


async function applyRegularExpression(){
    
    const result = await Course
    
    //Find name starts with Deepak
    // .find({author:/^Deepak/});
    
    //Find name ends with k
    // .find({author:/k$/i});
    //Can append i to make case insensitive

    //Contains a string
    .find({author: /.*pak.*/i});
    console.log(result);

}

// applyRegularExpression();

//Count is a method for counting the entries with filter

//Pagination
async function pagination(){
    const pageNumber =2;
    const pageSize   =10;


    const result = await Course
    .find({author: "Deepak Gupta",isPublished:true})
    .skip((pageNumber-1)*pageSize)
    .limit(pageSize);
}



//We are updating a document with query first
//Approach -1
//  Query First
//  findById()
//  modify()
//  save()

// Approach -2
// Update first
// Update Directly
// Optionally - get the updated document first
// 

//Approach-1
 async function updateDocument1(id){
    const course = await Course.findById(id);
    if(!course)  return;

    course.isPublished = true;
    course.author= 'Rishabh Gupta';
    course.name = 'Aastha Gupta'
    const result = await course.save();

    console.log(result);
 }

//  updateDocument1('65e494d6b9df4a6e06474c48');
 //Approach-2
 async function updateDocument2(id){
    const result = await Course.update({_id:id},{
        $set :{
            author:'Ramji',
            isPublished:false
        }
    });

    console.log(result);

    //Alternative -2   We need to pass an additional parameter to get the updated data 
    const res = await Course.findByIdAndUpdate(id,{
        $set :{
            author:'Radhika',
            isPublished:false
        }
    },{new: true});


    console.log(res);


 }
updateDocument2('65e494d6b9df4a6e06474c48');