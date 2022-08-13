// document.querySelector('#app').innerHTML = `
//   hello world
// `

import DirectionValues from "./src/API/GcodeApi/Gcommands/other/DirectionValues/DirectionValues.js";

let obj = {
  left: 12,
  bottom: 15,
  right: 17,
  top: 23,
};
// -1
console.log(new DirectionValues(obj));