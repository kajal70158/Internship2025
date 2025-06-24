localStorage.setItem("name","kajal");
console.log(localStorage.getItem("name"));

const obj = {
    name:"kajal",
    arr:[1,2,3,"4"]
}
console.log(JSON.stringify(obj));
localStorage.setItem("obj",JSON.stringify(obj));

console.log("storage - ",localStorage.getItem("obj"))
let storedObj = JSON.parse(localStorage.getItem("obj"));
console.log(storedObj);


