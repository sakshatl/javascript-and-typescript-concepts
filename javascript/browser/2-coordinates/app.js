const root = document.getElementById('root');

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function renderPosts(posts) {
  const postList = document.createElement('div');
  postList.classList.add('post-list');
  postList.innerHTML = `<h1 class="post-list-title">All Posts</h1>`
  root.appendChild(postList);

  for (let i = 0; i < posts.length; i++) {
    const postCard = document.createElement('div');
    postCard.classList.add("card", "post-card");
    postCard.innerHTML = `
      <h3>${posts[i].title}</h3>
      <p>${posts[i].body}</p>
    `
    postList.appendChild(postCard);
  }

  let lastElem = document.createElement('div');
  lastElem.classList.add('last-elem');
  lastElem.innerText = "Last Elem"
  postList.appendChild(lastElem);
}

async function main() {
  let limit = 10;
  let offset = 0;
  const posts = await fetchData();

  if(posts && posts.length) {
    renderPosts(posts);
  }

}

main();
