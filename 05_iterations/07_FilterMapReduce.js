// const coding = ['js', 'ruby', 'java', 'cpp', 'python']

// const values = coding.forEach((item)=>{      //for each never returns anything
//     console.log(item);
// })

// console.log(values);                //returned undefined

//for each return nhi karta hai, magar
// filter return karta hai.

const nums = [1,2,3,4,5,6,7,8,9,10]

const values = nums.filter( (num) => num>5 )     //for this to work a condition is needed always.
console.log(values);                   // [ 6, 7, 8, 9, 10 ]

 // agar ye condition num>5 scope me likhenge (i.e. {}) toh return keyword use karna padega.
 const myvalues = nums.filter( (num) => {
    return num>5} )
    console.log(myvalues); 

// ye chiz arrows.js file, arrow function wale me bhi padhe the



//now if we don't want to use filter and use forEach instead, then:
const ank = [1,2,3,4,5,6,7,8,9,10]
const ans = []
ank.forEach((num) => {
    if(num>5)
    ans.push(num)
})
console.log(ans)

