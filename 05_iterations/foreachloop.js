const coding = ['js', 'ruby', 'java', 'cpp', 'python']

coding.forEach( function (item) {           //for each is a loop, but seems as an attribute
    console.log(item);
}  )      

//OR

coding.forEach( (item) => {
    console.log(item);
})

//OR++++++OR++++++OR++++++OR++++++OR+++++++OR+++++++OR++++++OR+++++++++++++++++++++++++++++++++++++++++++
console.log("++++++++++++++++++++++++++++++++++++++++++++++")

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);                    // reference dena hai, na ki printMe() karke wahi par execute kardena hai.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);         // this shows that more parameters can also be taken.. sometimes the array list might be needed at each step!
})



// very imp, bcz data from the DB come as an array of objects like this
const myCoding = [
    {
        languageName: 'javascript',
        languageFile: 'js'
    },
    {
        languageName: 'rajaryan',
        languageFile: 'male'
    },
    {
        languageName: 'patna',
        languageFile: 'PNBE'
    }
]

myCoding.forEach ( (item) => {
    console.log(item.languageName);
} )

