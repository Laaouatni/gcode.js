import GcodeAPI from "../Gmain/GcodeAPI.js";

export default class Gcommands extends GcodeAPI {
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