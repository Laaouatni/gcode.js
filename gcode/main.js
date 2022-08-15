// import GcodeAPI from "./src/API/GcodeApi/GcodeAPI_main/GcodeAPI";
import G0 from "./src/API/GcodeApi/Gcommands/G/G0";

import Gcss from "./src/API/GcodeApi/Gsimulator/Gcss/Gcss.js";

let a = new G0({ x: 10, y: 10 });

console.log(a.moveTo({ left: 100 }));
console.log(a.moveTo({ bottom: 100 }));
console.log(a.moveTo({ bottom: 100, left: 100}));
console.log(a.moveTo({ right: 100, zIndex: 100 }));
console.log(a.moveTo({ zIndex: -100}));
console.log(a.moveTo({ left: 500}));


let g = new Gcss({
  width: 500,
  height: 400,
  parentHtmlContainer: document.querySelector("section"),
});

g.generate()



