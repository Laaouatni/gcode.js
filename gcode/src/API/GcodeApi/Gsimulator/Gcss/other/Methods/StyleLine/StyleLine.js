import GcodeAPI from "../../../../../GcodeAPI_main/GcodeAPI.js";
export default class StyleLine {
  constructor(_this) {
    this.obj = _this;

    this.lineLeft = this.calcolateLeft();
    this.lineTop = this.calcolateTop();
    this.lineAngle = this.calcolateAngle();

    this.result = this.createStyleObject();
  }

  getResult() {
    return this.result;
  }

  createStyleObject() {
    return {
      width: `${this.obj.lineLength}px`,
      height: `${this.obj.lineHeight}px`,
      left: `${this.lineLeft}px`,
      top: `${this.lineTop}px`,
      rotate: `${this.lineAngle}deg`,
      backgroundColor: "var(--sky-200)",
      zIndex: `${GcodeAPI.array.length - this.obj.index}`,
      key: `${this.obj.index}`,
      animSpeed: "100ms",
    };
  }

  calcolateLeft() {
    // right
    if (this.obj.previusObj.x > this.obj.currentObj.x) {
      return this.obj.biggestPos.x;
    }

    // left
    return this.obj.smallestPos.x;
  }

  calcolateTop() {
    // bottom
    if (this.obj.previusObj.y > this.obj.currentObj.y) {
      return this.obj.biggestPos.y;
    }

    // top
    return this.obj.smallestPos.y;
  }

  calcolateAngle() {
    // bottom
    if (
      this.obj.previusObj.y > this.obj.currentObj.y &&
      this.obj.previusObj.x === this.obj.currentObj.x
    ) {
      return -1 * this.obj.lineAngle;
    }

    // right
    if (
      this.obj.previusObj.x > this.obj.currentObj.x &&
      this.obj.previusObj.y === this.obj.currentObj.y
    ) {
      return this.obj.lineAngle + 180;
    }

    // right and bottom
    if (
      this.obj.previusObj.y > this.obj.currentObj.y &&
      this.obj.previusObj.x > this.obj.currentObj.x
    ) {
      return this.obj.lineAngle - 180;
    }

    // right and top
    if (
      this.obj.previusObj.x > this.obj.currentObj.x &&
      this.obj.currentObj.y > this.obj.previusObj.y
    ) {
      return this.obj.lineAngle + 90;
    }

    // left and bottom
    if (
      this.obj.currentObj.x > this.obj.previusObj.x &&
      this.obj.previusObj.y > this.obj.currentObj.y
    ) {
      return this.obj.lineAngle - 90;
    }

    // normal all other direction
    return this.obj.lineAngle;
  }
}
