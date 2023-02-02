let str = "A quick brown fox jump over the lazy dog";

let parts = str.slice(0, 41);
console.log(parts);
let parts1 = str.substring(0, 41);
console.log(parts1);
let parts2 = str.substr(0, 41);
console.log(parts2);
console.log(str.length);

console.log(str.startsWith("a"))// optional