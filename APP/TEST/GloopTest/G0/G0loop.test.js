import G0 from "../../../../API/Gcommands/G/G0.js";

export default function G0LoopTEST() {
  console.warn("🧪 TEST STARTED: G0_LOOP 🏃‍♂️");

  let Ntimes = 10;

  leftLoop();
  rightLoop();
  topLoop();
  bottomLoop();
  zIndexLoop();

  function leftLoop() {
    // left
    console.warn("➡️ LEFT FOR LOOP");

    for (let i = 0; i < Ntimes; i++) {
      console.log(
        new G0({}).moveTo({
          left: 10,
        }),
      );
    }
  }

  function rightLoop() {
    console.warn("⬅️ RIGHT FOR LOOP");

    // right
    for (let i = 0; i < Ntimes; i++) {
      console.log(
        new G0({}).moveTo({
          right: 10,
        }),
      );
    }
  }

  function bottomLoop() {
    console.warn("⬆️ BOTTOM FOR LOOP");

    // bottom
    for (let i = 0; i < Ntimes; i++) {
      console.log(
        new G0({}).moveTo({
          bottom: 10,
        }),
      );
    }
  }

  function topLoop() {
    console.warn("⬇️ TOP FOR LOOP");

    // top
    for (let i = 0; i < Ntimes; i++) {
      console.log(
        new G0({}).moveTo({
          top: 10,
        }),
      );
    }
  }

  function zIndexLoop() {
    console.warn("🔼 ZINDEX FOR LOOP");

    // zIndex
    for (let i = 0; i < Ntimes; i++) {
      console.log(
        new G0({}).moveTo({
          zIndex: 10,
        }),
      );
    }
  }

  console.warn("🧪 TEST FINISHED: G0_LOOP 🚩");
}
