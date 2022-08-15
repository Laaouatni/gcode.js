import PositionSpecificy from "../../Specificy/PositionSpecificy.js";
import DirectionValues from "../../DirectionValues/DirectionValues.js";

export default class MoveTo {
  constructor(_this, _transformObj) {
    this.PositionChoosed = new PositionSpecificy(
      _transformObj,
    ).getChoosedDirection();

    console.log({ posChosed: this.PositionChoosed });

    console.log("this???", _this)
    

    this.toX = () => {
      switch(this.PositionChoosed.x) {
        case "left":
          return _this.x + new DirectionValues(_transformObj).left;
        case "right":
          return _this.x - new DirectionValues(_transformObj).right;
        default:
          return _this.x
      }
    }



    this.toY = () => {
      switch(this.PositionChoosed.y) {
        case "bottom":
          return _this.y + new DirectionValues(_transformObj).bottom;
        case "top":
          return _this.y - new DirectionValues(_transformObj).top;
        default:
          return _this.y
      }
    }

    this.toZ = _transformObj.zIndex
      ? _this.z + _transformObj.zIndex
      : _this.z ?? 0;
  }

  getResult() {
    return {
      x: this.toX(),
      y: this.toY(),
      z: this.toZ,
    };
  }
}
