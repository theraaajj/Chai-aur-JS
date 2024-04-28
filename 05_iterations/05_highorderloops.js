// for of 
// specific with arrays, generally
let myArray = [1,2,3,4,5,6]
for (const num of myArray) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const iterator of greetings) {
    if(iterator == " ") continue;           //eliminates space
    console.log(iterator);
}
