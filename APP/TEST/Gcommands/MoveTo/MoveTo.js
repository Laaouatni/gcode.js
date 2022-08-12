import G0 from "./../../../../API/Gcommands/G/G0.js";
import G1 from "./../../../../API/Gcommands/G/G1.js";

export default function MoveToTEST() {
  console.warn("🧪 TEST STARTED: MOVE_TO 🏃‍♂️");

  // check import
  console.log(new G0({}));
  console.log(new G1({}));

  let obj = { left: 12, bottom: 15, right: 17, top: 23 };
  // 0
  console.log(new G0({ y: 20 }).moveTo(obj));

  // 0
  console.log(new G0({ y: 20 }).moveTo(obj));

  // 0
  console.log(new G1({ y: 20 }).moveTo(obj));
  
  console.log(new G1({ x: 10, y: 10 }).moveTo(obj));

  console.warn("🧪 TEST FINISHED: MOVE_TO 🚩");
}
