// MAPS    :is a datatype, an object in itself
// jyda kuch alag hai nahi, bas unique value store karte hain.
//ye ek object hai, with key:value pairs... and this remembers the orders in which we insert the keys, unlike the normal objects in JS

const myVar = new Map()
myVar.set('IN', "india")
myVar.set('US', "united states of america")
myVar.set('FR' , "france")
// myVar.set('IN', "india")             // doesn't get a entry in the map as it is duplicate
// myVar.set('IN', "INDIA")
             // value gets updated
// console.log(myVar);

// Map(3) {
//     'IN' => 'india',
//     'US' => 'united states of america',
//     'FR' => 'france'
//   }

// How to apply loops on maps?
for (const xyz of myVar) {
    console.log(xyz);             // prints all the key value pairs as arrays
}

// How to print only the keys?
for (const [key, value] of myVar) {
    console.log(key, ":-", value);
}

// prints all the key and values seperately!
// output:
                // IN :- india
                // US :- united states of america
                // FR :- france

                for (const [key] of myVar) {
                    console.log(key);              // only keys


                }

// maps are not iterable by for in loops
