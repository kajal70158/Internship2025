// const allParagraphs = document.getElementsByTagName("p");
// console.log(allParagraphs);
// console.log(allParagraphs[1]);

// const classElements = document.getElementsByClassName("para");
// console.log(classElements);

// const singleElement = document.getElementById("head2");
// console.log(singleElement);

// const elementByQuery = document.querySelector("p")
// const eleByQuery = document.querySelector(".para2")
// const elementsByQue = document.querySelector("#head2")
// console.log(elementsByQue,eleByQuery,elementByQuery)

// const elementsByQuery = document.querySelectorAll(".para2")
// console.log(elementByQuery);

const container = document.getElementById("container");
// console.log(container.innerHTML);
// console.log(container.innerText);
// console.log(container.textContent);

// // container.innerText = "this is changed by <h1>JS</h1>." //change the value in the file

// // container.innerHTML = "this is changed by <h1>JS</h1>."
// console.log(container.id , container.className);
// container.className = "background"
// container.setAttribute("id","containerByJS")
// console.log(container.id);

// elementByQuery.classList.add("cl4")
// elementByQuery.classList.remove("cl3")
// elementByQuery.classList.toggle("cl5")
// console.log(elementByQuery.classList);

// console.log(container.children)
// console.log(container.children[1])//para
// console.log(container.children[1].parentElement);
// console.log(container.children[1].nextElementSibling);
// console.log(container.children[1].previousElementSibling);

// container.children[1].nextElementSibling.innerText = "this is changed by JS";

const val = "hello paragraph";
const div = document.createElement("div"); //create a div element
div.className = "cl1 cl2";
div.id= "dynamic -conatiner"
div.innerHTML = `<p>${val}</p> <p>${val} 2</p>`

container.append(div);//add at last 
container.prepend(div); // add in top

container.after(div);
container.before(div);
console.log(div);