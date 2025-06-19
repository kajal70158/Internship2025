//map , filter ,reduce ,find , forEach , some
// let arr = [1,2,3,4,5,6,7,8,9,10];

// function square(num){
// return num*num;
// }
// let sqArr = arr.map(square);

// sqArr = arr.map(function(num){
//     return num*num;
// })

// sqArr = arr.map((num)=>{
//     return num*num;
// })

// console.log(sqArr);

// let arr2 = [1,2,3,4,5,6,7,8,9,10];
// function cube(num){
//     return num**3;
// }
// let cubeArr = arr2.map(cube);

// cubeArr = arr2.map((num)=>{
//     return num**3;
// })
// console.log(cubeArr);

//Filter --> to get specific element on the basis of condition
let arr2 = [1,2,3,4,5,6,7,8,9,10]
function odd(num){
    return (num%2==1);
}
let oddArr = arr2.filter(odd);
oddArr = arr2.filter(function(num){
    return(num%2==1);
})
oddArr = arr2.filter((num)=>{
    return (num%2==1);
})
console.log(oddArr);