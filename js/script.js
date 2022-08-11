class GcodeAPI {
}

class Gcommands extends GcodeAPI {
  constructor() {
    super();
    this.lineOfCode = "⚠️ No line of code - please use getLine() method first";
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

class G0 extends Gcommands {
  constructor(_xyzObj) {
    super();
    this.x = _xyzObj.x ?? GcodeAPI.previusX ?? 0;
    this.y = _xyzObj.y ?? GcodeAPI.previusY ?? 0;
    this.z = _xyzObj.z ?? GcodeAPI.previusZ ?? 0;

    this.prefix = `G0`;
  }
}

class G1 extends Gcommands {
  constructor(_xyzObj) {
    super();
    this.x = _xyzObj.x ?? GcodeAPI.previusX ?? 0;
    this.y = _xyzObj.y ?? GcodeAPI.previusY ?? 0;
    this.z = _xyzObj.z ?? GcodeAPI.previusZ ?? 0;

    this.prefix = `G1`;
  }
}

class G2 extends Gcommands { 
  constructor(_xyzObj) {
    super();
    this.x = _xyzObj.x ?? GcodeAPI.previusX ?? 0;
    this.y = _xyzObj.y ?? GcodeAPI.previusY ?? 0;
    this.z = _xyzObj.z ?? GcodeAPI.previusZ ?? 0;

    this.prefix = `G2`;
  }
}

class G3 extends Gcommands {
  constructor(_xyzObj) {
    super();
    this.x = _xyzObj.x ?? GcodeAPI.previusX ?? 0;
    this.y = _xyzObj.y ?? GcodeAPI.previusY ?? 0;
    this.z = _xyzObj.z ?? GcodeAPI.previusZ ?? 0;

    this.prefix = `G3`;
  }
}

console.log(new G3({ x: 1, y: 2, z: 3 }).getLine());