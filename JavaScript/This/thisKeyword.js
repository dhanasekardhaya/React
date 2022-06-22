const personName = {
    firstName: 'dhana',
    lastName: 'sekar',
    age: 30,
    fullName: function() {
        return (this.firstName + " "+ this.lastName)

    }
}
console.log(personName.fullName());


const objectCall = {
    bike: function(){
        return (this.carName + " "+ this.carModel);
    }
};

const car = {
    carName: 'BMW',
    carModel: 2022,
    
};

let x = objectCall.bike.bind(car);
console.log(x());

const laptop ={
    laptopName: 'accer',
    laptopModel: 'I10',
    laptopSpecific: () => {
        return (laptop.laptopName);
    }
};

console.log(laptop.laptopSpecific());

const mobile = {
    mobileName: 'Nokia',
    MobileModel: 123
};
this.mobileName = 'SSS';
mobileSpecific = () => {
    return this.mobileName;
}

console.log(mobileSpecific());


const browser = {
    'browserName': 'Chrome',
    'browserVersion': 123,
    arrowFun: null,
    browserfun: function(){
        this.arrowFun = () =>{
            return(this.browserName + " "+ this.browserVersion);
        }
    },
};
browser.browserfun();
console.log(browser.arrowFun());


var obj1 = { 
    name: "Pulsawr", 
      arrowFun :null,
    bike: function () {
         this.arrowFun = () => {
            console.log(this.name);
      }}, };
  obj1.bike();//
  obj1.arrowFun();
  

  var u = (a, b) => {return a+b};
  console.log(u(10, 20));


  add = () =>{
    return 10+20;
  }

  console.log(add());


  const colors = ["red", "green", "black"];
const mm = (a, b) =>{return colors[a] + " " + colors[b]};
console.log(mm(0, 2));

let yamaha = {
    model_1:{
    'yName': 'Rx100',
    'yType': 'latest',
    df: function (){
        return this.yName;
    }
    },
    model_2:
    {
        'jj': 'ddfff',
        variant: function(){
            return yamaha.model_1.df();
        }

    }

}
console.log(yamaha.model_2.variant());

let a = "";
let b ="";
function sub(a, b){
return (a - b);
}

console.log(sub(10, 20));