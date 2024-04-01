const mcu = ['ironman', 'captain america', 'hulk', 'thor']
const dceu = ['superman', 'batman', 'aquaman', 'wonder woman']

// mcu.push(dceu)                    //adds the whole dceu array as a single element at the last of mcu array 
// console.log(mcu);

//now to access element from inside this dceu array, the syntax should be:
// console.log(mcu[4][3]);           //not considered a good way to access!

// if only the values are to be merged, we can use concat()
// const allHeros = mcu.concat(dceu)
// console.log(allHeros);

// this same thing is done easily by a spread operator, eithout a limitation to the no. of arrays to be merged
const allNewHeros = [...mcu, ...dceu]                             //due to dots all elements are spread in the new array
console.log(allNewHeros);

const myArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]           //a multi-depth array
// const anotherArray = myArray.flat(Infinity)                    //with a capital I
// const anotherArray2 = myArray.flat(1)
const anotherArray3 = myArray.flat(2)
console.log(anotherArray3);                                        //Infinity removes any nmbr of depths present, else can give a numeric value upto which depths are to be removed.


console.log(Array.isArray("rajaryan"))
console.log(Array.from("rajaryan"))                                //forms an array of each letter as an element
console.log(Array.from({name:'rajaryan'}))                         //interesting case, can't convert to array asa it's a key:value pair, therefore just gives an empty array



const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3))                      // [ 100, 200, 300 ] : diff variables/values ka ek array