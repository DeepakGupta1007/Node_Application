const getUser=(id)=>{
    return new Promise((resolve,reject)=>{
        //Some async work
        setTimeout(()=>{
            resolve({id: id,userName:'DeepakGupta1007'})
        },2000);
        console.log("Reading a user from database....");
    })
    
};
//Async and await are build on top of promises.
console.log("Before");
async function displayRepo(){
    try{
        const user = await getUser(1)
        const repos= await getRepositories(user.userName);
        await repos.forEach(repo => console.log(repo));
    }
    catch(err){
        console.log('Error',err.message);
    }
}
displayRepo();
console.log('After');
//Assesment APi to fetch the repos of the username
function getRepositories(userName){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Calling Git Api....');
            // reject(new Error('Could not get'));
            resolve(['A','B','C']);//Resolving this user with this object.
        },2000)
    })
}