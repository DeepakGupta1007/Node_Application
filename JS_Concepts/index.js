const getUser=(id)=>{
    return new Promise((resolve,reject)=>{
        //Some async work
        setTimeout(()=>{
            resolve({id: id,userName:'DeepakGupta1007'})
        },2000);
        console.log("Reading a user from database....");
    })
    
};

//Example ofAsync Code 
console.log("Before");
getUser(1)
    .then(userObj=> getRepositories(userObj.userName))
    .then(repos => repos.forEach(repo => console.log(repo)))
    .catch(err=>console.log('Error',err.message));


console.log('After');
//Assesment APi to fetch the repos of the username
function getRepositories(userName){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Calling Git Api....');
            resolve(['A','B','C']);//Resolving this user with this object.
        },2000)
    })
}