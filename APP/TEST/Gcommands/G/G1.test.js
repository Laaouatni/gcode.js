import G1 from "../../../../API/Gcommands/G/G1.js";

export default function G1test() {
  // 0
  console.log(
    new G1({
      x: 1,
      y: 2,
    }).getCode(),
  );

  // 1
  console.log(
    new G1({
      x: 3,
      y: 4,
    }).getCode(),
  );

  // 2
  console.log(
    new G1({
      x: 5,
    }).getCode(),
  );

  // 3
  console.log(
    new G1({
      z: 6,
    }).getCode(),
  );

  // 4
  console.log(
    new G1({
      x: 7,
      y: 8,
      z: 9,
    }).getCode(),
  );
}
