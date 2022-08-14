import GcodeAPI from "./src/API/GcodeApi/GcodeAPI_main/GcodeAPI";
import G0 from "./src/API/GcodeApi/Gcommands/G/G0";

import Gcanvas from "./src/API/GcodeApi/Gsimulator/Gcanvas";

// new G0({ x: 50 })
// new G0({ x: 50 })

let a = new G0({ x: 10, y: 10 });

a.moveTo({ left: 100 });
a.moveTo({ bottom: 100 });

console.log(GcodeAPI.array);

// create a canvas



console.log(
  new Gcanvas({
    width: 0,
    height: 400,
    parentHtmlContainer: document.querySelector("section"),
  }).create(),
);