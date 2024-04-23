let a =10
const b = 20
var c = 30

if (true) {
    let d = 40               // let = local scope
    const e = 50             // const = local scope
    var f = 60               // var = global scope (therefore not advised!)
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);              //error; d not defined (local scope)
// console.log(e);               //error; e not defoned (local scope)
// console.log(f);               //no error; (var provides a global scope)


function one(){
    const username = "raj aryan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)

    two()
}
// one()


//+++++++++++++++++interesting (hoisting) +++++++++++++++++++++

//functions can be declared at any point in the code
console.log(addOne(5))
function addOne (num){
    return num + 1
}
addOne(5)

// here the function is declared as a variable so it can't be accessed before the declaration
addTwo(5)
const addTwo = function(){
    return num + 2 
}
