import GcodeAPI from "../GcodeAPI.js";
import MoveTo from "./other/Methods/MoveTo/MoveTo.js";

export default class Gcommands extends GcodeAPI {
  constructor(_xyzObj) {
    super(_xyzObj);

    this.x = parseInt(_xyzObj.x ?? GcodeAPI.previusX ?? 0);
    this.y = parseInt(_xyzObj.y ?? GcodeAPI.previusY ?? 0);
    this.z = parseInt(_xyzObj.z ?? GcodeAPI.previusZ ?? 0);
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

  moveTo(_transformObj) {
    return new MoveTo(this, _transformObj).getResult();
  }
}
