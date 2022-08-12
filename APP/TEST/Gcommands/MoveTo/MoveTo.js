import G0 from './../../../../API/Gcommands/G/G0.js';

export default function MoveToTEST() {
  console.warn("🧪 TEST STARTED: MOVE_TO 🏃‍♂️")

  // 0
  console.log(
    new G0({ y: 20 }).moveTo({
      left: 12,
      bottom: 15,
      right: 17,
      top: 23,
    }),
  );

  console.warn("🧪 TEST FINISHED: MOVE_TO 🚩")
}
