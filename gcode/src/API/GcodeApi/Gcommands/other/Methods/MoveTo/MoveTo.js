import PositionSpecificy from "../../Specificy/PositionSpecificy.js";
import DirectionValues from "../../DirectionValues/DirectionValues.js";
import GcodeAPI from "./../../../../GcodeAPI_main/GcodeAPI.js";

export default class MoveTo {
  constructor(_this, _transformObj) {
    this.obj = _this;

    this.PositionChoosed = new PositionSpecificy(
      _transformObj,
    ).getChoosedDirection();

    this.previusX = GcodeAPI.previusX ?? this.obj.x;
    this.previusY = GcodeAPI.previusY ?? this.obj.y;

    this.toX = () => {
      switch (this.PositionChoosed.x) {
        case "left":
          return this.previusX + new DirectionValues(_transformObj).left;
        case "right":
          return this.previusX - new DirectionValues(_transformObj).right;
        default:
          return this.previusX;
      }
    };

    this.toY = () => {
      switch (this.PositionChoosed.y) {
        case "bottom":
          return this.previusY - new DirectionValues(_transformObj).bottom;
        case "top":
          return this.previusY + new DirectionValues(_transformObj).top;
        default:
          return this.previusY;
      }
    };

    this.toZ = _transformObj.zIndex
      ? GcodeAPI.previusZ + _transformObj.zIndex
      : this.obj.z;
  }

  getResult() {
    return {
      x: this.toX(),
      y: this.toY(),
      z: this.toZ,
    };
  }
}
