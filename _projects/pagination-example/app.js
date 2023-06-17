
// gobal variables

let LIMIT = 10;
let currentPage = 1;
let allPosts = new Array();

// dom related variables and stuff

let postListContainer = document.getElementById('post-list');
let paginationContainer = document.getElementById('pagination-container');

// API calls definitions

async function fetchAllPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

// Make API calls and call render functions

fetchAllPosts()
  .then((response) => {
    allPosts = response;
    renderPosts();
    renderButtons();
  })
  .catch((error) => {
    console.log(error)
  })


// render functions

function renderPosts() {
  let start = (currentPage - 1) * LIMIT;
  let end = currentPage * LIMIT;
  let tempPosts = allPosts.slice(start, end);

  console.log(tempPosts)

  tempPosts.forEach((post) => {
    let html = `
      <div class="post-card">
        <div class="post-card-title">${post.id} - ${post.title}</div>
        <div class="post-card-body">${post.body}</div>
      </div>
    `
    postListContainer.innerHTML += html;
  })
}

function renderButtons() {
  let paginationButtonContainer = document.createElement("div");

  let buttonCount = Math.ceil(allPosts.length / LIMIT);
  for(let i = 1; i <= buttonCount; i++) {
      let html = `<button class="pagination-button">${i}</button>`
      paginationButtonContainer.innerHTML += html;
  }

  const paginationButtonElements = Array.from(document.getElementsByClassName('pagination-button'));
  paginationButtonElements.forEach((button) => {
    button.addEventListener('click', (e) => {
      let selectedPage = e.target.innerText;
      currentPage = Number(selectedPage);

      renderPosts();
    })
  })
}


