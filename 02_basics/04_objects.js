// const tinderUser = new Object()            // singleton object
const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "Raaju"
tinderUser.isLoggedIn = false

// console.log(tinderUser);                   // { id: '123abc', name: 'Raaju', isLoggedIn: false }

const regularUser = {
    email: "theraaaj@google.com",
    fullName: {
        userFullName: {
            firstName: "Raj",
            lastName: "Aryan"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName.lastName);


// WE can combine objects too!
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = {obj1, objobj32}                // output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }    //not as required
// const obj3 = Object.assign(obj1, obj2)       // aise me 1st parameter is always the target jisme sab add hojata, therefore preferred to write like this:
const obj3 = Object.assign({}, obj1, obj2)      //empty object {} me sab assign hojaega!

const obj4 = {...obj1, ...obj2}                 //spread operator : the most preferred way to merge
// console.log(obj3)


/* Whenever we fetch data from the DataBase,
   we get an array of objects like this:       */

const users = [
    {
        id: 1,
        email: 'raj@ybl.com'
    },
    {},
    {},
    {}
]

users[1].email               //users ke first object ka email

console.log(tinderUser);
console.log(Object.keys(tinderUser));            // VERY IMPORTANT : gives an array of keys in the object 'tinderUser' which is used in various ways incl loops
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser));         //gives all the key:value pairs as diff arrays!


//to check if a property/key is present!
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLoggedOut'))