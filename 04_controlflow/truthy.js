// const userEmail = "raj@google.com"        //true bcz it has some value

// if (userEmail) console.log("Got User Email");
// else console.log("No Email Found");

// output: Got User Email
// .
// .
// .
// .
// .
// const userEmail = ""            //empty string (false)

// if (userEmail) console.log("Got User Email");
// else console.log("No Email Found");

// // output: No Email Found
// .
// .
// .
// .
const userEmail = []                 //empty array (true)

if (userEmail) console.log("Got User Email");
else console.log("No Email Found");

// output: Got User Email

// this has an empty array, but still it is true. Why?
// bcz an empty array is a TRUTHY VALUE (that is considered true)
// unlike an empty string ( "" ) which is considered false i.e. a FALSY VALUE

// falsy value : false, 0, -0, bigInt 0n, "", NULL, undefined, NaN
// truthy value : "0", 'false', [], " ", {}, function(){},            and everything else than falsy value

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
// Object.keys(emptyObj) returns an empty array.



// can be asked in interviews
// false == 0      is true
// false == ''     is true
// 0 == ''         is true