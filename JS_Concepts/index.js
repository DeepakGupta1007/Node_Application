
console.log("Before");
getUser(1,getRepositories)
console.log('After');


function getRepositories(user){
    getRepositories(user,userName,getCommits);
}

function getCommits(repos){
    getCommits(repo,displayCommits);
}
function displayCommits(commits){
    console.lof(commits);
}

function getUser(id,callback){
    setTimeout(()=>{
        console.log("Reading a user from database....");
        callback({id: id,userName:'DeepakGupta1007'});
    },2000)
};


// setTimeout(()=>{
    // console.log('Calling Git Api....');
    // callback(['A','B','C']);
// },2000);