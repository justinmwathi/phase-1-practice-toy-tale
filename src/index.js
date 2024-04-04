let addToy = false;
//FETCH REQUEST
document.addEventListener('DOMContentLoaded',()=>{
  const url="http://localhost:3000/toys"
  fetch(url)
  .then(response=>response.json())
  .then(data=>handleData(data));

//POST Request
fetch(url,{
  //Adding method type
  method:"POST",

  headers:
  {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  
  body: JSON.stringify({
    "name": "Jessie",
    "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
    "likes": 0
  })
  
})


fetch(`localhost:3000/toys/${toyId}`,{
  method:"PATCH",

  headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
},

body: JSON.stringify({
  "likes": newLikes
}),

});

//Handle data function
function handleData(data){
  const toycollection=document.getElementById("toy-collection");
//create a div.card for each toy that appears on the DOM after content is loaded.  
  data.forEach((toy)=>{
    const cards=document.createElement("div");
    cards.classList.add("card");
//Creating a h2 element which contains each toy's name.    
    const h2=document.createElement('h2');
    h2.textContent=toy.name
//Creating an img tag which has the image of each toy.    
const image=document.createElement("img");
image.src=toy.image;
image.classList.add("toy-avatar");
//Creating a <p> element which has number of likes
const likes=document.createElement('p');
likes.textContent=`${toy.likes} likes`
const likebutton=document.createElement('button');
likebutton.id=toy.id;
likebutton.classList.add("like-btn");
likebutton.textContent="Like"
cards.appendChild(likebutton);
cards.appendChild(likes);
cards.appendChild(image);
cards.appendChild(h2);
    toycollection.appendChild(cards);
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach((button) => {
  
      button.addEventListener("click", () => {
  
        const toyId = button.getAttribute("id");
  console.log(toyId);
        const currentLikes = button.nextElementSibling.innerText;
  
        const newLikes = parseInt(currentLikes) + 1;

  })
})
  })
}
});


document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
    })

   

