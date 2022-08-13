import G0 from "../../../API/GcodeApi/Gcommands/G/G0.js";

let Ntimes = 10;

leftLoop();
rightLoop();
bottomLoop();
topLoop();
zIndexLoop();

function leftLoop() {
  for (let i = 0; i < Ntimes; i++) {
    let x = new G0({});

    x.moveTo({
      left: 10,
    });

    test("X left loop", () => {
      expect(x).toBe(i * 10);
    });
  }
}

function rightLoop() {
  for (let i = 0; i < Ntimes; i++) {
    let x = new G0({});

    x.moveTo({
      right: 10,
    });

    test("X right loop", () => {
      expect(x.x).toBe(Ntimes * 10 - i * 10);
    });
  }
}

function bottomLoop() {
  for (let i = 0; i < Ntimes; i++) {
    let y = new G0({});

    y.moveTo({
      bottom: 10,
    });

    test("Y bottom loop", () => {
      expect(y.y).toBe(i * 10);
    });
  }
}

function topLoop() {
  // top
  for (let i = 0; i < Ntimes; i++) {
    let y = new G0({});

    y.moveTo({
      top: 10,
    });

    test("Y top loop", () => {
      expect(y.y).toBe(Ntimes * 10 - i * 10);
    });
  }
}

function zIndexLoop() {
  for (let i = 0; i < Ntimes; i++) {
    let z = new G0({});

    z.moveTo({
      zIndex: 10,
    });

    test("Z zIndex loop", () => {
      expect(z.z).toBe(i * 10);
    });
  }
}
