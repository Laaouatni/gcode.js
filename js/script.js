class GcodeAPI {
  constructor() {
    GcodeAPI.previusX = 0;
    GcodeAPI.previusY = 0;
    GcodeAPI.previusZ = 0;
  }

  setLastPosition() {
    GcodeAPI.previusX = this.x;
    GcodeAPI.previusY = this.y;
    GcodeAPI.previusZ = this.z;
  }
}

 class Gline extends GcodeAPI {
  constructor() {
    super();

    this.prefix = `ERROR: prefix not found.`;
    this.lineOfCode = this.getLine() ?? `ERROR: your line of code is not generated.`;
  }

  getLine() {
    this.setLastPosition();
    return `${this.prefix} X${this.x} Y${this.y} Z${this.z}`;
  }
}

class G0 extends Gline {
  constructor(xyzObj) {
    super();
    this.x = xyzObj.x ?? GcodeAPI.previusX ?? 0;
    this.y = xyzObj.y ?? GcodeAPI.previusY ?? 0;
    this.z = xyzObj.z ?? GcodeAPI.previusZ ?? 0;

    this.prefix = `G0`;
  }
}

class G1 extends Gline {
  constructor(xyzObj) {
    super();
    this.x = xyzObj.x ?? GcodeAPI.previusX ?? 0;
    this.y = xyzObj.y ?? GcodeAPI.previusY ?? 0;
    this.z = xyzObj.z ?? GcodeAPI.previusZ ?? 0;

    this.prefix = `G1`;
  }
}