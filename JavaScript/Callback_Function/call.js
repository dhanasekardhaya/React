// function mainFunction(fun, fun1, fun2){
//     console.log("Main Function");
//     fun();
//     fun1();
//     fun2();
// }

// function secondFunction(){
//     console.log("Second Function");
// }

// function thirdFunction(){
//     console.log("Third Function");
// }

// mainFunction(()=>{
//     console.log("inside function");
// }, secondFunction, thirdFunction);


function loginUser(email, password, callback){
    console.log("Wait your request process!!");
    setTimeout(function (){
        callback({username: 'dhanasekar'});

    }, 5000);
    //return "something";
}

function getUserDetails(username, callback){
    console.log("Your Details Fetching!!!!");
    setTimeout(function (){
        callback({username: username, age: 27, likes: 100});
    }, 3000);
}

function fetchPost(username, callback){
    console.log("Fecthing your Post Details");
    setTimeout(function (){
        callback(['post1', 'post2']);
    }, 2000)
}



// let userObj = loginUser("abc@gmail.com", 1232456);

// console.log(userObj);

loginUser("abc@gmail.com", 123456, function (userObj){
    console.log("username :" + userObj.username);
    getUserDetails(userObj.username, function(data){
        console.log("User Details :" + userObj.username + "\n age is :"+ data.age + " \n likes :"+ data.likes);
        fetchPost(data.username, function(post){
            console.log("User Name : "+ data.username + " Your post count :"+ post);
        })
    })

});