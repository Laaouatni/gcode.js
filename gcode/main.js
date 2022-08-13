import G0 from "./src/API/GcodeApi/Gcommands/G/G0.js";

let g = new G0({});
console.log(g.moveTo({left: 10}));
console.log(g.moveTo({left: 10}));
console.log(g.moveTo({left: 10}));
console.log(g.moveTo({right: 10, top: 10}));
console.log("hello world")