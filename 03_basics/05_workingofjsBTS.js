// JavaScript Execution Context : mtlb JS aapke created file ko execute kaise karti hai??
//                                do phase me run karti hai humesa.
// sbse pehle ek global execution context banta HTMLDetailsElement. aur usko refer krdiya jata hai 'this' global variable se!

// javascript single threaded language hai, isliye saari chizen ek process me execute hoti hain..

// 1. Global EC -  

// 2. Function EC

// 3. Eval EC - ususally iska nhi padhna, bas kuch documentation me iska zikr rehta h.. like mongoose

let val1 = 10
let va;2 = 5
function addNum ( num1, num2 ) {
    let total = num1 + num2
    return total
}
let result1 = addNum (val1, val2)
let result2 = addNum (10, 2)

// steps of execution:

// 1. firstly enters a GLOBAL EXECUTION where code is referred by a THIS global variable

// 2. secondly code enters a MEMORY CREATION PHASE :- allocates memory space for variable and stuffs!
// like: val1 -> undefined
//       val2 -> undefined
//       addNum -> definition of function
//       result1 -> undefined
//       result2 -> undefined

// 3. then enters a execution phase:-
//     val1 is assigned 10
//     val2 is assigned 5
//     line 15-18 nthng happens, no execution
//     (line 19) addNum => forms a 'new variable environment' + 'execution thread' (i.e. step 2&3 repeats):
//                        memory phase : val1 -> undefined, val1 -> undefined, total -> undefined
//                        execution phase : num1 -> 10, num2 -> 5, total -> 15
//   the total variable is sent to the global execution context and this new env is deleted. 

//     (line 20) addNum => again forms a 'new variable environment' + 'execution thread' (i.e. step 2&3 repeats)
//                       memory phase : 
//                       exection phase : 
//   the total variable is sent to the global execution context and this new env is also deleted. 
