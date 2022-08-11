import G0 from "./API/G0.js"
import G1 from "./API/G1.js"

import GcodeAPI from "./API/GcodeAPI.js"

console.log(new G0({ x: 20 }));

let one = new GcodeAPI();

one.setLastPosition();

console.log(one);
