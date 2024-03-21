// console.log (2>1)
// console.log (2>=1)
// console.log (2<1)
// console.log (2==1)
// console.log (2!=1)

// console.log("2">1)     //true
// console.log("02">1)    //true

console.log(null>0)      //false
console.log(null==0)     //false
console.log(null>=0)     //true : jab 2 comparison operator lag jate toh null ko nmbr(0)
                         //ki tarah treat karte h, i.e. null (0) >= 0 is true

console.log(undefined>0)      //for undefined aisa nhi hota, therefore false
console.log(undefined==0)
console.log(undefined>=0)

// === (strict check); doesn't convert datatypes. strictly check for value and datatype
console.log("2"===2)      //false; no conversion
console.log("2"==2)       //true; conversion