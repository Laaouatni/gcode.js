import PositionSpecificy from "../../Specificy/PositionSpecificy.js";
import DirectionValues from '../../DirectionValues/DirectionValues.js';

export default class MoveTo {
  constructor(_transformObj, thisPosObj) {
    this.x = thisPosObj.x;
    this.y = thisPosObj.y;
    this.z = thisPosObj.z;

    this.toX =
      new PositionSpecificy(_transformObj).getChoosedDirection().x ===
      "left"
        ? this.x + new DirectionValues(_transformObj).left
        : this.x - new DirectionValues(_transformObj).right;

    this.toY =
      new PositionSpecificy(_transformObj).getChoosedDirection().y ===
      "bottom"
        ? this.y + new DirectionValues(_transformObj).bottom
        : this.y - new DirectionValues(_transformObj).top;

    this.toZ = _transformObj.zIndex
      ? this.z + _transformObj.zIndex
      : this.z ?? 0;
  }

  getResult() {
    return {
      x: this.toX,
      y: this.toY,
      z: this.toZ,
    }
  }
}