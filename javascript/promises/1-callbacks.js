// function loadScript(src, callbackFunc) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => {
//     callbackFunc(null, script);
//   }

//   document.head.appendChild(script);
// }

// loadScript('./_script.js', (error, data) => {
//   greet(); // works :)
//   loadScript('./_script-2.js', (error, data) => {
//     greet2();
//   })
// });

// greet(); // does not work :(


// =========== LOAD SCRIPT OPTIMISED =======

function loadScriptOptimized(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => {
    callback(null, script);
  }

  script.onerror = () => {
    callback(new Error('Failed in loading the script'), null);
  }

  document.head.appendChild(script);
}

loadScriptOptimized('https://unpkg.com/react@18/umd/react.development.js', (error, data) => {
  if(error) {
    console.log(error);
  } else {
    console.log(data);
  }
})
