const t0 = performance.now();
import GcodeAPI from "./src/API/GcodeApi/GcodeAPI_main/GcodeAPI";

import G0 from "./src/API/GcodeApi/Gcommands/G/G0";
import Gcss from "./src/API/GcodeApi/Gsimulator/Gcss/Gcss.js";

let a = new G0({});

for (let i = 0; i < 3; i++) {
  a.moveTo({left: 50, top: 50})
}

for (let i = 0; i < 3; i++) {
  a.moveTo({ left: 50 })
}

for (let i = 0; i < 3; i++) {
  a.moveTo({
    bottom: 50
  });
}

for (let i = 0; i < 3; i++) {
  a.moveTo({
    right: 50
  });
}

for (let i = 0; i < 3; i++) {
  a.moveTo({
    bottom: 50, 
    right: 50
  });
}

for (let i = 0; i < 3; i++) {
  a.moveTo({
    top: 50, 
    right: 50
  });
}

for (let i = 0; i < 4; i++) {
  a.moveTo({ left: 50 })
}

for (let i = 0; i < 3; i++) {
  a.moveTo({ bottom: 50, left: 50 })
}

let g = new Gcss({
  width: 500,
  height: 500,
  parentHtmlContainer: document.querySelector("section"),
});

g.generate();

const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
// console.table(GcodeAPI.array);

// let btn = document.querySelector("#btn")

// btn.addEventListener("click", btnGenerate, { once: true });

// function btnGenerate() {
//   let g = new Gcss({
//     width: 500,
//     height: 500,
//     parentHtmlContainer: document.querySelector("section"),
//   });

//   g.generate();

//   btn.disabled = true;
// }
