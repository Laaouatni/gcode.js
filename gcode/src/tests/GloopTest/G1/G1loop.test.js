import G1 from "../../../API/GcodeApi/Gcommands/G/G1.js";

let Ntimes = 10;

leftLoop();
rightLoop();
bottomLoop();
topLoop();
zIndexLoop();

function leftLoop() {
  for (let i = 0; i < Ntimes; i++) {
    let x = new G1({});

    x.moveTo({
      left: 10,
    });

    test(`G1 X left loop ${i}`, () => {
      expect(x.x).toBe(i * 10);
    });
  }
}

function rightLoop() {
  for (let i = 0; i < Ntimes; i++) {
    let x = new G1({});

    x.moveTo({
      right: 10,
    });

    test(`G1 X right loop ${i}`, () => {
      expect(x.x).toBe(Ntimes * 10 - i * 10);
    });
  }
}

function bottomLoop() {
  for (let i = 0; i < Ntimes; i++) {
    let y = new G1({});

    y.moveTo({
      bottom: 10,
    });

    test(`G1 Y bottom loop ${i}`, () => {
      expect(y.y).toBe(i * 10);
    });
  }
}

function topLoop() {
  // top
  for (let i = 0; i < Ntimes; i++) {
    let y = new G1({});

    y.moveTo({
      top: 10,
    });

    test(`G1 Y top loop ${i}`, () => {
      expect(y.y).toBe(Ntimes * 10 - i * 10);
    });
  }
}

function zIndexLoop() {
  for (let i = 0; i < Ntimes; i++) {
    let z = new G1({});

    z.moveTo({
      zIndex: 10,
    });

    test(`G1 Z zIndex loop ${i}`, () => {
      expect(z.z).toBe(i * 10);
    });
  }
}
