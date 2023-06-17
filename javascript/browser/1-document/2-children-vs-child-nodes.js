// ===== CHILDREN AND CHILD NODES ====

const div = document.createElement('div');
div.innerText = "Hello World";

console.log(div.children); // HTMLCollection []
console.log(div.childNodes); // NodeList [text]

console.log(div.children.length); // 0
console.log(div.childNodes.length); // 1