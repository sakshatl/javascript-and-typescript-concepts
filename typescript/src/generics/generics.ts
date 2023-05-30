// 1. Generics with functions

function stringPrinterFunc(arg: string): string {
  return arg;
}

// ======== uncomment lines below to run =============

// console.log(stringPrinterFunc("hello")) // works 😄
// console.log(stringPrinterFunc(4)); // error 😢

// <T> stands for Type
function genericPrinterFunc<Type>(arg: Type): Type {
  return arg;
}

// ======== uncomment lines below to run =============

// console.log(genericPrinterFunc("hello")) // works 😄
// console.log(genericPrinterFunc(4)); // works 😄

// 2. Generics with classes

class StringPrinter {
  private stringToPrint: string;

  constructor(stringToPrint: string) {
    this.stringToPrint = stringToPrint;
  }

  print() {
    console.log(this.stringToPrint);
  }
}

class GenericPrinter<T> {
  private somethingToPrint: T;

  constructor(somethingToPrint: T) {
    this.somethingToPrint = somethingToPrint;
  }

  print() {
    console.log(this.somethingToPrint);
  }
}

// ======== uncomment lines below to run =============

// let sp1 = new StringPrinter("hello"); // works 😄
// let sp2 = new StringPrinter(5); // error 😢

// ======== uncomment lines below to run =============

// let gp1 = new GenericPrinter(5); // works 😄
// let gp2 = new GenericPrinter("hello") // works 😄
