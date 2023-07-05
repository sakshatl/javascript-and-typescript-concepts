function walk(source = 0, destination = 10) {
  if (source === destination) {
    console.log("Reached");
    return;
  }

  console.log(`Source: ${source} | Destination: ${destination}`);

  walk(source + 1, destination);
}

function main() {
  walk(1, 10);
}

main();
