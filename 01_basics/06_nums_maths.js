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

