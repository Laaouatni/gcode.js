export default class CssLineLength {
  constructor(_this) {
    this.obj = _this;
  }

  calcolate(_this) {
    if (
      this.obj.currentObj.y !== this.obj.previusObj.y &&
      this.obj.currentObj.x === this.obj.previusObj.x
    ) {
      this.obj.sameX = true;
      this.obj.sameY = false;
      return this.obj.PosDifference.y;
    } else if (
      this.obj.currentObj.x !== this.obj.previusObj.x &&
      this.obj.currentObj.y === this.obj.previusObj.y
    ) {
      this.obj.sameY = true;
      this.obj.sameX = false;
      return this.obj.PosDifference.x;
    } else if (
      this.obj.currentObj.y !== this.obj.previusObj.y &&
      this.obj.currentObj.x !== this.obj.previusObj.x
    ) {
      this.obj.sameX = false;
      this.obj.sameY = false;
      this.obj.notSameXY = true;
      // pitagora's theorem
      return Math.sqrt(
        Math.pow(this.obj.PosDifference.x, 2) +
          Math.pow(this.obj.PosDifference.y, 2),
      );
    } else {
      this.obj.sameX = true;
      this.obj.sameY = true;
      this.obj.notSameXY = false;
      // 0 means they aren't moving
      return 0;
    }
  }
}