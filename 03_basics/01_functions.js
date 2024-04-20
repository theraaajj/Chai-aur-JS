// Functions:
// to wrap a code into a packaging and use it's copy wherever needed

// console.log("R");
// console.log("A");
// console.log("J");

function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()                            // reference; () mandatory


// function addTwoNmbr(nmbr1, nmbr2) {
//     console.log(nmbr1+nmbr2);
// }

// addTwoNmbr()                           // NaN; no arguments given
// addTwoNmbr(68, 1);                     // 69
// addTwoNmbr(68, "1");                   // 681; concatenates as a string 

// NO values were returned here, just printed
// To call a value see next example
console.log("++++++++++");


function resultRaj(n1, n2) {
    let result = n1 + n2;                    // scope of result just within the function (locally)
    return result;
    console.log("Raj Aryan");                // no sttm executed after return sttm
}

//          OR
/* function resultRaj(n1, n2){
     return n1 + n2
}
*/

const output = resultRaj (20, 2)             // scope of output globally
console.log("Result: " , output);


console.log("++++++++++");


function userLoginMsg (username) {
    return `${username} just logged in.`
}

console.log (userLoginMsg("Raj Aryan"))      // Raj Aryan just logged in.
console.log (userLoginMsg())                 // undefined just logged in.


// to cancel out msg if no name is entered **********************************
function userLoginMsg2 (username) {
    if(username === undefined){
        console.log("Please enter a name.");
        return
    }
    return `${username} just logged in.`
}
console.log (userLoginMsg2 ())


// if no parameter is given we can assign a default parametric value
// this will be automatically overwritten when a value is provided
// function userLoginMsg2 (username = "Someone")******************************