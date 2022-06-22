class PersonDetails {
    constructor(personName, DOB){
        this.personName = personName;
        this.DOB = DOB;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.DOB;
    }
}

let details = new PersonDetails("dhanasekar", 1992);
console.log(details.age());