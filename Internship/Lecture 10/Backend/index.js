const express = require("express");
const app = express();
const PORT = 3000;

console.log("object");

app.get("/",(req,res)=>{
    res.send("Hiiiiiiiiiiiii")     
})

app.get("/user",(req,res)=>{
    //    res.send("this a request on '/user' ");
    let user = {
        name:"kajal",
        arr:[1,2,3,"4",true]
    }
    res.json(user);
})
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`);
});
