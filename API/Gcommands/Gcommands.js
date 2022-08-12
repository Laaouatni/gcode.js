import GcodeAPI from "../Gmain/GcodeAPI.js";
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
    class DirectionValues {
      constructor() {
        this.left = _transformObj.left ?? 0;
        this.right = _transformObj.right ?? 0;

        this.top = _transformObj.top ?? 0;
        this.bottom = _transformObj.bottom ?? 0;
      }
    }

    console.log("//////////////////////////");
    console.log(_transformObj);

    console.log(new PositionSpecificy().getChoosedDirection())
    console.log("");

    this.toX = this.x + new DirectionValues().left;
    this.toY = this.y - new DirectionValues().top;

    console.log("/////////////////////");

    return { thisX: this.toX, thisY: this.toY };
  }
}
