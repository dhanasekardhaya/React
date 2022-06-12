const myObject={
    firstName:'Dhana',
    lastName:'sekar',
    age:30,
    language:['Tamil', 'English', 'Telugu'],
    personName:function(){
        return myObject.firstName + " " + myObject.lastName + " "+ myObject.language[0];
    }
}
console.log(myObject.age);

console.log(myObject.language[1]);
console.log(myObject.personName());


const myArray=[
    {
        firstName:'Dhana',
    lastName:'sekar',
    age:30,
    language:['Tamil', 'English', 'Telugu'],
    personName:function(){
        return myArray[0].firstName + " " + myArray[0].lastName + " "+ myArray[0].language[0];
    }
    },
    {
        firstName:'prakash',
    lastName:'sekar',
    age:30,
    language:['Tamil', 'English', 'Telugu'],
    personName:function(){
        return myArray[1].firstName + " " + myArray[1].lastName + " "+ myArray[1].
        language[1];
    }
    },
]

console.log(myArray[0].personName());
console.log(myArray[1].personName());
console.log(myArray[0].language[1]);
console.log(myArray[0].language[2]);