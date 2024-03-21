// Primitive  (Call By Value) : (ek duplicate copy acccess kar paate hain)
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
 

//Reference/NonPrimitive  (Call By Reference) : (original data ka reference/address milta hai)
//Array, Objects, Fucntions

const heros = ["shaktimaan", 'naagraj', "doga"]    //array

let myObj = {
    name: "Raj",                        //object
    age: 21
}

let myFunc = function(){
    console.log("Hello World")          //function
}




//++++++++++++++++++++Memory+++++++++++++++++++++++++

// Stack (primitive datatype)
// Heap   (non-primitive datatype)

let myInstaName = "theraaajj"   //stored as a stack
let myDigitalName = myInstaName
 //myDigitalName ko ek copy mil gaya myInstaName ka
 //if we make a change or delete myDigitalName, myInstaName won't get affected.

 let objOne = {
    email: "user@google.co.com",
    upi: "raj@ybl"
 }

 let objTwo = objOne

 //ab yaha objTwo directly refers the value of objOne stored in the actual memory, so a change or deletion of objTwo will equally affect the value of objOne.

 objTwo.email = "raj@google.com"

 console.log(objTwo.email);   //both are changed toh raj@google.com
 console.log(objOne.email);