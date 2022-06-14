const person ={
    fullname: function(){
        return this.firstName + " " + this.lastName;
    }
}

const personName = {
    firstName: "dhana",
    lastName: "Sekar"

}

console.log (person.fullname.call(personName));

console.log (person.fullname.apply(personName));

let fullName = person.fullname.bind(personName);

console.log(fullName());
