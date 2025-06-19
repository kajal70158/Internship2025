//higher order and functions & calback function
/*------------------Higher Order Function-------------
When we pass a function as a argument(parameters) to anotherfunction is called higher order function  ----another function --> higher order function-------- */

// function helper(){
//     console.log("helper function is executing...");
//     return 10;
// }
// function higherorder(fun){
//      console.log("higher order executing...");
//      let res = fun();
//      return +(res)+5;
// }

// let result = higherorder(helper);
// console.log(result);

// let result2 = higherorder(function(){
//     console.log("this is annonymous function");
//     return 20;
// })

// let result2 = higherorder(()=>{
//     console.log("this is annonymous function");
//     return "20";
// })
// console.log(result2);

//Call back function

// function cb(a,b){
//     console.log("call back executing...");
//     return a+b;
// }

// function parent(a,b,fun){
//     console.log("higher order executing...");
//     let sum = a+b;
// //     let result = fun(sum,20);
// //     return result;
// return fun(sum,20);
// }
// let ans2 = parent(10,20,cb);
// console.log(ans2);

// let arr = [1,2,3,4,5,6]
// function square(num){
//     return num*num;
//     // return num**2;
// }

// function cube(num){
//     return num**3;
// }

// function ArrConverter(array,fun){
//     let ar = [];
//     for(let element of array){
//       let powVal = fun(element)
//       ar.push(powVal);
//     }
//     return ar;
// }
// let sqArr = ArrConverter(arr,square);
// console.log(sqArr);
// let cubeArr = ArrConverter(arr,cube);
// console.log(cubeArr);

// /*-----------------------------------------------------Practice question----------------------------------*/
// function cb(x){
//     console.log("callback function",x);
//     return function(y){
//         console.log("inner function",y);
//         return x+y;
//     };
// }
// function higher(callback){
//     console.log("higher order function");
//     let innerFunc = callback(5);
//     console.log("this is below call");
//     return innerFunc(10);
// }
// console.log(higher(cb));

// //Question 2
// function cb(x){
//     console.log("callback function",x);
//     if(x>10){
//         return "Greater than 10";
//     }else{
//         return "Less than or equal to 10";
//     }
// }
// function higher(callback,value){
//     console.log("higher order function");
//     let ans = callback(value);
//     console.log("this is below call");
//     return ans;
// }
// console.log(higher(cb,12));
// console.log(higher(cb,8));


// //Question 3
// function cb(){
//     console.log("callback function");
//     return function(){
//         console.log("inner function 1");
//         return function(){
//             console.log("inner function 2");
//             return "Final Return";
//         };
//     };
// }
// function higher(callback){
//     console.log("higher order function");
//     let innerFunc1 = callback();
//     console.log("this is below call 1");
//     let innerFunc2 = innerFunc1();
//     console.log("this is below call 2");
//     return innerFunc2();
// }
// console.log(higher(cb));

//Take an input   from user and console whether the number is 0, less than 0, greater than 0 or a word
// let num = prompt("Enter your age:");
// console.log(num);

// if (num === 0) {
//     console.log("The number is 0.");
// } else if (num < 0) {
//     console.log("The number is less than 0.");
// } else {
//     console.log("The number is greater than 0.");
//}

// let num = prompt("Enter your age:");
// if (isNaN(num)) {
//     console.log("You entered a word.");
// } else {
//     num = Number(num);

//     if (num === 0) {
//         console.log("The number is 0.");
//     } else if (num < 0) {
//         console.log("The number is less than 0.");
//     } else {
//         console.log("The number is greater than 0.");
//     }
// }

// let num2 = prompt("Enter a number");
// console.log(num2);
// num2 === 0 ? console.log("The number is zero") : num2 < 0 ? console.log("The number is less than 0") : console.log("The number is greater than 0");


// let num2 = prompt("Enter a number");
// console.log(num2);

// isNaN(num2) ? console.log("You entered a word.") : (Number(num2) === 0 ? console.log("The number is zero.") : (Number(num2) < 0 ? console.log("The number is less than 0.") :  console.log("The number is greater than 0."))
//     );
