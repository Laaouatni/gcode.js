import G1 from "../../../../API/Gcommands/G/G1.js";

export default function G1LoopTEST() {
  console.warn("🧪 TEST STARTED: G1 🏃‍♂️");

  leftLoop();
  rightLoop();
  topLoop();
  bottomLoop();

  function leftLoop() {
    // left
    console.warn("➡️ LEFT FOR LOOP");

    for (let i = 0; i < 10; i++) {
      console.log(
        new G1({}).moveTo({
          left: 10,
        }),
      );
    }
  }

  function rightLoop() {
    console.warn("⬅️ RIGHT FOR LOOP");

    // right
    for (let i = 0; i < 10; i++) {
      console.log(
        new G1({}).moveTo({
          right: 10,
        }),
      );
    }
  }

  function bottomLoop() {
    console.warn("⬆️ BOTTOM FOR LOOP");

    // bottom
    for (let i = 0; i < 10; i++) {
      console.log(
        new G1({}).moveTo({
          bottom: 10,
        }),
      );
    }
  }

  function topLoop() {
    console.warn("⬇️ TOP FOR LOOP");

    // top
    for (let i = 0; i < 10; i++) {
      console.log(
        new G1({}).moveTo({
          top: 10,
        }),
      );
    }
  }

  console.warn("🧪 TEST FINISHED: G1 🚩");
}
