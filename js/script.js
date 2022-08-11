class GcodeAPI {
  constructor() {
    this.previusX = 0;
    this.previusY = 0;
    this.previusZ = 0;
  }
}

class Gline extends GcodeAPI {
  constructor() {
    super();
    this.lineOfCode = this.getLine();
  }

  getLine() {
    this.setLastPosition();
    return `${this.prefix} X${this.x} Y${this.y} Z${this.z}`;
  }

  setLastPosition() {
    GcodeAPI.previusX = this.x;
    GcodeAPI.previusY = this.y;
    GcodeAPI.previusZ = this.z;
  }
}

class G0 extends Gline {
  constructor(_xyzObj) {
    super();
    this.x = _xyzObj.x ?? GcodeAPI.previusX ?? "❌";
    this.y = _xyzObj.y ?? GcodeAPI.previusY ?? "❌";
    this.z = _xyzObj.z ?? GcodeAPI.previusZ ?? "❌";

    this.prefix = `G0`;
  }
}

class G1 extends Gline {
  constructor(_xyzObj) {
    super();
    this.x = _xyzObj.x ?? GcodeAPI.previusX ?? "❌";
    this.y = _xyzObj.y ?? GcodeAPI.previusY ?? "❌";
    this.z = _xyzObj.z ?? GcodeAPI.previusZ ?? "❌";

    this.prefix = `G1`;
  }
}