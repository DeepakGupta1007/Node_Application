//Creating settled Promises

const p =Promise.resolve({id:1});
p.then(result=> console.log(result));



const q =Promise.reject(new Error("Error occured")); //Better to pass Error object which will show callstack
q.catch(error=> console.log(error.message));
