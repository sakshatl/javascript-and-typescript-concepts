class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  keys() {}
}

let myInventory = new HashTable();

// setting up an inventory for employees (200) of a company
myInventory.set("bottles", 100);
myInventory.set("laptops", 200);
myInventory.set("desktops", 50);
myInventory.set("pens", 500);
myInventory.set("paper", 20000);
myInventory.set("tees", 250);

// console.log(myInventory);

console.log(myInventory.get("pens")); // 500
console.log(myInventory.get("pencils")); // undefined
