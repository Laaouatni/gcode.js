// import GcodeAPI from "./src/API/GcodeApi/GcodeAPI_main/GcodeAPI";
import G0 from "./src/API/GcodeApi/Gcommands/G/G0";

import Gcss from "./src/API/GcodeApi/Gsimulator/Gcss/Gcss.js";

new G0({ x: 10, y: 10 });
new G0({ x: 100, y: 30 });


let g = new Gcss({
  width: 500,
  height: 400,
  parentHtmlContainer: document.querySelector("section"),
});

g.generate()

console.log(g)



