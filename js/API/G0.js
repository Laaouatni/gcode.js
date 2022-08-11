import Gline from "./Gline.js"
import GcodeAPI from "./GcodeAPI.js"

export default class G0 extends Gline {
  constructor(xyzObj) {
    super();
    this.x = xyzObj.x ?? GcodeAPI.previusX ?? 0;
    this.y = xyzObj.y ?? GcodeAPI.previusY ?? 0;
    this.z = xyzObj.z ?? GcodeAPI.previusZ ?? 0;

    this.prefix = `G0`;
  }
}
