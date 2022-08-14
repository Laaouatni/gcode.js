import G0 from "./src/API/GcodeApi/Gcommands/G/G0.js";
import GcodeAPI from './src/API/GcodeApi/GcodeAPI';

let g = new G0({});
console.log(g.moveTo({left: 10}));
console.log(g.moveTo({left: 10}));
console.log(g.moveTo({left: 10, zIndex: -100}));
console.log(g.moveTo({right: 10, top: 10, zIndex: 10}));
console.log("hello world")

// create a canvas
// that create a line with given coordinates

let canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 500);
ctx.stroke();