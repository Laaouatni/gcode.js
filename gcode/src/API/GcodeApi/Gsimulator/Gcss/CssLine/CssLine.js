import GcodeAPI from "../../../GcodeAPI_main/GcodeAPI.js";
import CssLineLength from "../other/Methods/CssLineLength/CssLineLength.js";
import CssLineAngle from "../other/Methods/CssLineAngle/CssLineAngle.js";
import CssFloatPopup from "../CssFloatPopup/CssFloatPopup.js";
import StyleLine from "../other/Methods/StyleLine/StyleLine.js";
import LineCssFile from "../../../../../CSS/Gline/Gline.css";
export default class CssLine {
  constructor(_CurrentObj, _index, _this) {
    this.index = _index;
    this.lineElement = document.createElement("div");

    this.currentObj = _CurrentObj;
    this.previusObj = GcodeAPI.array[this.index - 1 > 0 ? this.index - 1 : 0];

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
    this.lineHeight = this.calcolateHeight(0.4); // 0.2rem
    this.lineAngle = this.calcolateAngle();

    this.styleLine();

    this.parentElement = _this.parentHtmlContainer;

    this.createPopup({
      button: this.lineElement,
    });
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
    this.lineStylesObj = new StyleLine(this).getResult();

    this.stylesKeysArray = Object.keys(this.lineStylesObj);
    this.stylesValuesArray = Object.values(this.lineStylesObj);

    this.stylesKeysArray.forEach((key, index) => {
      this.lineElement.style.setProperty(
        `--line-${key}`,
        this.stylesValuesArray[index],
      );
    });

    this.lineElement.classList.add("Gline");

    this.previusObj.x > this.currentObj.x ||
    this.previusObj.y > this.currentObj.y
      ? this.lineElement.classList.add("Gline__before-negative-direction")
      : this.lineElement.classList.add("Gline__before-positive-direction");

    this.lineElement.setAttribute("key", this.index);
    this.lineElement.setAttribute(
      "data-line",
      `${JSON.stringify({
        length: this.lineLength.toFixed(2),
        x: this.currentObj.x.toFixed(2),
        y: this.currentObj.y.toFixed(2),
        angle: this.lineAngle.toFixed(2),
      })}`,
    );
  }

  createPopup(_obj) {
    this.popupClass = new CssFloatPopup(_obj, this);
  }
}
