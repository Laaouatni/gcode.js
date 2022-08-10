class GcodeAPI {
  constructor() {
    this.previusX = 0;
    this.previusY = 0;
    this.previusZ = 0;
  }

  // resetPosition() {
  //   this.previusX = 1000;
  //   this.previusY = 1000;
  //   this.previusZ = 1000;
  // }
}

class Gline extends GcodeAPI {
  constructor() {
    super();
    this.prefix = `ERROR: prefix not found.`;
    this.lineOfCode = `ERROR: your line of code is not generated.`;
  }
}

class G0 extends Gline {
  constructor(xyzObj) {
    super();
    this.x = xyzObj.x ?? this.previusX;
    this.y = xyzObj.y ?? this.previusY;
    this.z = xyzObj.z ?? this.previusZ;

    this.prefix = `G0`;
  }

  generate() {
    console.log("---------")
    this.lineOfCode = `${this.prefix} X${this.x} Y${this.y} Z${this.z}`;
    this.setLastPosition();
    return this.lineOfCode;
  }

  setLastPosition() {
    this.previusX = this.x;
    this.previusY = this.y;
    this.previusZ = this.z;

    console.log({ x: this.previusX, y: this.previusY, z: this.previusZ })
  }
}

console.log(new G0({ x: 20, y: 10 }).generate());
console.log(new G0({ x: 20 }).generate());

