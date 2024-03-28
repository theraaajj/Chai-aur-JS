// Date

let myDate =  new Date()   //made a date object
// console.log(myDate);                //not much readable
// console.log(myDate.toString());     //more readable
// console.log(myDate.toDateString());  
// console.log(myDate.toLocaleString());  
// console.log(myDate.toISOString());  
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON);
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)     //syntax to get a particular date of choice.
// console.log(myCreatedDate);                   //2023-01-23T00:00:00.000Z
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)    // 5 & 3 stands for hours and minutes on a 24hr format
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("10-20-2002")     //for a MM-DD-YYYY format    
// console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);             //time in milliseconds from 1st jan, 1970 till now bcz date & time methods in JS has it origin from this particular date.

console.log(myCreatedDate3.getTime());     //mtlb from 1st jan, 1970 to the date stored in myCreatedDate3


//How to convert time into seconds?  (divide by 1000, within Math.floor to avoid decimals)
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());


newDate.toLocaleString('default', {
    weekday: "long"
})
