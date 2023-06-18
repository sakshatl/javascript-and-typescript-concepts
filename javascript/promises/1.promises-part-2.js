function fakeAPICall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved"), 2000);
  })
}

function main() {
  async function getData() {
    let i = 0;
    let start = Date.now(); // start the timer
    while(i < 5) {
      const data = await fakeAPICall();
      console.log(data);
      let end = Date.now() - start;
      console.log(`Took ${end / 1000} seconds`); // end the timer
      i = i + 1;
    }
  }

  async function getDataOptimized() {
    let promises = [];
    let i = 0;
    let start = Date.now();
    while(i < 5) {
      promises.push(fakeAPICall());  
      i = i + 1;
    }
    const data = await Promise.all(promises);
    console.log(data);
    let end = Date.now() - start;
    console.log(`Took ${end / 1000} seconds with Optimized code`);
  }

  getData();
  getDataOptimized();

}


main();