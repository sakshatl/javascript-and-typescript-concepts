console.log(document);

// According to the DOM every element tag is an object
// Nested tags are the "children" on the enclosing one
// Even the text inside a tag is an object as well

const bodyObj = document.body;
console.log(bodyObj);
console.log(bodyObj.textContent);


// -- element tags become the element nodes 
// -- text becomes the text node
// -- etc, everything inside the HTML document has a place in the DOM


