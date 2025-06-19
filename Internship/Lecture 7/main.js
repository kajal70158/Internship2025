// //Object

// let person = {
//     name : "Kajal",
//     age :25,
//     proffesion :"developer",
//     skills:["HTML" ,"CSS","JS"]
// }

// console.log(person);
// console.log(person.skills);
// console.log(person["proffesion"]);

// //arithmetic operators
// // +,-,*,/,**

// console.log(Math.pow(2,5)); //2^5
// // console.log(2**5); //2^5
// // console.log(Math.sqrt(4)); //square root of 4 

// //assingment operators

// //conditional operators
// let a = 10;
// let b = "10"
// if(a==b){
//     console.log(true)
// }

// if(a===b ){
//     console.log(true);
// }

// if(a===b  || b==a){
//     console.log(true);
// }

// if( (a===b || a==b) || (a===b && a==b)){
//    console.log("true");
// }
// else{
//     console.log("False");
// }

// if( (a===b || a==b) || (a===b && a==b) && (a==b)){
//    console.log("true");
// }
// else{
//     console.log("False");
// }
// //ternary operator

// (a===b?console.log("true statement"):console.log("False statement"))
// let result = (a==b?"true":"false");
// console.log("result =>",result);

// //Chaining
// (a==b?(a===b?console.log("a and b are equal and both are of same data type"):
// console.log("a and b are equal but both are of different data type")
// ):console.log("not equal"))

// //loop
// let arr = [1,2,3,4,5,6,7,8];
// //for of loop
// for (let element of arr) {
//     console.log(element);
// }

// for(let key in arr){
//     console.log(key); //will print index 
// }


// let person2 = {
//     name : "Kajal",
//     age :25,
//     proffesion :"developer",
//     skills:["HTML" ,"CSS","JS"]
// }

// //for in loop
// for (let key in person2) {
//     console.log(key,"->",person[key]);

// }
// while(true){
//     console.log("while loop")
// }

//Functions (mini program) : - it is a set of statements which can be reused
// function fun(){
//     console.log("object");
//     return 5;
// }

// let result = fun();
// console.log(fun());

// function fun2(){
//     return 10+20;
// }
// console.log(fun2());

// function sum(a,b){
//       return a+b;
// }
// let ans = sum(a=100,b=400);
// // let ans = sum(100,400);
// console.log(ans);


// //default arguments
// function fun3(a=0,b=0,c=0){
//     return(a+b+c);
// }
// let res = fun3(1,2,7);
// console.log(res);


// function fun4(){
//     return{
//         name:"kajal",
//         work:"nothing",
//     }
// }
// console.log(fun4());

//Arrow functions
//Can not access arrow fun before
// let arrowFun = ()=>{
//     console.log("this is arrow function");
//     return "return from arrow function"
// }
// let arrowRes = arrowFun();
// console.log(arrowRes);

let arrowFun2 = (a,b)=>{
    console.log("this is arrow function");
    return a+b;
}
let arrowres = arrowFun2();
console.log(arrowres);

//Limitation of arrow function
//Hoisting
let a=10;
console.log(a);
function fun5(a,b){
     return a+b;
}

function fun5(a,b,c){
    return a+b+c;
}
res = fun5(2,3,4);


function fun5(a,b,c,d){
    return a+b+c+d;
}
res = fun5(2,3,4,5);
// res = fun5(2,3,4);//error , it runs only first two function
console.log(res);