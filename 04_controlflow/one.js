//     if

//     if(condition){
//   
//     }
//     executes only if condition is true 

const userLoggedIn = true
if(userLoggedIn){
    console.log("WELCOME USER")
}

// condition is evaluated with some comparison operators. they are < , > , <= , >= , == , != , ===
// === : value ke sath, type bhi check karta hai

if(2 === "2"){
    console.log("THEY'RE EQUAL")       // not executed
}
// doesn't print anything bcz although value is same but their types (i.e. int and string) doesn't matches.

// but it works with '=='
if(2 == "2"){
    console.log("THEY'RE EQUAL")        //executed
}

// let temp = 40
// if(temp>35){
//     console.log("hot")
// }
// else
// console.log("cold")

// const balance = 999
// if(balance > 500) console.log("yes");     // shorthand notation. a semicolon is a must************