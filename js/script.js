import GcodeAPI from "./API/gcodeAPI.js"

console.log(new G0({ x: 20, y: 10 }).generate());
console.log(new G1({ x: 30, y: 10 }).generate());
// console.log(new G0({ x: 20 }));
