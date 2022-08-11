import G1 from "../API/Gcommands/G/G1.js";
import G0 from "../API/Gcommands/G/G0.js";

console.log(
  new G1({
    x: 1,
    y: 2,
  }).getCode(),
);

console.log(
  new G1({
    x: 3,
    y: 4,
  }).getCode(),
);

console.log(
  new G1({
    x: 5,
  }).getCode(),
);

console.log(
  new G0({
    z: 6,
  }).getCode(),
);

console.log(
  new G0({
    x: 7,
    y: 8,
    z: 9,
  }).getCode(),
);
