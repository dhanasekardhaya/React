const person = {
    firstName: 'dhana',
    lastName: 'sekar',
    age:29
};

for(let key in person){
    console.log("key name :"+ key + " value :"+person[key]);
}

const color = ['red', 'green', 'white'];

for(let colors of color){
    if(colors === 'white')
    {
    for(let i =0; i<colors.length; i++)
    {
        if(i === 0)
        {  
    console.log(i + " "+colors[i].toUpperCase());
        }
        else 
        console.log(i + " " + colors[i]);
    
    }
    
}

}