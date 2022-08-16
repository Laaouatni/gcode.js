import GcodeAPI from "../../../GcodeAPI_main/GcodeAPI.js";
import CssLineLength from "../other/Methods/CssLineLength/CssLineLength.js";
import CssLineAngle from "../other/Methods/CssLineAngle/CssLineAngle.js";

export default class CSSline {
  constructor(_CurrentObj, _index) {
    this.lineElement = document.createElement("div");

    this.currentObj = _CurrentObj;
    this.previusObj = GcodeAPI.array[_index - 1 > 0 ? _index - 1 : 0];

    this.smallestPos = {
      x: Math.min(this.currentObj.x, this.previusObj.x),
      y: Math.min(this.currentObj.y, this.previusObj.y),
    };

    this.biggestPos = {
      x: Math.max(this.currentObj.x, this.previusObj.x),
      y: Math.max(this.currentObj.y, this.previusObj.y),
    };

    this.PosDifference = {
      x: this.biggestPos.x - this.smallestPos.x,
      y: this.biggestPos.y - this.smallestPos.y,
    };

    this.lineLength = this.calcolateLength();
    this.lineHeight = this.calcolateHeight(0.2); // 0.2rem 
    this.lineAngle = this.calcolateAngle();

    this.styleLine();
  }

  calcolateLength() {
    return new CssLineLength(this).calcolate();
  }

  calcolateAngle() {
    return new CssLineAngle(this).calcolate();
  }

  calcolateHeight(remValue) {
    return remValue * 16;
  }

  styleLine() {
    this.lineStylesObj = {
      width: `${this.lineLength}px`,
      height: `${this.lineHeight}px`,
      transform: `translate(${this.smallestPos.x}px, calc(${this.smallestPos.y}px - ${this.lineHeight}px)) rotate(${this.lineAngle}deg)`,
      backgroundColor: "red",
    };

    console.log(this.lineStylesObj.transform);

    this.stylesKeysArray = Object.keys(this.lineStylesObj);
    this.stylesValuesArray = Object.values(this.lineStylesObj);

    this.stylesKeysArray.forEach((key, index) => {
      this.lineElement.style[key] = this.stylesValuesArray[index];
    });

    this.lineElement.classList.add("Gline")
  }
}
