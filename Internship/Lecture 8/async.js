// //Async JS
// //Don't wait for result of upper line of code
// //methods and functions
// // 1. setTimeout
// // 2.setInterval
// // 3.promises
// // 4.async functions

// let num =10;
// setTimeout(()=>{
//     console.log("this is inner CB , come after 2s")
// },2000) // runs the callback function after 2000ms (2sec).

// console.log(num);

// const callback =()=>{
//     console.log("this is outer callback function")
// }
// setTimeout(callback,1000); // runs the callback function after 1000ms (1sec).

// const id = setInterval(()=>{
//     console.log("this function is running after every 3s");
// },3000);

// // clearInterval(id);
// setTimeout(() => {
//     clearInterval(id);

// },3000*4);

//We api : solve time related problems
//function : callstack

//Promises -> If we give a set of code that it tell that whether the program is successfully run or failure(fail to run) , it is asynchronous 
//three states : 1.RESOLVE(success)
//2.REJECT(failure) 
//3.PENDING(No resolve , no reject , promises is running)

// let b=10;
// const  myPromise = new Promise((resolve,reject)=>{
//     //resolve reject = callback functions
//     let num = Math.random()*10
//     if(num<5){
//         resolve(num)
//     }
//     else{
//         reject(num)
//     }
// })
// myPromise.then((data)=>{
//     console.log("promise resolve",data);
// }).catch((error)=>{
//     console.log("promise rejected",error);
// });
// console.log(b);

// const MyNewPromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("this is a promise which resolve after 2s");
//         resolve();
//     }, 2000);
// })
// console.log(MyNewPromise)
// MyNewPromise.then(()=>{
//     console.log("promise resolved");
// })

// //Chaining in promises
// const chainPromise = new Promise((resolve,reject)=>{
//     let num = Math.random()*100
//     if(num<50){
//         resolve(num)
//     }
//     else{
//         reject(num)
//     }
// })
// chainPromise.then((data)=>{
//     if(data<25){
//         return `num is less than 2 ${data}`
//     }else{
//         return `num is greater than 25 ${data}`
//     }
// }).then((dta)=>{
//     console.log(dta);
// }).catch(()=>{
//     console.log("object");



// })

//async functions
// let a =10;
// async function fun(){
//       console.log("async function")
// }
// let result;
// const arrowFun  =async ()=>{
//     console.log("async arrow function");
//     // let res = await fetch("https://official-joke-api.appspot.com/random_joke")
//     // result = await res.json();
//     let res = await axios.get("https://official-joke-api.appspot.com/random_joke") //it is a service used to call api's :-axios , it is same as fetch
//     result = res.data;
//     console.log(result);
//     console.log("async arrow function end")
// }

// arrowFun();
// console.log(result);
// console.log(a);

/*Practice question
Question -1*/
// let menu = [
//     "roti", "rice" ,"eggrice" , "paneer" ,"dal" ,"egg-curry" , "chicken" ,"chicken-rice" ,"gajar-ka-halwa" ,"gulab-jamunn","dal makhni",
// ] 
// //filter out veg and non -veg items

// let nonVegItems = menu.filter(item => {
//     if (item.includes("egg") || item.includes("chicken")) {
//         return true; 
//     } else {
//         return false; 
//     }
// });

// let vegItems = menu.filter(item => {
//     if (item.includes("egg") || item.includes("chicken")) {
//         return false; 
//     } else {
//         return true; 
//     }
// });

// console.log("Veg Items:", vegItems);
// console.log("Non-Veg Items:", nonVegItems);

//Q. Filter out all the products which are white and wearable
let products = [
  {
    name: "product 1 name",
    category: "wearable",
    color: ["red", "white"]
  },
  {
    name: "product 2 name",
    category: "playable",
    color: ["black", "silver"]
  },
  {
    name: "product 3 name",
    category: "wearable",
    color: ["blue", "white"]
  },
  {
    name: "product 4 name",
    category: "playable",
    color: ["white", "gray"]
  },
  {
    name: "product 5 name",
    category: "playable",
    color: ["gold", "black"]
  },
  {
    name: "product 6 name",
    category: "wearable",
    color: ["orange", "black"]
  },
  {
    name: "product 7 name",
    category: "wearable",
    color: ["purple", "pink"]
  }
];

let wwp = products.filter(product => 
  product.category === "wearable" && product.color.includes("white")
);

console.log(wwp);

