


const p = new Promise((resolve,reject)=>{
    //Kick off some async work
    //.async work


    //----------//
    setTimeout(()=>{
        // resolve(1);  pending=> resolved,fulfilled
        reject(new Error('Error thrown'));  //pending=> rejected
    },5000)

    //if(error)
    // reject(new Error('message'));
});

p.then(result=> console.log('Result',result))
 .catch(e=>console.log(e.message));