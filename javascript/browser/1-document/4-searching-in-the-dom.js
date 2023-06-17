// ==== SEARCHING IN THE DOM ====
// const app = document.getElementById('app');

// console.log(app.firstElementChild.innerHTML);
// console.log(app.lastElementChild.innerHTML);


let listItems = document.querySelectorAll('ul.team-seven-list > li');

// console.log(listItems); // NodeList
// console.log(Array.from(listItems)); // An array 

listItems = Array.from(listItems);

listItems.forEach((item) => {
  if(item.classList.contains('leader')) {
    console.log(item.textContent, "(Leader)");
  } else {
    console.log(item.textContent);
  }
});
