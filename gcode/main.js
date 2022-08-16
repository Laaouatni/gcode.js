// import GcodeAPI from "./src/API/GcodeApi/GcodeAPI_main/GcodeAPI";
import G0 from "./src/API/GcodeApi/Gcommands/G/G0";

import Gcss from "./src/API/GcodeApi/Gsimulator/Gcss/Gcss.js";

new G0({ x: 10, y: 10 });
new G0({ x: 100, y: 30 });
new G0({ x: 150, y: 80 });
new G0({ x: 200, y:80});


let g = new Gcss({
  width: 500,
  height: 400,
  parentHtmlContainer: document.querySelector("section"),
});

g.generate()

console.log(g)



