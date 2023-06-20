// Given an array return with all the falsey values removed

let FALSY_VALUES = [false, null, 0, "", undefined, NaN];

function removeFalsy(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if(FALSY_VALUES.indexOf(item) < 0){
      result.push(item);
    }
  }

  return result;
}

console.log(removeFalsy([0, 1, false, 2, '', 3]));