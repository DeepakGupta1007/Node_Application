const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// Connection URI
const uri = 'mongodb://localhost/mongo-exercises'; // Change this to your MongoDB URI

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
    author:String,
    tags:[String],
    date: Date,
    isPublished: Boolean,
    price:Number
});

const course =mongoose.model('Course',courseSchema);

async function getData(){
    const courses = await course
    .find({isPublished:true,tags:'backend'})
    .sort({name:1})
    .select({name:1,author:1});

    console.log(courses);
}

// getData();


//Exercise-2
async function getExercise2(){
    const courses = await course
    .find({isPublished:true})
    .or([{tags:'backend'},{tags:'frontend'}])
    .sort({price:-1})
    .select({name:1,author:1,price:1});

    console.log(courses);
}

// getExercise2();


//Exercise-3
async function getExercise3(){
    const courses = await course
    .find({isPublished:true})
    .or([{price:{$gte:15}},{name:'/.*by.*/'}]);
    console.log(courses);
}

getExercise3();