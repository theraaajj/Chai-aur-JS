// Promises : The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// A Promise is in one of these states:

// pending:   initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected:  meaning that the operation failed.

// fetch('https:///something.com'.then().catch().finally())

// then() me reponse aayega.
// catch() me error aayega.
// finally() to execute hoga hi hoga.

const promiseOne = new Promise(function(resolve, reject){       // created
    // do an async task :
    // DB calls, sryptography, network calls
    setTimeout(function(){
        console.log('Async task is complete');
    }, 1000)
})

promiseOne.then(function(){                      
    console.log("Promise consumed");
})
 
// consumption aise hi hota hai, jisme .then() function hota hai
// jo ki ek default function leta hai args me, and "direct contact iska promise creation ke resolve se rehta hai"
// mtlb agar promise waha kch output generate kiya (reject nhi hua toh) toh wo ye function me aayega
// aur tab ye kaam karega
// magar itna kardiye: Async task is complete print hogya but ye Promise  consumed toh nhi aaya. ye kyun bhala?
// kyuki hume .then() aur resolve ko connect karna padta hai

// toh ek method lagate hain settimeout wle me resolve()


const promiseTwo = new Promise(function(resolve, reject){       // created
       setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseTwo.then(function(){                      
    console.log("Promise consumed");
})


// ab itna bhi jaruri nhi hai ki variable me store karega
// direct ek hi operations me carryOut karskte

new Promise(function(resolve, reject){       // created
    setTimeout(function(){
     console.log('Async task 2');
     resolve()
 }, 1000)

}).then(function(){                      
    console.log("Async 2 resolved.");
})

// ab data kaise pass karte hain promise ke through?
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "raj" , email: "raj@haha.com"})            // aise object ke form me data pass karte hain. array bhi ho sakta hai
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// chalo ab dekhte hain error bhi ho agar.
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true                     // maanle file access karrhe the aur error aagya. toh uske liye bhi kuch toh karega hi naa!
        if(!error){
            resolve({username: "raj", passwrd: 123})
        }
        else{
            reject('Something went wrong')
        }
    }, 2000)
})

// promiseFour.then().catch() : iss format se error bhi handle kar paate hain
// multiple .then() lagta hai nesrted value object se nikalne ko, specially in a DB CONNECTION
promiseFour.then((user) => {
    console.log(user);
    return user.username                // aise likh dene se user.username access nhi hojata. ek aru .then() lagana padta hai
})
.then((username) => {
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally((abc)=> console.log("so promise is either resolved or rejected"))
// ye .finally() to hoga hi hoga hmesha





// real scenario!
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true                     // maanle file access karrhe the aur error aagya. toh uske liye bhi kuch toh karega hi naa!
        if(!error){
            resolve({username: "javascript", passwrd: "123"})
        }
        else{
            reject('ERROR : JS went wrong')
        }
    }, 2000)
});
// ab jaruri thodi hai ki promise ko bas .then(), .catch() se hi handle kare
// async/await bhi hota hai aur ye bekar nhi hai
// chalo try karte hain promiseFive ke liye!!

// async function consumePromiseFive(){
//    const response = await promiseFive         // yaha promiseFive() mat likh dena kyuki ye object hai, function nhi
//    console.log(response);
// }
// scene async/await ke sath yahi hai ki resolve handle karlega magar default error handle nhi kar sakta hai
// aur isko handle karne ke liye ek try catch block ka use karte hai async/await me
async function consumePromiseFive(){
    try{
        const response = await promiseFive         // yaha promiseFive() mat likh dena kyuki ye object hai, function nhi
        console.log(response);
    } catch (error){
        console.log(error);
    }
 }
 consumePromiseFive()
 // await lagta hai jab koi chiz/opertaion time consuming ho!













 async function getAllUsers(){
    try {
        const response = fetch("https://jsonplaceholder.typicode.com/users")
        const data = (await response).json()               //json format me karne ke liy etime lagta hai isliye value nhi aata hai, therefore await lagate hain naaaaaaaa
        console.log(data);
    } catch (error) {
        console.log("E: ", error);

    }
 }
 getAllUsers()