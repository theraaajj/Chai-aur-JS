const myObj = {
    username: "raj",
    price: 999,

    welcomeMsg : function(){
        console.log(`${this.username}, welcome to my website`);
    }
}

// here this keyword is used for the current context, i.e. it refers to the keys of this particular object only!
// "this" keyword can also be used outside the object/function, so what will be it's current context? let's see:

myObj.welcomeMsg()
myObj.username = "aryan"
myObj.welcomeMsg()

//......................................................................................
// let's see what changes due to this
const myObj2 = {
    username: "raj",
    price: 999,

    welcomeMsg : function(){
        console.log(`${this.username}, welcome to my website`);
        console.log(this);                    //prints the attributes and their value of this object

    }
}

myObj2.welcomeMsg()
myObj2.username = "aryan"
myObj2.welcomeMsg()


// if this console.log(this) is executed outside the obj then it will give empty {}, due to it's scope!
// console.log(this);

// ++++++++++++++++++++++++++browser ke andar ek global object hota hai and that is "window"++++++++++++++++++++
// .......................................................
function chai(){
    console.log(this);
}                  

chai()                   
//prints a lot of things

// .......................................................
const one = function(){
    let name = "Raj"
    console.log(this.username);             //undefined. bcz this function works only in objects and not functions.
}
one()

// now we learn to make a arrow function!
const onee = () => {                        // this is how to make an arrow function.
    let username = "raj aryan"
    console.log(this.username);             // still gives undefined being a function
}

// basic aarrow func syntax 
// () => {}
// can hold this in a name of variable

const hiname = (num1, num2) => {
    return num1 + num2                       // explicit return
}
console.log(hiname(2, 6));

const hiname2 = (num1, num2) => num1 + num2      // implicit return (agar ek line ka code ho)
console.log(hiname2(5, 6));


const hiname3 = (num1, num2) => ({username: "RAJ"})      //kese bhi 2 number ke input pe ye object ko print karega. object hai isliye small brackets me enclosed hai
console.log(hiname3(5, 6));


