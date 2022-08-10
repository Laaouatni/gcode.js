import G0 from "./API/G0.js"
import G1 from "./API/G1.js"

console.log(new G0({ x: 20, y: 10 }).generate());
console.log(new G1({ x: 30, y: 10 }).generate());
// console.log(new G0({ x: 20 }));
