import GcodeAPI from '../../../GcodeAPI_main/GcodeAPI.js';
import CssLineLength from '../other/Methods/CssLineLength/CssLineLength.js';
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
    this.lineAngle = this.calcolateAngle();
  }

  calcolateLength() {
    return new CssLineLength(this).calcolate();
  }

  calcolateAngle() {
    return new CssLineAngle(this).calcolate();
  }
}