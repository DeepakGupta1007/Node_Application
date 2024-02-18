const getUser=(id,callback)=>{
    setTimeout(()=>{
        console.log("Reading a user from database....");
        callback({id: id,userName:'DeepakGupta1007'});
    },2000)
};

function getRepositories(userName,callback){
    setTimeout(()=>{
        console.log('Calling Git Api....');
        callback(['A','B','C']);
    },2000);
}


//Example ofAsync Code 
console.log("Before");
getUser(1,(user)=>{
    getRepositories(user.userName,(obj)=>{
        obj.forEach(repo => {
            console.log(repo);
            //Now if we want to get the commit for each repo
            getCommits(repo,(commits)=>{
                //Callback hell is the problem occured if followed the above approach.
            });
        });
    });
});
console.log('After');



//It the above code is synchronous 
// console.log('Before');
// const user =getUser(1);
// const repos=getRepositories(user.userName);
// const commits=getCommits(repos[0]);
// console.log('After');