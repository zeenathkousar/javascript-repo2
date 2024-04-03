//type1:let see how 'this' keyword will behave in global scope
// console.log(this); //it prints window object - why .
//in global scope , this has always value of global object.
//so this keyword in global space represent the global object

//js not only runs on browser, it runs on smart watch or mobile or nodejs , smart bulbs, everywhere js runs, there we have js run time environment.
//inside this brower, the global obj is different,
//inside nodejs or any other place where js is runing , there global obj is different.

//the value of this keyword will be global object.
//in case of browsers, this global object will be window

//thats y it returned window

//this inside function:

//see wt happens if u write this keyword inside a function
// function x() {
//   console.log(this); //got winndow only
// }
// x();

//type2: this keyword will work differently in strict mode and non strict mode.

// lets run it inside a strict mode

// "use strict";
// function x() {
//   console.log(this); //now in strict mode, we get as undefined
// }
// x();

//if u comment strict mode, the  value of this will be window.
//so when we are accessing 'this' keyword inside function, then the value of this will depends on strict/non strict mode
//value will be window if it is in strict mode and the value will be undefined if it is in non strict mode.

//this is becaus of "this substitution" concept
//so according to this substitution , if the value of this keyword is undefined or null, then this will be replaced with global object in only non strict mode.

//so this is inside non strict mode - then this substitution happens

//this keyword value depends on how this function is called.(runtime binding) - lets see now all in strict mode

// "use strict";
// function x() {
//   console.log(this);
// }
// x(); //undefined
// window.x(); // window

//so if the function is called without any reference of an object  then we get undefined.

//type3: this inside a objects method
// const obj = {
//   a: 10,
//   x: function () {
//     //method
//     console.log(this);
//   },
// };

// obj.x(); //now we get the method code as output.
//so if i call a func as obj.x() the value becomes the method
//so here this refer to obj
//if i do     console.log(this.a); - this refers to obj and a means inside variable , obj variable

//call bind apply functions:

//so call apply and bind are used when u have sharing methods

// suppose we have one more method,
// const obj2={
//     a: 20;

// }

//if u want to share this function x with this obj2 - then there is a way to do it, u can do it using call,apply,bind
// lets take a student object , and student has a name
const student = {
  name: "zeenath",
  printName: function () {
    console.log(this);
  },
};
student.printName(); //will print obj {name: "zeenath",printName: f}

//do console.log(this.name) //it prints zeenath

const student2 = {
  name: "deepika",
};
//suppose i want to share this method printname with this second obj student2
// can i do like student2.printName() directly no i cant- it will throw a error  bcoz printname is not a part of
//how can i reuse this method again, by overriding value of this keyword/sharing this method. i can do it by overriding the value of this keyword.

// i have obj1-student and i have another object student2 , student has a function/method and i want to resue this method for student2 .
//i can do it by calling student.printname by call method. so this .call will take value of this keyword inside it,
student.printName.call(student2); // so now inside this printname method,the value of this will become student2 , as we passed student2 as parameter , it acts as this .

//this call method will take this keyword inside this as parameter.

//so inside the method printname , im trying to override this keyword value

//so i can reuse it by passing different values as parameters

//so value of this can be modified using call bind and apply methods

//how this behave inside arrow function
//arrow functions wont have their own this, they takes its lexical environment where they are enclosed.
//arrow functions has no this binding concept, but the value of this in arrow function is the value of this in enclosing lexical context.

// //eg: this in arrow functions
// const obj={
//   a:10,
//   x: function(){
//     console.log(this) //it will print whole obj obj . so the value of this is obj

//   }
// }
// obj.x();

//suppose instead of x function let it a arrow function

// const obj = {
//   a: 10,
//   x: () => {
//     console.log(this); //now the value of this will not be the obj,but it will be its enclosing lexical context. lexical means  how and where it is written in code.
//     //means wehre this obj is lexically present inside code. it is present in global scope. so here this will not behave as ifit is inside function, it will  behave as if it is preesent in global scope.
//     //so here it will print window object.( it will take global obj , as it is in lexical scope of global)
//   },
// };
// obj.x();

//eg
const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
// obj2.x();

//now see the arrow function y is not a method of this obj, but this arrow function is enclosed inside another fucntion which is the method of this obj

//leran call vs bind vs apply

// obj2.x(); - wt it will print,  the value of this will be obj2 , bcoz  the value of this in arrow functions will be the value where it is lexically enclosed..
