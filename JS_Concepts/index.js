const getUser=(id,callback)=>{
    setTimeout(()=>{
        console.log("Reading a user from database....");
        callback({id: id,userName:'DeepakGupta1007'});
    },2000)
};

//Example ofAsync Code 
console.log("Before");
getUser(1,(user)=>{
    getRepositories(user.userName,(obj)=>{
        obj.forEach(data => {
            console.log(data);
        });
    });
});

console.log('After');
//Assesment APi to fetch the repos of the username
function getRepositories(userName,callback){
    setTimeout(()=>{
        console.log('Calling Git Api....');
        callback(['A','B','C']);
    },2000);
}