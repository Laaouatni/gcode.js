import css from "./style.css"
// import GcodeAPI from "./src/API/GcodeApi/GcodeAPI_main/GcodeAPI.js";

const t0 = performance.now();

import G0 from "./src/API/GcodeApi/Gcommands/G/G0.js";
import Gcss from "./src/API/GcodeApi/Gsimulator/Gcss/Gcss.js";

let a = new G0({x: 250, y: 250});

for (let i = 0; i < 20; i++) {
  let x = ["left", "right"][Math.round(Math.random())];
  let y = ["top", "bottom"][Math.round(Math.random())];

  a.moveTo({
    [x]: Math.random() * 50,
    [y]: Math.random() * 50
  })
}

let g = new Gcss({
  width: 500,
  height: 500,
  parentHtmlContainer: document.querySelector("section"),
});

g.generate();

const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
