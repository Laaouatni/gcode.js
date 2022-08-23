export default class CssLineAngle {
  constructor(_this) {
    this.obj = _this;
  }

  calcolate() {
    if (this.obj.notSameXY) {
      // check if the user used "bottom"
      return Math.asin(this.obj.PosDifference.y / this.obj.lineLength) * 180 / Math.PI;
    } else if (this.obj.sameY && !this.obj.sameX) {
      return 0;
    } else if (this.obj.sameX && !this.obj.sameY) {
      return 90;
    } else {
      return 0;
    }
  }
}