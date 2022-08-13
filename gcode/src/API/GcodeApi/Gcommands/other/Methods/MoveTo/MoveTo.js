import PositionSpecificy from "../../Specificy/PositionSpecificy.js";
import DirectionValues from '../../DirectionValues/DirectionValues.js';
import Gcommands from './../../../Gcommands.js';

export default class MoveTo{
  constructor(_this, _transformObj) {
    this.toX =
      new PositionSpecificy(_transformObj).getChoosedDirection().x ===
      "left"
        ? _this.x + new DirectionValues(_transformObj).left
        : _this.x - new DirectionValues(_transformObj).right;

    this.toY =
      new PositionSpecificy(_transformObj).getChoosedDirection().y ===
      "bottom"
        ? _this.y + new DirectionValues(_transformObj).bottom
        : _this.y - new DirectionValues(_transformObj).top;

    this.toZ = _transformObj.zIndex
      ? _this.z + _transformObj.zIndex
      : _this.z ?? 0;
  }

  getResult() {
    return {
      x: this.toX,
      y: this.toY,
      z: this.toZ,
    }
  }
}