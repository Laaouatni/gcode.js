import G0 from "../../../../API/Gcommands/G/G0.js";

export default function G0test() {
  console.warn("🧪 TEST STARTED: G0 🏃‍♂️")

  // -1
  console.log(new G0({}));
  // 0
  console.log(
    new G0({
      x: 1,
      y: 2,
    }).getCode(),
  );

  // 1
  console.log(
    new G0({
      x: 3,
      y: 4,
    }).getCode(),
  );

  // 2
  console.log(
    new G0({
      x: 5,
    }).getCode(),
  );

  // 3
  console.log(
    new G0({
      z: 6,
    }).getCode(),
  );

  // 4
  console.log(
    new G0({
      x: 7,
      y: 8,
      z: 9,
    }).getCode(),
  );

  ////////

  // 5
  console.log(new G0({ y: 20 }).moveTo({ left: 12, bottom: 15, right: 17, top: 23 }))
  
  console.warn("🧪 TEST FINISHED: G0 🚩")
}
