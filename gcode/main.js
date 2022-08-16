// import GcodeAPI from "./src/API/GcodeApi/GcodeAPI_main/GcodeAPI";
import G0 from "./src/API/GcodeApi/Gcommands/G/G0";

import Gcss from "./src/API/GcodeApi/Gsimulator/Gcss/Gcss.js";

let a = new G0({ x: 10, y: 10 });

console.log(a.moveTo({ left: 120 }));
console.log(a.moveTo({ bottom: 150 }));
console.log(a.moveTo({ bottom: 190, left: 300}));
console.log(a.moveTo({ right: 70, zIndex: 80 }));
console.log(a.moveTo({ zIndex: -100}));
console.log(a.moveTo({ left: 300}));


let g = new Gcss({
  width: 500,
  height: 400,
  parentHtmlContainer: document.querySelector("section"),
});

g.generate()

console.log(g)



