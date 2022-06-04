const numbers = [60, 70, 80, 90, 120, 500, 600, 43, 2, 1];
console.log(numbers);
const number_1 = numbers.map(myFunction);

function myFunction(index){
    if(index > 1)
    {
        return index;
    }
}
console.log(number_1);

const number_2 = numbers.map(multiple);

function multiple(value){
    return value * 2;
}

console.log(number_2);