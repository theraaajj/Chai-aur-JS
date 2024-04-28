              
// "for of" loop on an object?
const myObject = {
    'game1':"NFS",
    'game2': "spiderman"
}

//  for (const [key, value] of myObject) {
    // console.log(key, ":-", value)
//  }
 
 //ERROR:    objects are not iterable using 'for of' loop


 const anObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
 }

 for (const abc in anObj) {
   console.log(abc);             //prints all the keys only. 
   console.log(anObj[abc]);      // prints only the values .
console.log(`${abc} is shorcut for ${anObj[abc]}`)
}

 // objects are iterable using "for in" loops, and not "for of" loops
console.log("**********************************************");
//  will this "for in" loop work for an array?
const myArray = [1, 2, 3 , 4 , 5]
for (const x in myArray) {
    // console.log(x);                  // prints the index, i.e. the key
    // console.log(myArray[x]);         // print the values
    console.log(`the value at index ${x} is ${myArray[x]}`);
}






// major difference in for in and for of is
// for of give