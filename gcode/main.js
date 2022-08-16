// import GcodeAPI from "./src/API/GcodeApi/GcodeAPI_main/GcodeAPI";
import G0 from "./src/API/GcodeApi/Gcommands/G/G0";

import Gcss from "./src/API/GcodeApi/Gsimulator/Gcss/Gcss.js";

let a = new G0({ x: 10, y: 10 });

a.moveTo({ left: 50, bottom: 20 });
a.moveTo({ left: 100, bottom: 90 });
a.moveTo({ bottom: 130 });



let g = new Gcss({
  width: 500,
  height: 400,
  parentHtmlContainer: document.querySelector("section"),
});

g.generate()

console.log(g)



