// ==== PARENT AND SIBLINGS ==== 

console.log(document.body.parentNode); // <html>
console.log(document.body.parentElement); // <html>

console.log(document.body.childNodes); // Node list of all the nodes (includes text and comment nodes)
console.log(document.body.children); // HTML collection of all the elements


let body = document.body;
let head = document.head;

console.log(head.nextElementSibling); // <body>
console.log(body.nextElementSibling); // <null>

console.log(body.previousElementSibling); // <head>
console.log(head.nextElementSibling); // <body>