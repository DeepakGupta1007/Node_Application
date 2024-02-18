//Example ofAsync Code 
console.log("Before");
const print=(obj)=>{
    console.log(obj.userName);
};
// getUser(1,print);
console.log(getUser(2));
console.log('After');

function getUser(id,callback){
    setTimeout(()=>{
        console.log("Reading a user from database");
        // callback({id: id,userName:'Deepak'})
        return {id: id,userName:'Deepak'};
    },2000)
}