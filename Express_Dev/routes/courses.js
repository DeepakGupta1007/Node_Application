const express = require('express');
const router =express.Router();



const courses =[
    {id:1,name:'A'},
    {id:2,name:'B'},
    {id:3,name:'C'}
]

//Can remove /api/courses as already included
router.get('/',(req,res)=>{
    res.send(courses);
})


//TO read parameters from url
router.get('/:id',(req,res)=>{
    const course = courses.find(c=> c.id=== parseInt(req.params.id));
    if(!course){
        res.status(404).send("Id not found");
    }
    else{
    res.send(course);
    }
})


router.post('/',(req,res)=>{

    //Adding validation logic
    if(!req.body.name || req.body.name.length<3){
        res.status(400).send('Name is required and should be minimum 3 characters.');
        return;
    }//It is simpler if we have less checks

    //To validate multiple data, we need joi
    //Define schema
    const result = validateCourse(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length+1,
        name:req.body.name,
    };
    courses.push(course);
    res.send(courses);
});

router.put('/:id',(req,res)=>{
    //Look up the course
    //If not exist return 404
    const course = courses.find(c=> c.id=== parseInt(req.params.id));
    if(!course){
        res.status(404).send("Id not found");
        return;
    }
    //Validate
    //If invalid ,return 400-Bad request
    const result=validateCourse(req.body);
    const {error} = result;
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    //Update the course
    course.name = req.body.name;
    res.send(courses);
})


router.delete('/:id',(req,res)=>{
    //Look up the course
    //Not existing
    const course = courses.find(c=> c.id=== parseInt(req.params.id));
    if(!course){
        res.status(404).send("Id not found");
        return;
    }

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
});

const validateCourse=(course)=>{
    const schema={
        name:Joi.string().min(3).required,
    };

    return Joi.validate(course,schema);
}


module.exports =router;