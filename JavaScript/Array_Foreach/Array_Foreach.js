const numbers = [100, 200, 300, 400, 500, 600, 700];
let values = "";
numbers.forEach(myFunction);
function myFunction(value, index, array){
    if(index==4)
    values= value;
}
console.log(values);

console.log("Find the Element values grater than 500 using values Parameters :");
let value_grater = "";
numbers.forEach(grater);
function grater(value){
    if(value>=500)
    {
        value_grater += value;

    }
}

console.log(value_grater);
console.log("Find the Element values less than 500 using values Parameters :");
let value_lessthan = "";
numbers.forEach(lessthan);
function lessthan(value, index){
    if(value<=500)
    {
        value_lessthan +=index;
    }
}
console.log(value_lessthan);