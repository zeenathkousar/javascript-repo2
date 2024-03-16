//var let const

//Type 1 Quesions: Scoping

// Scope- is a certain region of a program ,where a defined variable exists and can be recognized and beyond that it cannot be recognized.
// Types of scope- global , block,functional scopes

// var a = 5;
// it means it is in global scope
// Can be accessed anywhere.
// console.log(a); // -> u get output as 5

// So var is a global scope , but let and const are block scope.

// eg: write var inside a  block and try to acccess it outside the block, still it will be accessible.

// {
//   var a = 5;
// }
// console.log(a);

//but chnage it to let , u get reference err- a is not defined.

// {
//   let a = 5;
// }
// console.log(a);

//now trying to access it inside that block itself. - u get output as 5

// {
//   let a = 5;
//   console.log(a); // get output as 5 in console

// }

//similaly const
// {
//   const a = 5;
// }
// console.log(a); // get ref err

// {
//   const a = 5;
//   console.log(a); //get output as 5 as accessing it inside its block only
// }

// here there comes another  topic shadowing.

// The introduction of let and const in es6 along with block scoping allows variable shadowing.
// What is variable shadowing.

//lets create a variable inside a function
// function test() {
//   let a = "hello";

//   console.log(a); //here simply u get ouput as hello
// }
// test();

//lets create a block inside this function  and create a variable with same name inside that block also. and try to access it inside that block.

// function test() {
//   let a = "hello";

//   if (true) {
//     let a = "Hi";
//     console.log(a); // u get Hi here
//   }
//   console.log(a); //here simply u get ouput as hello
// }
// test();

//the console.log() inside that if block is printing its own value 'HI" means Hi is overriding Hello value. it is nothing but inside a variable is shadowing  the outside value , but outside of block , the outer a is still acceesible., only inside block it is ovarriding.

//illegal shadowing:
//so,while shadowing a variable it should not close the boundary of scope.that is we can shadow  var variable using let  but cannot use the opposite.
//if u try to shadow let variable by using var , it is known as illegal shadowing and it gives us the error  that variable is already defined.

// // eg: shadowing var using let - same output as let shadowing let

// function test() {
//   var a = "hello";

//   if (true) {
//     let a = "Hi";
//     console.log(a); // u get Hi here
//   }
//   console.log(a); //here simply u get ouput as hello
// }
// test();

// eg: shadowing let using var - this is called illegal shadowing

// function test() {
//   let a = "hello";

//   if (true) {
//     var a = "Hi"; //we get error here as a is already been declared.
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// Type 2 questions - Declaration

// if we do var=a; then again doing var=a , then its absolutely fine. - no error

// var a;
// var a; //- no err - we can redeclare var as many

// but try to redeclare let , it gives  err as 'a' has already been declared.
// let a;
// let a;

//const  variable, we cannot just declare, we have to initialize it with some value while declaring itself.- otherwise get err as missing initializer.
// const a;

//while redeclaring const also gets err - const and let cant be redeclared
// const a = 10;
// const a = 11;

// // but if we do like this then its fine as we already discusssed this as it comes under shadowing
// let a;
// {
//     let a;
// }

// Type 3 questions : Declaration without Initialization

//var  - declaring without initialization is totally fine

// var a; //fine
// var a = 10; //  initialization and declaration in one line is also fine.

//with let also it is completely fine

// let a;
// let a = 10;

//but with const - we have to initialize it when declaring only. otherwise we get initialization err at declaration.
// const a; // missing initializer in  const declaration

//Type4 - Reinitialization questions:

// var - fine no err - we can do it
// var a=5;
// a=6;

//let -  fine no err - we can do it
// let a=5;
// a=6;

//const - err cant change the value of const - so cant reinitialize
// const a = 5;
// a = 5; //assignment to a const vaiable err

//so var and let can be updated but const value cant be updated.

// type 5 Questions - Hoisting  very important topic

// Before understanding hoisting lets check how execution context works.

//let say we have a function  as below

// let a = 10;

// function multiply(x) {
//   return x * 10;
// }

// let b = multiply(a);
// console.log(b);

//to execute this there are 2 phases- creation phase and execution phase.- refer - see how above function gets executes using js engine with 2 phases

// Hoisting:
// So during  creation phase, js engine moves ur variables and function declarations to top of ur code.this is known as hoisting.

// console.log(count); //we get undefined , we didnt get err as declaration var count - is moved to top
// var count = 1;

//this is how js execution context works, it declares all variables and functions at the top during creation phase , annd in execution phase, it checks whether this variable exist in creation phase or not, obviously it was present but value was undeined so got undefined.

// Js will look the above code as this

// var count;
// console.log(count);
// count =1;

//trying with let
// console.log(count); //we get err as  cannot    access 'count' before initialization.
// let count = 1;

// As we got err – cannot access count before initialization – in this way let is overcome the limitations of var

// Let variables also gets hoisted but in temporal deadd zone.

// Temporal Dead Zone: is the time between the declaration and initialization of let and const variaables.

// question- functional hoisting
// function abc() {
//   console.log(a); // we get undefined - bcoz it has initialized this function but it has not initialized this variable yet.
//   //if console.log was after the var a=10 then it will print 10

//   var a = 10;
// }
// abc();

//question2 -
function abc() {
  console.log(a, b, c);
  //we know here a will be undefined but for let and const (b,c) it acts differently.
  //are these two variables also gets hoisted - yes but in temporal dead zone.

  const c = 30;
  let b = 20;
  var a = 10;
}
abc();
