// Objects are stored and copied by "reference"
// Whereas primitives -- Strings, Numbers and Booleans are copied as whole value

// When an object is copied, the reference is copied

const user = { name: "John" };
const admin = user; // copy the reference

admin.name = "Sarah";
console.log(user, admin); // "Sarah", "Sarah"

// ===== CLONING AND MERGING =====

const clonedObj = {};

for (let key in user) {
  clonedObj[key] = user[key];
}

clonedObj.name = "Sarah";

console.log(user, clonedObj);
