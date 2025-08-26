/*


Read more/less

*/

const readMore = (btnId, contentId) => {
    const button = document.getElementById(btnId);
    const content = document.getElementById(contentId);

    if (content.style.display === "block") {
        content.style.display = "none";
        button.textContent = "Read More...";
    } else {
        content.style.display = "block";
        button.textContent = "Read Less...";
    }
};


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-leighanne").addEventListener("click", () => readMore("btn-leighanne", "more-leighanne"));
    document.getElementById("btn-jade").addEventListener("click", () => readMore("btn-jade", "more-jade"));
    document.getElementById("btn-perrie").addEventListener("click", () => readMore("btn-perrie", "more-perrie"));
});





/*


Add/Remove list items


*/

const items = ["Spider-Man: Into the Spider-Verse (2018)", "Stardust (2007)", "Nope (2022)"] 

const toWatchList = document.querySelector("#listul")  
const btn = document.querySelector("button") 
const completed = document.querySelector("#done") 

const appendNewItem = (item) => {
  let newListItem = document.createElement("li")  
  newListItem.innerHTML = item  
  toWatchList.append(newListItem)  
} 

items.forEach((currentitem) => {
  appendNewItem(currentitem) 
}) 

btn.addEventListener('click', ()=> {
	let newItem = prompt("Add a new film to your watch list:","Which film do you want to watch")
	if (newItem) {
	   appendNewItem(newItem)
	}
})

toWatchList.addEventListener("click", (evt) => {
  if (evt.target.matches("li")) {
    const thisItem = evt.target
    toWatchList.removeChild(thisItem)
    completed.innerHTML += `${thisItem.innerHTML}<br>`
    completed.classList.add("itemdone")
  }
})
