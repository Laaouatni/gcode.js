import Gline from "./Gline.js";

export default class G0 extends Gline {
  constructor(xyzObj) {
    super();
    this.x = xyzObj.x ?? this.previusX;
    this.y = xyzObj.y ?? this.previusY;
    this.z = xyzObj.z ?? this.previusZ;

    this.prefix = `G0`;
  }
}
