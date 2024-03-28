// How to declare?      1.Literal(multiple instances hote hain),       2.Constructor(singleton object/single instance hota hai)
//singleton : Object.create()       (Constructor method)

mySymbol = Symbol("key1")            //declared a symbol for line 16

// Objects Literals 
const jsUser = {                     //key:value ka chakkar
    name: 'Raj',
    age: 21,
    city: 'Patna',
    email: 'raj@gmail.com',
    isLoggedIn: false,
    lastLogin: ['Monday', 'Friday'],

    'full name': 'Raj Aryan',        //this can nvr b accessed using a dot; i.e. jsUSer.full name. only by jsUser['full name']
    [mySymbol]: 'myKey1'             //*******this is how we use symbol as a key in objects! (important for interviews)*******
}

// How to access objects in JS?

// 1. (NOOB)
// console.log(jsUser.email);
//console.log(jsUser['email']);

// 2.



// How to change a value?
jsUser.name = 'Aryan'

// How to fix/lock an object so it can't be changed!?
// Object.freeze(jsUser)
jsUser.name = 'Mogambo'             //makes no change as the object has been freezed
console.log(jsUser)                 //check here how the symbol key is printed


//making a function to greet users
jsUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(jsUser.greeting)        // missing the () gives just a reference that it's a function: "Fucntion (anonymous)"    //somewhat interesting and useful for future
console.log(jsUser.greeting())      // not doing so, bcz object has been freezed and no such 'greeting' function has been made


jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);            //this.name if the key accessed belongs to the same object 
}

console.log(jsUser.greeting2())