import GcodeAPI from "./src/API/GcodeApi/GcodeAPI_main/GcodeAPI";
import G0 from "./src/API/GcodeApi/Gcommands/G/G0";

import Gcanvas from "./src/API/GcodeApi/Gsimulator/Gcanvas";

let a = new G0({x: 20, y: 20});

// console.log(a.moveTo({ left: 100 }));
// console.log(a.moveTo({ bottom: 200 }));
// console.log(a.moveTo({ bottom: 300, left: 300}));
// console.log(a.moveTo({ bottom: 100, left: 200, zIndex: -100 }));
// console.log(a.moveTo({ bottom: 300, left: 200, zIndex: -20}));

let g = new Gcanvas({
  width: 500,
  height: 400,
  parentHtmlContainer: document.querySelector("section"),
});

let yLines = 10;
let xLines = 10;

for (let i = 0; i < yLines; i++) {
  for (let j = 0; j < xLines; j++) {
    setTimeout(() => {
      a.moveTo({ left: j, bottom: i*2 });
      g.generate();
    }, j * 100);
  }
}




