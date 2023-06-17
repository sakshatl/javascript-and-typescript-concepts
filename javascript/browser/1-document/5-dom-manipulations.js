const buttonListContainer = document.querySelector('.button-list-container');

// create 10 buttos and add event listeners to them

// for(let i = 1; i <= 10; i++) {
//   let html = `<button>Button - ${i}</button>`;
//   buttonListContainer.innerHTML += html;
// }

for (let i = 1; i <= 10; i++) {
  let newButton = document.createElement('button');
  newButton.classList.add('rounded-button,');
  newButton.textContent = `Button - ${i}`;
  newButton.addEventListener('click', (e) => {
    console.log(e.target.textContent);
  })
  buttonListContainer.appendChild(newButton); 
}


