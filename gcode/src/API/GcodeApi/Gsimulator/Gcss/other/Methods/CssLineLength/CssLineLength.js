export default class CssLineLength {
  constructor(_this) {
    this.obj = _this;
  }

  calcolate() {
    this.setObjSameOrNot();
    return this.getLenght();
  }

  getLenght() {
    if (
      this.obj.currentObj.y !== this.obj.previusObj.y &&
      this.obj.currentObj.x === this.obj.previusObj.x
    ) {
      return this.obj.PosDifference.y;
    } else if (
      this.obj.currentObj.x !== this.obj.previusObj.x &&
      this.obj.currentObj.y === this.obj.previusObj.y
    ) {
      return this.obj.PosDifference.x;
    } else if (
      this.obj.currentObj.y !== this.obj.previusObj.y &&
      this.obj.currentObj.x !== this.obj.previusObj.x
    ) {
      // pitagora's theorem
      return Math.hypot(this.obj.PosDifference.x, this.obj.PosDifference.y);
    } else {
      // 0 means they aren't moving
      return 0;
    }
  }

  setObjSameOrNot() {
    // moving in Y (top, bottom)
    if (
      this.obj.currentObj.y !== this.obj.previusObj.y &&
      this.obj.currentObj.x === this.obj.previusObj.x
    ) {
      this.obj.sameX = true;
      this.obj.sameY = false;
      this.obj.notSameXY = false;
    }
    // moving in X (left, right)
    else if (
      this.obj.currentObj.x !== this.obj.previusObj.x &&
      this.obj.currentObj.y === this.obj.previusObj.y
    ) {
      this.obj.sameY = true;
      this.obj.sameX = false;
      this.obj.notSameXY = false;
    }
    // moving diagonally
    else if (
      this.obj.currentObj.y !== this.obj.previusObj.y &&
      this.obj.currentObj.x !== this.obj.previusObj.x
    ) {
      this.obj.sameX = false;
      this.obj.sameY = false;
      this.obj.notSameXY = true;
      // console.log({ cur: this.obj.currentObj, prev: this.obj.previusObj });
    }
    // not moving
    else {
      // 0 0
      this.obj.sameX = true;
      this.obj.sameY = true;
      this.obj.notSameXY = false;
    }
  }
}
