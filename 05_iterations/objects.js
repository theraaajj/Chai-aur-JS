              
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