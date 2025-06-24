const h1 = document.querySelector("h1");

h1.addEventListener("click",(e)=>{ //e:- event reference stores details related to event. like event origin element , event position,etc.
    console.log(e.target); //return element at which this event occur
    h1.classList.toggle("background");
    console.log("h1 clicked");
})

//event bubling

const input = document.getElementById("textInp");
h1.children[0].addEventListener("click",(e)=>{
    e.stopPropagation();
   console.log("span clicked");
   input.value = "";
})


input.addEventListener("change",(e)=>{
console.log(input.value);
console.log(e.target.value);
})