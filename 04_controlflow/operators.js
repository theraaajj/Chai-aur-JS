
// NULLISH COALESCING OPERATOR (??) : only for null, undefined

let val1;
let val2; 
let val3;
val1 = 5 ?? 10              // agar value aagya (5), toh wahi assign hojaega
val2 = null ?? 10           // agar value null mile toh 10 assign kardega.... 10 acts as a safety value
val3 = null ?? 20 ?? 35     // jo bhi pehla value aajae
console.log(val1);
console.log(val2);
console.log(val3);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// TERNIARY OPERATOR
//condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >= 88 ? console.log("less than 80"): console.log("more than 80")