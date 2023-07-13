function subsets(str) {
  let result = [];

  const helper = (unprocessed, processed) => {
    if (unprocessed === "") {
      result.push(processed);
      return;
    }

    let char = unprocessed[0];
    helper(unprocessed.slice(1), processed + char);
    helper(unprocessed.slice(1), processed);
  };

  helper(str, "");
  return result;
}

function main() {
  console.log(subsets("abc"));
}

main();
