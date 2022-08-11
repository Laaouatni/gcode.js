class GcodeAPI {}

class Gcommands extends GcodeAPI {
  constructor(_xyzObj) {
    super();
    this.lineOfCode = "⚠️ No line of code - please use getCode() method first";

    this.x = _xyzObj.x ?? GcodeAPI.previusX ?? 0;
    this.y = _xyzObj.y ?? GcodeAPI.previusY ?? 0;
    this.z = _xyzObj.z ?? GcodeAPI.previusZ ?? 0;
  }

  getCode() {
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
    super(_xyzObj);
    this.prefix = `G0`;
  }
}

class G1 extends Gcommands {
  constructor(_xyzObj) {
    super(_xyzObj);

    this.prefix = `G1`;
  }
}

class G2 extends Gcommands {
  constructor(_xyzObj) {
    super(_xyzObj);

    this.prefix = `G2`;
  }
}

class G3 extends Gcommands {
  constructor(_xyzObj) {
    super(_xyzObj);

    this.prefix = `G3`;
  }
}

