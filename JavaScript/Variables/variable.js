var a = 10;


var a = 20;
document.write("var a value printed :" + a);

a= 45;
document.write("var a value printed :" + a);
{
    a = 55;
    document.write("var a value printed :" + a);
}
document.write("var a value printed :" + a);

let b = 50;
b=40;
console.log(b);

{
   b = 60;
    console.log(b)
    let blockin = 50;
    console.log(blockin);
}

console.log(b);


const cin = 10;
{
    const cin=20;
    console.log(cin);
}

console.log(cin);




var m = 10;
{//1
    console.log(m); // 10
    {//2
        var m = 20;
        {//3
            console.log(m); // 20

        }
    }
    console.log(m); // 20

}

let n = 100;
console.log(n);
{//1
    n = 1001;
    console.log(n);
    {//2
        let n = 2000;
        {//3
            console.log(n+1);

        }
        console.log(n);

    }
    console.log(n);
}

const p = 5000;
console.log(p);
{//1
    console.log(p);
    {//2
        const p = 50001;
        {//3
            console.log(p);

        }
        console.log(p);

    }
    console.log(p); // 5000
}