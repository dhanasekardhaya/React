    function loginUser(email, password){
        const promise = new Promise(function (resolve, reject){
        console.log("User Dtails Fetch");
        setTimeout(function (){
            resolve({username: 'dhanasekar', age: 27})
        }, 3000);

    });
    return promise;
}

function ageChecking(age){
    console.log("Validate ur Profiles");
    const promise = new Promise(function (resolve, reject){
        setTimeout(function (){
            (age > 21 ? resolve("Ur eligible age is :" + age): 
            reject("ur age is below 21 :" + age));
        }, 2000)
    })
    return promise;
}

    // loginUser("abc@gamil.com", 123456).then(function (value){
    //     console.log(value.username)
    //     return ageChecking(value.age);
    // }).then(function (userAge){
    //     console.log(userAge);
    // }).catch(function(err){
    //     console.log(err);
    // });


    // Asyn and await
    async function example()
    {
        const userObj = await loginUser("abc@gmail.com", 123456);
        console.log(userObj.username);
        const ageCheck = await ageChecking(userObj.age);
        console.log(ageCheck);
    }

    example();