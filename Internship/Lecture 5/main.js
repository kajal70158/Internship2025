/*
// <!-------------------JAVASCRIPT---------------------->
// <!--Only coding language in MERN Stack
// Javascript :- 1. It is a weekly type language(no need to define data type of variable)
// 2. No need to compile before running 
// 3. Code compile line by line(synchronous behaviour ) 
// synchronous :code runs line by line ( One line of code compiles , gives result and then second lines runs and so on )
// Compiler name : V8 engine -> browser 
// datatypes : - 1. number
// 2. string
// 3. boolean(false values : 0 , null, undefined, NaN,false)
// 4. null
// 5. undefined

// How to define variable -> let,var,const
// REPL :- Read Evaluate Print Loop
//initialise : let b; -> declare variable a 
Declare : let a=10; -> initialise variable a with value 10
reinitialise : we do not initilalise variable again
// redeclare : let a=30; -> redeclare variable a with value 30
// assign : give vlaue to the initialised variable
// reassign : give other value to the same variable
// let : strongly typed variable
// var : weekly typed variable
// const : We can update the const variable but we can not change the value of the const variable when it is initialised 
|       | Initialize | Declare | Reinitialize | Redeclare | Assign | Reassign |
| ------| ---------- | ------- | ------------ | --------- | ------ | -------- |
| var   | true       | true    | true         | true      | true   | true     |
| let   | true       | true    | false        | false     | true   | true     | global scope,no effect of block scope , can't access variable outside the block
| const | true       | false   | false        | false     | true   | false    |
 Scopes : Global Scope : We can access the variable anywhere in the code
  Block Scope :{use let and const} We can access the variable only inside the block
  STACK : It is a data structure which stores the variables in the memory
  CALL STACK : It is a data structure which stores the function calls in the memory
  two parts of call stack :
    1. Execution : Code is executed line by line
    2. Read : Memory allocation for the variables and functions , only the var variable are undefined initially 
*/
// var a=5;
// {
//     console.log(a); 
//     var a=20;
//     console.log(a); 
// }
// console.log(a); 
// let b="hello";
// const c=true;

const { application } = require("express");

// const arr=[1,2,3,4,5];
// arr[1]=10; // We can update the value of the array
// arr[6,7,8,9,10]; // this is reassignment of array and it is not allowed
// console.log("Hello, World!");

// console.log(temp);
// var temp = "this is temp";
// console.log(temp);

// console.log(temp2);
// //dead temporal zone (unless it is assigned a value)
// let temp2 = "this is temp2"; // This will give error because let is block scoped and we can't access it before declaration
// console.log(temp2);

// console.log(ar); //undefined
// var ar;
// console.log(ar); //undefined
// ar=10;
// console.log(ar);//10

// console.log(ar); //error
// let ar;
// console.log(ar); //error
// const ar=10;
// console.log(ar);//error

/*------------array----------*/
// let arrr=[1,2,3,"item 4",true ,null,undefined]
// let TwoDArr =[
//     [1,2,3],
//     [5,6,7]
// ]
// console.log(TwoDArr);
// console.log(TwoDArr[0][1]); //-> 2
// console.log(TwoDArr[1][2]); //-> 6
// console.log(arrr[4]);

/*-------------array methods------------*/

//Add items at beginning
arrr=[1,2,3,4,5]
//array.unshift(50);
arrr.unshift(50,44,35)
console.log(arrr);
//delete item from beginning
arrr.shift();
console.log(arrr);

let aa=[1,2,3,4,5]
// let SubArr = aa.slice(2,4);
let SubArr = aa.slice(2);//starts from 2nd index and ends at last
console.log(SubArr);

//Splice - 3 functionalities : add, delete, replace
//delete elements from between the array
console.log(aa);
aa.splice(3,1)//delete one element at index 3
aa.splice(3,3)//delete three elements at index 3
console.log(aa);
//add elements at index 1 and shift elements forward
aa.splice(1,0,10);
aa.splice(1,0,10,11,12,13);
console.log(aa);

let strAA = aa.toString();
let strArr = aa.join("  ")
console.log(strAA);
console.log(strArr);



