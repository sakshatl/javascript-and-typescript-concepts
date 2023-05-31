function add(...args : number[]) : number {
  let result = 0;
  
  for(let i = 0; i < args.length; i++) {
    result = result + args[i];
  }

  return result;
}

console.log(add(5, 10, 4))