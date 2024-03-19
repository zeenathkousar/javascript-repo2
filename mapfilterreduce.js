//map, filter ,reduce are array methods , usually used to iterate a array , perform transformation/computation.
//each may or may not return a new array based on computation.

//what is map()?

// the map () method is used to create a new aray from existing one by applying a function to each elements of first array.
// const nums = [1, 2, 3, 4];

//syntax : map(currentelement,index,originalarray)

// const multiplyThree = nums.map((num, i, nums) => {
//   return num * 3; //it takes each element from array , multiply by 3 and return completely new array multiplied with 3.
// });

// console.log(multiplyThree); //output - [3,6,9,12]

//adding index
// const multiplyThree = nums.map((num, i, nums) => {
//   return num * 3 + i; //it takes each element from array , multiply by 3 and return completely new array multiplied with 3.
// });

// console.log(multiplyThree); //output - [3,7,11,15]

// what is filter()?:
// filter method will takes each element from array and  apply a condition on each element->  if consition returns true, the element gets pushed into output array. If condition returns false, element will not get pushed into conditional array.
// Filter the data which fulfills certain criteria.

// const nums = [1, 2, 3, 4];

// // syntax : filter(currentnum,index,originalarray) - here i dont need of index and original array  so writing only num

// const moreThanTwo = nums.filter((num) => {
//   return num > 2;
// });

// console.log(moreThanTwo);

//what is reduce()?

// Reduces an array of values down to just one value…similar to map and filter, reduce also executes callback function for each element of array.

// const nums = [1, 2, 3, 4];
// //suppose we want to calculate the sum of all these numbers=> that is we want to reduce the array down to one value.

// const sum = nums.reduce((acc, curr, i, arr) => {
//   return acc + curr;
//   //initially acc will  be 0 => 0+1;
// //   then acc becomes 1 =>1+2 => 3;
// //then acc becomes 3 =>  3+ 3 =>6
// //THEN 6+4 =10
// }, 0);

// console.log(sum)  //10

//map,filter,reduce in namaste js.

// Higherorderfunc- take one or more functions as arguments or return a function

// Map(),filter() , reduce() are higher order functions.

// Higher Ordder functions :In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
//Map() function is basically used to transform an array.

// Transforming array is nothing but doubling  each and every element of array, tripling each and every element of array., or to perform any such operation on each and every element of array and getting a new array out of it.

// eg:  let we have an array
// const arr = [5, 1, 3, 2, 6];

// double : [10,2,6,4,12]

//triple: [15,3,9,6,18]

//Binary: ["101","1","11","10","110"]

// So to transform whole array – in such a situation we can use map() function.

//implementing it in code.

// const output=arr.map()
// inside this , we need to pass a function, which tells u that wt transformation  do we need.(double,triple or binary or any).

//lets create function code for double.
// function double(x) {
//   return x * 2;
// }

// const output = arr.map(double);

// it will run this function for each and every element of array and create a new arr out of it.
// U can do console.log(output) – to see new array.

// console.log(output);

// Suppose u want to triple here, just instead of double function , u can pass triple function.

// function triple(x) {
//   return x * 3;
// }

// function binary(x) {
//   return x.toString(2);
// }
// const output = arr.map(binary);
// console.log(output);

// The other valid syntaxes are:

// const output = arr.map(function binary(x) {
//   //keeping function directly as parameter . this is nothing but known as higher order function
//   return x.toString(2);
// });
// const output = arr.map((x) => {
//   //can pass arrow functions /anonymous functions - can remove return keyword as we have only single line
//   return x.toString(2);
// });

// const output = arr.map((x) => x.toString(2));
//can pass arrow functions /anonymous functions - can remove return keyword as we have only single line

// so basically map() - is used for mapping each and every element of an array with a logic function.

//filter:

// filter is basically used to filter the values inside an array
//suppose we have an araray, and we want to filter some values from array which are odd inside it.
// eg: filtering values from array - which are greater than 4 ,
//  or filtering all even numbers from an array.
//or filtering all the numbers divisible by 5
//so we are taking an array, and filtering out only some elements from array which satisfy some logic.

// // eg: implementing code for finding odd values from Array.

// const arr = [5, 1, 3, 2, 6];

// //filter odd values
// function isOdd(x) {
//   return x % 2;
// }

// const output = arr.filter(isOdd);
// console.log(output);

// // eg: implenting for filtering even values
// function isEven(x) {
//   return x % 2 == 0;
// }
// const output = arr.filter(isEven);
// console.log(output);

