// ==== Primitive Types =====
let isLoggedIn: boolean = false;
let count: number = 22;
let message: string = "Hello World";

// message = true; // Error: typescript helps with static type checking
// console.log(message);

// ===== Array Types =====
let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [1, 2, 3];

// ====== Enum Types =====
enum Color { red = "#ef4444", green = "#22c55e", blue = "#3b82f6" };
let errorColor: Color = Color.red;
let successColor: Color = Color.blue;

// ==== Any Type in TS ===== 
let randomValue: any = "hello";
randomValue = 10; // No Error
// console.log(randomValue.toUpperCase()) // shows no error

// ====== Unknown Type in TS ==== 
let randomValue2: unknown = "hello world";
randomValue2 = 11;
// console.log(randomValue2.toUpperCase()); // shows error

// ==== Typecasting in TS ===== 
console.log((randomValue2 as string).toUpperCase()); // typecasting 