const score = 400
console.log(score);

//when declaring as an object
const balance = new Number(500)
console.log(balance);
//specifies it to be a number and thereby few functions can be applied.

// console.log(balance.toString());               //converts to string and therefore strings functions are availed.
console.log(balance.toString().length);
console.log(balance.toFixed(1));                  //provides a precision value in case the value of output exceeds it's length

const otherNumber  = 23.886468
const otherNumber2 = 123.886468
console.log(otherNumber.toPrecision(3));        //converts to string of digit length 3
console.log(otherNumber2.toPrecision(3));       //and rounds off in a case like this!

const hundreds = 100000000
console.log(hundreds.toLocaleString());         //represents the number according to the US standards
console.log(hundreds.toLocaleString('en-IN'))   //represents the number according to the INDIAN standards

console.log("Results of MATHs starts from here!")
//++++++++++++++++++++++ MATHS ++++++++++++++++++++++++

console.log(Math);           //so this is an object in javascript
//therefore it also has a number of functions it can use!

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4, 6, 4, 5, 6,8,9,2));
console.log(Math.max(4, 6, 4, 5, 6,8,9,2));


console.log(Math.random());              //random value between 0 & 1
console.log(Math.random()*10);     
console.log((Math.random()*10) + 1);     //do this in case you don't need a 0(zero) as an output.
console.log(Math.floor(Math.random()*10) + 1)


//suppose wo random number chahie kisi 2 particular numbers ke bich me hi then?
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)          //VERY VERY IMPORTANT