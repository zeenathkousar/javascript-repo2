// Javascript is synchronous single threaded language and it can do only one thing at a time.
// It has only one callstack, it can execute only one thing at a time.
// And wtever code u will give to js, it will be quickly executed by js engine.It doesn’t wait for anything.


console.log('zeenath');

console.log('kousar');

console.log('javascript')

// It will quickly get console into output, it wont wait for sec .
// But wt if we wants to wait for something 

// Suppose I  want to console the middle line after some seconds.
// Hw do we do that? We can use  callback func like settimeout.

// Wrapping that particular line code inside a callback function and we will pass it to settimeout .
//  Settitmeout - takes a callback func and a timer .

// So it is now settimeout task to execute it after some seconds.

// So callback functions allowed us to do asynchornous things,

console.log('zeenath');

setTimeout(function(){

console.log('kousar');
},5000)

console.log('javascript')