// // eg: finding all values greater than 4

// function isGre(x) {
//   return x > 4;
// }
// const output = arr.filter(isGre);
// console.log(output);

//similarly we can directly pass function to this filter method and also as arrow functions. these syntaxes also valid for this filter method.

// const output = arr.filter(function isGre(x) { //valid
//   return x > 4;
// }
// );
// const output = arr.filter((x)=> x>4); //valid

// Reduce method: it is not reducing anything , so its functionality is not related to the method name

// so reduce is used in such a case, where u take all elements of an array and came out with only single value as a result out of it.
// eg: taking an arr and iterate each and every element and find out the sum of all elemnets
// eg: or iterating whole array and finding max/largest number out of it.

// // eg: finding sum without using filter

// const arr = [5, 1, 3, 2, 6];

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(findSum(arr));

// converting this func into reduce function

// const output=arr.reduce(fucntion(acc,curr){}) //the inside function will take 2 parameters- accumulator and current

// this reduce func will iterate each value of an array and  ‘curr’(2nd parameter) represents the current element. ‘acc’(1st parameter ) is basically used to accumulate the values/accumulate the result wt we get at each step.
// If we compare reduce  method with traditional function .
// Curr is nothing but arr[i] and acc is sum. => so here , we can do as , acc= acc+curr; and then return acc;

// const output=arr.reduce(fucntion(acc,curr){
//     acc=acc+curr;
//     return acc;

// })

// But here we need to give some initial value also for accumulator . -> that we can provide as second arg to reduce function.
// 2nd parameter- any initial value that u pass to ACC variable.

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output); //17 output

// eg:finding maximum value from an array

//own tried logic
// const arr = [5, 1, 3, 2, 6];

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr)); //output:6

// // otherr logic
// const arr = [5, 1, 3, 2, 6];

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

//writing it using reduce method ,lets try without using reference of above function

// const arr = [5, 1, 3, 2, 6];

// const output = arr.reduce(function (max, curr) {
//   //here acc can be max, and curr can be arr[i];
//   //initial value of acc=0; //y zero, array willbe non empty and positive value, so least possible positive value is 0
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);
// console.log(output); //6

//lets take a complicated array.
const users = [
  { firstName: "akshay", lastname: "saini", age: 26 },
  { firstName: "donald", lastname: "trump", age: 75 },
  { firstName: "elon", lastname: "musk", age: 50 },
  { firstName: "deepika", lastname: "padukone", age: 26 },
];

// This array has 3 properties firstname,lastname and age.
// Let assume that this is the data which we are getting from some api.a realworld eg
// Let say finding a list of full names from this obj. [“akshay saini”,”Donald trump”,”elon musk”,”deepika padukone”]
// ?Guess wt  function will be used here.

// We will use map() function here.
// const output=users.map(x=>) //here x repesent the first item of array -  { firstName: "akshay", lastname: "saini", age: 26 }
// const output = users.map((x) => x.firstName + " " + x.lastname);

// console.log(output);

// Eg: finding no of people with particular same age.
// For this finding different kinds of ages available and then finding how many people having age 26 inside this.
// {26 age:2 , 75 :1 ,50:1}
// Like this if we have huge list of users, and finding no of users of particular age.
// {26 age:2 , 75 :1 ,50:1}  we have to make a list like this, should we use map,filter,reduce.
// We use reduce – bcoz from whole array – we need find a single value digit . we need result as single object -  {26 age:2 , 75 :1 ,50:1} with different unique values with count of individual values. As we want to reduce our array to one particular value i.e. an obj.

// const output=users.reduce(function (acc,curr){

// },initial value)

// Over here, our acc is the obj  {26 age:2 , 75 :1 ,50:1} . so initial value will be an empty obj.
//curr points to each obj at a time.

// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(output);

// Eg: finding firstnameof  all users whose age is less than 30;

// const output = users.filter(function (x) {
//   let names = [];
//   // if (x.age < 30) {
//   //   names = x.firstName;
//   //   console.log(names);
//   // }
//   // return names;
// });
// console.log(output);

// const output = users.filter(function (x) {
//   return x.age < 30;
// });
// for (i = 0; i < output.length; i++) {
//   console.log(output[i].firstName);
// }

// const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output);

//suppose we want output as ["akshay","deepika"]

// We got the desired output.
// Instead of filter and map, u can use reduce also.

// const output = users.reduce(function (acc, curr) {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);

// console.log(output);
