// Primitive
// 7 types: STring, Number, Null, Boolean, Undefined, Symbol, BigInt

const score = 100           //number
const scoreValue = 100.3    //also a number, nothing like int and float

const loggedIn = true       //boolean
const temp = null           //null
let email;                  //undefined
let name = undefined        //undefined

const id = Symbol('123')
const anotherId = Symbol('123')   //they seem similar but being a symbol datatype, they hold different values!

console.log(id===anotherId);   //false

const bigNmbr = 1395736536313124n  //this is a BigInt DataType
 

//Reference/NonPrimitive
//Array, Objects, Fucntions

const heros = ["shaktimaan", 'naagraj', "doga"]    //array

let myObj = {
    name: "Raj",                        //object
    age: 21
}

let myFunc = function(){
    console.log("Hello World")          //function
}