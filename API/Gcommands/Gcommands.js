import GcodeAPI from "../GcodeAPI.js";
import DirectionValues from "./other/DirectionValues/DirectionValues.js";
import PositionSpecificy from "./other/Specificy/PositionSpecificy.js";

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
    this.toX =
      new PositionSpecificy(_transformObj).getChoosedDirection().x === "left"
        ? this.x + new DirectionValues(_transformObj).left
        : this.x - new DirectionValues(_transformObj).right;

    this.toY =
      new PositionSpecificy(_transformObj).getChoosedDirection().y === "bottom"
        ? this.y + new DirectionValues(_transformObj).bottom
        : this.y - new DirectionValues(_transformObj).top;

    this.toZ = _transformObj.zIndex
      ? this.z + _transformObj.zIndex
      : this.z ?? 0;

    this.toResults = {
      x: this.toX,
      y: this.toY,
      z: this.toZ,
    };

    return this.toResults;
  }
}
