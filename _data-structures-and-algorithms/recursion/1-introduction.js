// motive is to print 3 "Hello World" messages

function printMessage() {
  console.log("Hello World");
  printMessage2();
}

function printMessage2() {
  console.log("Hello World");
  printMessage3();
}

function printMessage3() {
  console.log("Hello World");
}

function main() {
  // printMessage(); // function to print message 3 times
  printMessageRecursive(1); //
}

main();

// Recusion is a function calling another function
// All the function have a one thing in commong -- the body and the definition of the function is same

// ====== CALL STACK ======

/*
  printMessage3();
  printMessage2();
  printMessage();
  main();
*/

// - while the function is not finihsed executing it will remain in stack
// - main() function will be first function called and last one to be removed from the stack
// - the main function prints the "Hello World" and call function printMessage2()
// - the printMessage2 function prints "Hello World" can calls the function printMessage3()
// - printMessage3 prints "Hello World" and does not call anything
// - since printMessage3 has finished executing it gets popped of from the stack
// - similarly printMessage2 and printMessage get popped off as they have finished executing as well
// the main is the last one to be popped of from the stack

// * When a function is not finished excuting it will remain in the stack
// ** When a function is finihsed executing (or encounters a return statement) it is removed from the stack
//    and the flow of control is returned to the point where it was called from

function printMessageRecursive(n) {
  if (n === 3) {
    console.log(`Hello World - ${n}`);
    return;
  }

  console.log(`Hello World - ${n}`);
  printMessageRecursive(n + 1);
}
