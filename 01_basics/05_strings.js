//  const name = "Raj"
//  const repoCount = 10

// // console.log (name + repoCount + " Value")   //concatenation

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);     //string interpolation

//another way to declare a string
const myname =  new String ("RAJ ARYAN")

//treated as an object where the string's letters are indexed from 0 to n. length func can be invoked. and multiple other methods are also availed.

// console.log (myname[0]);
// console.log (myname.__proto__);

// console.log (myname.length);
// console.log(myname.toLowerCase());
console.log(myname.charAt(5));
console.log(myname.indexOf("N"));

//substring function
const newString = myname.substring(0, 4)
console.log(newString);

//slice function
const anotherString1 = myname.slice(0, 4)
console.log(anotherString1);

const anotherString2 = myname.slice(-8, 4)
console.log(anotherString2);

const anotherString4 = myname.slice(-8, 6)
console.log(anotherString4);

const anotherString3 = myname.slice(-8, -6)
console.log(anotherString3);

//trim function
const value = "    raj aryan    "
console.log(value);
console.log(value.trim());                  //trimStart and trimEnd

//replace function
const url = "https://theraaajj.com/raj%20aryan"

console.log(url.replace('%20', '-'))

console.log(url.includes('raj'))             //kya url me raj keyword hai kahi?

console.log(url.split('r'))  
               //jaha bhi r aaye waha se split krdo naye word me, aur ek array me pura store kardo    