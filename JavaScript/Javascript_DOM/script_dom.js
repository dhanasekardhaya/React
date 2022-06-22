const person = {
    firstName: 'Dhana',
    lastName: 'Sekar',
    age: 30,
    greetuser(){
        return "My name is "+ this.firstName + this.lastName + " my age is :" + this.age;
    }
}
const personName = person.greetuser();

const x = document.getElementsByTagNameNS;
x=personName;