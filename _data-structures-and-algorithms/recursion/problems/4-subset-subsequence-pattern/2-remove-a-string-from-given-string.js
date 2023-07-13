function skipString(str, targetStr) {
  const helper = (unprocessed, processed) => {
    if (!unprocessed.length) {
      return processed;
    }

    if (unprocessed.startsWith(targetStr)) {
      return helper(unprocessed.slice(targetStr.length), processed);
    } else {
      processed += unprocessed[0];
      return helper(unprocessed.slice(1), processed);
    }
  };

  return helper(str, "");
}

function main() {
  console.log(skipString("you_can_see_hello_will_be_removed", "hello"));
  console.log(skipString("skipthedogfromthisstring", "dog"));
}

main();
