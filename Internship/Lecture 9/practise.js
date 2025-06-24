// const form = document.getElementById("search-form");

// form.addEventListener("submit",async (e)=>{
//     e.preventDefault();//stop page reload
//     let search = e.target.children[0].value;
//     let res = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=4712504d`)
//     localStorage.setItem("movies",JSON.stringify(res,data.Search));
//     console.log(res.data.Search);
//     createCard(res.data.Search)
// })
// const container = document.getElementById("container")
// function createCard(movies){
//     movies.forEach(movie =>{
//         const div = document.createElement("div");
//         div.className = "card";
//         const img =document.createElement("img");
//         img.src = movie.Poster;
//         img.class = "movie banner";
//         div.innerHTML = `<h2>${movie.Title}</h2> <span>${movie.Year}</span>`;
//         div.prepend(img);
//         container.appendChild(div);
//     })
// }
// if(localStorage.getItem("movies")){
//     createCard();
// }
// createCard();
// const form = document.getElementById("search-form");
// const container = document.getElementById("container");

// form.addEventListener("submit", async (e) => {
//     e.preventDefault(); // Stop page reload
//     container.innerHTML = ""; // Clear previous results
//     let search = e.target.children[0].value.trim(); // trim to avoid spaces

//     if (search === "") { // Empty input check
//         container.innerHTML = "<h2>Please enter a movie name!</h2>";
//         return;
//     }

//     try {
//         let res = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=4712504d`);
//         console.log(res.data.Search);

//         if (res.data.Search) { // Check if result exists
//             createCard(res.data.Search);
//         } else {
//             container.innerHTML = "<h2>No Movies Found!</h2>"; // No result found
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         container.innerHTML = "<h2>Something went wrong. Please try again!</h2>"; // Network or server error
//     }
// });

// function createCard(movies) {
//     movies.forEach(movie => {
//         const div = document.createElement("div");
//         div.className = "card";

//         const img = document.createElement("img");
//         // Check if poster is available or not
//         img.src = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=No+Image";
//         img.className = "movie banner";

//         div.innerHTML = `<h2>${movie.Title}</h2> <span>${movie.Year}</span>`;
//         div.prepend(img);
//         container.append(div);
//     });
// }

// localStorage.setItem("name","kajal");
// console.log(localStorage.getItem("name"));

const form = document.getElementById("search-form");

form.addEventListener("submit",async(e)=>{
    e.preventDefault();  //stops page reload
    let search = e.target.children[0].value;
    let res = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=4712504d`);
    console.log(res.data.Search);
    localStorage.setItem("movies", JSON.stringify(res.data.Search));
    createCard()
})

const container = document.getElementById("container");


function createCard(){

    movies = JSON.parse(localStorage.getItem("movies"));
    container.innerHTML = "";  // clears previous movies

    movies.forEach(movie => {
        const div = document.createElement("div");
        div.className = "card";
        const img = document.createElement("img");
        img.src = movie.Poster;
        img.class = "movie-banner";
        div.innerHTML = `<h2>${movie.Title}</h2> <span>${movie.Year}</span>`;
        div.prepend(img);
        container.append(div);
});
}

if(localStorage.getItem("movies")){
   createCard();
}
localStorage.removeItem("name");

