let a =10
const b = 20
var c = 30

if (true) {
    let d = 40               // let = local scope
    const e = 50             // const = local scope
    var f = 60               // var = global scope
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);              //error; d not defined (local scope)
console.log(e);               //error; e not defoned (local scope)
console.log(f);               //no error; (var provides a global scope)