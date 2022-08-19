// import GcodeAPI from "./src/API/GcodeApi/GcodeAPI_main/GcodeAPI";
import G0 from "./src/API/GcodeApi/Gcommands/G/G0";
import Gcss from "./src/API/GcodeApi/Gsimulator/Gcss/Gcss.js";

let a = new G0({});

for (let i = 0; i < 9; i++) {
  if (i % 2 == 0) {
    a.moveTo({ left: Math.random() * 100, top: Math.random() * 50 });
  } else {
    a.moveTo({ top: Math.random() * 100, left: Math.random() * 50 });
  }
}


let g = new Gcss({
  width: 500,
  height: 500,
  parentHtmlContainer: document.querySelector("section"),
});

g.generate();
