// The constructor syntax for a promise object is:

const promise = new Promise(function(resolve, reject) {
  // called the executor function
  if(1 + 1 === 3) {
    setTimeout(() => resolve('Resolved'));
  } else {
    setTimeout(() => reject(new Error('Rejected')));
  }
});

// When new Promise is created, the executor runs automatically.
// Its arguments resolve and reject are callbacks provided by JavaScript itself. 
// Our code is only inside the executor.

// When the executor obtains the result, be it soon or late, doesn’t matter, 
// it should call one of these callbacks:
// - resolve(value) — if the job is finished successfully, with result value.
// - reject(error) — if an error has occurred, error is the error object.

// ==== CONSUMERS =======

// A Promise object serves as a link between the executor and the consuming functions
// Consuming functions can be registered using the methods .then and .catch

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    
  });

// Finally -- cleanup
// The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.
// E.g. stopping loading indicators, closing no longer needed connections, etc.


