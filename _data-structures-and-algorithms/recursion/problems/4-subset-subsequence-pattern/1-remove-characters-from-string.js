function removeCharacters(str, char) {
  const helper = (str = "", char, result = "") => {
    if (!str.length) {
      return result;
    }

    if (str[0] !== char) {
      result += str[0];
    }

    return helper(str.slice(1, str.length), char, result);
  };

  return helper(str, char, "");
}

function removeCharacters2(str, char) {
  const helper = (unprocessed, processed = "") => {
    if (!unprocessed.length) {
      return processed;
    }

    let firstChar = unprocessed[0];
    if (firstChar === char) {
      // skip it
      return helper(unprocessed.slice(1), processed);
    } else {
      // don't skip it include it in the processed string
      processed += firstChar;
      return helper(unprocessed.slice(1), processed);
    }
  };

  return helper(str, "");
}

function main() {
  console.log(removeCharacters("baccad", "a"));
  console.log(removeCharacters2("baccad", "a"));
}

main();
