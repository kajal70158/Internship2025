
let arr = [
    {
    name:"Kajal",
    age : 20,

},
 {
    name:"neha",
    age : 19,

},
 {
    name:"priyanka",
    age : 18,

},
 {
    name:"dipanshi",
    age : 17,

},
 {
    name:"anuska",
    age : 16,

},
]

// add a new key "id" & its value to every objects


let person = {
    name :"ghghesrk",
    age:"24",
    skills:["js","hmtl","css"]
}
let newperson = {
    ...person,
    profession : "software engineer",
    home : "panipat"
}
console.log(newperson);

//Spread operator in array : used to copy elements from one array to another array
// let numArr = [1,2,3,4,5,6];
// let newNumArr = [...numArr,7,8,9,10];
// console.log(newNumArr);

//spread operator in objects
arr = arr.map((obj,index)=>{
    return {
        ...obj,
        // name:"changed name", //Pverwrite old key's vlaue
        id: index+1,
        salary: (index+1)*100000 //new key & its value
    }
})
console.log(arr);

//filter function gives only the condition matchedd element 
let newArr = arr.filter((person)=>{
    return (person.age >= 18);
})
console.log(newArr);


//for salary sum
let salarySum  =arr.reduce((accum,person)=>{
    return accum+person.salary;
},0)
console.log(salarySum);


let ar=[1,2,3,4,5,6,7];
let sum = ar.reduce((accum,num)=>{
    return num+accum;
},0)
let multiply = ar.reduce((accum,num)=>{
    return num*accum;
},1)
console.log(multiply);
console.log(sum);

// find :- same as filter returns the first element that matches the condition
let result = arr.find((person)=>{
    return( person.age==18)
})
console.log(result)
 result = arr.find((person)=>{
    return( person.age<18)
})
console.log(result);

//foreach :- used for iteration 
ar.forEach(element=>{
    console.log(element);
})

