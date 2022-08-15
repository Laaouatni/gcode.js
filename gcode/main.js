import GcodeAPI from "./src/API/GcodeApi/GcodeAPI_main/GcodeAPI";
import G0 from "./src/API/GcodeApi/Gcommands/G/G0";

import Gcanvas from "./src/API/GcodeApi/Gsimulator/Gcanvas";

// new G0({ x: 50 })
// new G0({ x: 50 })

let a = new G0({ x: 10, y: 10 });

console.log(a.moveTo({ left: 100 }));
console.log(a.moveTo({ bottom: 200 }));

let g = new Gcanvas({
  width: 0,
  height: 400,
  parentHtmlContainer: document.querySelector("section"),
});

g.generate();