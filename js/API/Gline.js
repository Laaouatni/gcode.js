import G0 from "./G0.js"
import G1 from "./G1.js"

export default class Gline extends GcodeAPI {
  constructor() {
    super();
    this.prefix = `ERROR: prefix not found.`;
    this.lineOfCode = `ERROR: your line of code is not generated.`;
  }

  generate() {
    this.lineOfCode = `${this.prefix} X${this.x} Y${this.y} Z${this.z}`;
    this.setLastPosition();
    return this.lineOfCode;
  }

  setLastPosition() {
    this.previusX = this.x;
    this.previusY = this.y;
    this.previusZ = this.z;
  }
}