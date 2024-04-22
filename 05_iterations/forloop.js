// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
// }

// table of all numbers from 0 to 10
for (let i=1; i<=10; i++){
    for (let j=1; j <= 10; j++) {
        console.log(i+'*'+j+'='+i*j);  
    }
}

// accessing array using for loop!
let myArray = ['flash', 'hulk', 'spidey']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}