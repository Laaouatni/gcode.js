export default class StyleLine {
  constructor(_this) {
    this.obj = _this;
  }

  createStyleObj() {
    this.obj.lineStylesObj = {
      width: `${this.obj.lineLength}px`,
      height: `${this.obj.lineHeight}px`,
      left: `${
        this.obj.previusObj.x > this.obj.currentObj.x
          ? this.obj.biggestPos.x
          : this.obj.smallestPos.x
      }px`,
      top: `${
        this.obj.previusObj.y > this.obj.currentObj.y
          ? this.obj.biggestPos.y
          : this.obj.smallestPos.y
      }px`,
      rotate: `${
        this.obj.previusObj.y > this.obj.currentObj.y &&
        this.obj.previusObj.x === this.obj.currentObj.x
          ? -1 * this.obj.lineAngle
          : this.obj.previusObj.x > this.obj.currentObj.x &&
            this.obj.previusObj.y === this.obj.currentObj.y
          ? this.obj.lineAngle + 180
          : this.obj.previusObj.y > this.obj.currentObj.y &&
            this.obj.previusObj.x > this.obj.currentObj.x
          ? this.obj.lineAngle - 180
          : this.obj.previusObj.x > this.obj.currentObj.x &&
            this.obj.currentObj.y > this.obj.previusObj.y
          ? this.obj.lineAngle + 90
          : this.obj.currentObj.x > this.obj.previusObj.x &&
            this.obj.previusObj.y > this.obj.currentObj.y
          ? this.obj.lineAngle - 90
          : this.obj.lineAngle
      }deg`,
      backgroundColor: "var(--sky-200)",
      zIndex: `${GcodeAPI.array.length - this.obj.index}`,
      key: `${this.obj.index}`,
      animSpeed: "100ms",
    };
  }

  calcolateAngle() {
    if (
      this.obj.previusObj.y > this.obj.currentObj.y &&
      this.obj.previusObj.x === this.obj.currentObj.x
    ) {
      return -1 * this.obj.lineAngle;
    } else {
      if (
        this.obj.previusObj.x > this.obj.currentObj.x &&
        this.obj.previusObj.y === this.obj.currentObj.y
      ) {
        return this.obj.lineAngle + 180;
      } else {
        if (
          this.obj.previusObj.y > this.obj.currentObj.y &&
          this.obj.previusObj.x > this.obj.currentObj.x
        ) {
          return this.obj.lineAngle - 180;
        } else {
          if (
            this.obj.previusObj.x > this.obj.currentObj.x &&
            this.obj.currentObj.y > this.obj.previusObj.y
          ) {
            return this.obj.lineAngle + 90;
          } else {
            if (
              this.obj.currentObj.x > this.obj.previusObj.x &&
              this.obj.previusObj.y > this.obj.currentObj.y
            ) {
              return this.obj.lineAngle - 90;
            } else {
              return this.obj.lineAngle;
            }
          }
        }
      }
    }
  }
}
