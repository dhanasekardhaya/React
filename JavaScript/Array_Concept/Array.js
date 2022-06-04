const colors = ["White", "Black", "Red", "Green", "Yellow", "Orange"];
console.log(colors);
console.log("Array push method adding value in last index: "+ colors.push("pink"));
console.log("Push results : "+ colors);
console.log("Array pop method deleted value in last position: "+ colors.pop("pink"));
console.log("Pop results : "+ colors);
console.log("Array shifting method remove value in Zero Index: "+ colors.shift("pink"));
console.log(colors);
console.log("Array unshifting method added value in Zero Index: "+ colors.unshift("pink"));
console.log(colors);
console.log(colors.sort());
const cars = ["Maruthi", "Honda", "BMW", "Audi", "Benz"];
const bikes = ["Yamaha", "Bullet", "Hero", "TVS"];
console.log("Contact the Two Arrays :")
console.log(cars.concat(bikes));