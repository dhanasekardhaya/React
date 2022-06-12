console.log("------ Block Scope ------");
let x =2;
{
    console.log(x);
}
myFunction()

function myFunction(){
    console.log(x);
}




