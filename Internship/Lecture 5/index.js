//string
let str= "this is a string";
// str[4] = "-"; //if index
let newStr= str.replace("is","in");
console.log(newStr);
// let newStr= str.replaceAll("is","in");//for raplacing all
// console.log(newStr);

console.log(str[5]);
console.log(str.charAt(5));

console.log(str.startsWith("is")); //return false and  it is boolean type
console.log(str.includes("ri"));
console.log(str.endsWith("ing"));//return flase and it is boolean type

str = "this is a string";
let arr = str.split(" ")[0];
console.log("arr");