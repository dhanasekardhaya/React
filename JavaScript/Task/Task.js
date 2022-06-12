const number = [10, 20, 30, 40, 50];

const number_1 = number.map(myFunction);

console.log("before mapping :"+  number);

function myFunction(value, index){
    return value * 2;
}
console.log(number_1);