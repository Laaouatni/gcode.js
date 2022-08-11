import GcodeAPI from "./gcodeAPI.js"

export default class Gline extends GcodeAPI {
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