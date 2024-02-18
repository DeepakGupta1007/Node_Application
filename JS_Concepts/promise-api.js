//Creating settled Promises

const p =Promise.resolve({id:1});
p.then(result=> console.log(result));



const q =Promise.reject(new Error("Error occured")); //Better to pass Error object which will show callstack
q.catch(error=> console.log(error.message));


//Parallel promise--------------------------------------------------------------

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async op1..");
        resolve(1);
        // reject(new Error('Something failed'));
    },3000)
});


const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("Async op2..");
        resolve(2);
    },6000)
})

// Promise.all([p1,p2])
//     .then(result=> console.log(result))
//     .catch(err=> console.log(err.message));

Promise.race([p1,p2])
    .then(result=> console.log(result))
    .catch(err=> console.log(err.message));