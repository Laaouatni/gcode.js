import G0 from "../../../API/GcodeApi/Gcommands/G/G0.js";

let Ntimes = 3;

leftLoop();
rightLoop();
topLoop();
bottomLoop();
zIndexLoop();

function leftLoop() {
  for (let i = 0; i < Ntimes; i++) {
    let x = new G0({});

    x.moveTo({
      left: 10,
    });

    test(`G0 X left loop ${i}`, () => {
      expect(x.x).toBe(i * 10);
    });
  }
}

function rightLoop() {
  for (let i = 0; i < Ntimes; i++) {
    let x = new G0({});

    x.moveTo({
      right: 10,
    });

    test(`G0 X right loop ${i}`, () => {
      expect(x.x).toBe(Ntimes * 10 - i * 10);
    });
  }
}

function topLoop() {
  for (let i = 0; i < Ntimes; i++) {
    let y = new G0({});

    y.moveTo({
      top: 10,
    });

    test(`G0 Y top loop ${i}`, () => {
      expect(y.y).toBe(i * 10);
    });
  }
}

function bottomLoop() {
  // top
  for (let i = 0; i < Ntimes; i++) {
    let y = new G0({});

    y.moveTo({
      bottom: 10,
    });

    test(`G0 Y bottom loop ${i}`, () => {
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

    test(`G0 Z zIndex loop ${i}`, () => {
      expect(z.z).toBe(i * 10);
    });
  }
}
