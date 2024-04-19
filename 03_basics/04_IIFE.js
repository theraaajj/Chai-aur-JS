// Immediately Invoked Function Expressions (IIFE)

// 1. suppose app start hote hi database se connection baithana pade 

// function chai(){
//     console.log(`DB connected`)
// }
// chai()

// 2. suppose ek global scope variable hai toh wo toh kahi bhi use ho skta hai toh kabhi bhi pollute kar sakta hai
//i.e. global scope pollution**
// therefore agar kisi function me ye nhi chahie hota toh IIFE laga dete hain 
// kaise??

(function coffee(){
    console.log(`DB connected`)
})();                                        // this is a named IIFE (name hai coffee)

// ()()
//now this is IIFE function itself wrapped in () and a seperate () at the end
// () () :  first one for the function, and the second is the function call

(function aurcode(){
    console.log(`DB connected 2`)
}) ();
// this is a named IIFE (name is aurcode)


// ++++++++++++very important++++++++++++++++++++
 ((naam) => {
    console.log(`DB connected ${naam}`)
 }) ('raj')

//  ('raj') is the parameter given in the function call 
// ((naam)  recieves the argument 'raj'





// +++++++++++++++++++++++++++++++++++++
// one very important thing for interview tricks!
// if there are 2 IIFEs in a single file,
// then they must be seperated with a semicolon,
// otherwise it'll throw an error
