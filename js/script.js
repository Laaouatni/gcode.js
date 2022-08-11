class GcodeAPI {
}

class Gline extends GcodeAPI {
  constructor() {
    super();
    this.lineOfCode = undefined;
  }

  getLine() {
    this.setLastPosition();
    this.lineOfCode = `${this.prefix} X${this.x} Y${this.y} Z${this.z}`;
    return this.lineOfCode;
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
    this.x = _xyzObj.x ?? GcodeAPI.previusX ?? 0;
    this.y = _xyzObj.y ?? GcodeAPI.previusY ?? 0;
    this.z = _xyzObj.z ?? GcodeAPI.previusZ ?? 0;

    this.prefix = `G0`;
  }
}

class G1 extends Gline {
  constructor(_xyzObj) {
    super();
    this.x = _xyzObj.x ?? GcodeAPI.previusX ?? 0;
    this.y = _xyzObj.y ?? GcodeAPI.previusY ?? 0;
    this.z = _xyzObj.z ?? GcodeAPI.previusZ ?? 0;

    this.prefix = `G1`;
  }
}