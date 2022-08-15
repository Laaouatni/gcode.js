import Gsimulator from "../Gsimulator.js";
import GcodeAPI from "../../GcodeAPI_main/GcodeAPI.js";

export default class Gcss extends Gsimulator {
  constructor(_GcssObj) {
    super();
    // in this case we use || instead of ?? to exclude also 0 from being a size
    // TODO: in the future add also possibility to to do 100% width/height
    this.width = _GcssObj.width || _GcssObj.height || 500;
    this.height = _GcssObj.height || _GcssObj.width || 500;
    this.parentHtmlContainer = _GcssObj.parentHtmlContainer ?? document.body;
    this.create();
  }

  create() {
    this.cssContainer = document.createElement("div");
    this.cssContainer.id = "gcss";
    this.parentHtmlContainer.appendChild(this.cssContainer);
    this.changeSize();
  }

  changeSize() {
    this.cssContainer.width = this.width;
    this.cssContainer.height = this.height;
  }

  drawLine(_CurrentObj, _index) {
    class Line {
      constructor() {
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
        console.log(this.lineLength);
      }

      calcolateLength() {
        if (
          this.currentObj.y !== this.previusObj.y &&
          this.currentObj.x === this.previusObj.x
        ) {
          this.sameX = true;
          this.sameY = false;
          return this.PosDifference.y;
        } else if (
          this.currentObj.x !== this.previusObj.x &&
          this.currentObj.y === this.previusObj.y
        ) {
          this.sameY = true;
          this.sameX = false;
          return this.PosDifference.x;
        } else if (
          this.currentObj.y !== this.previusObj.y &&
          this.currentObj.x !== this.previusObj.x
        ) {
          this.sameX = false;
          this.sameY = false;
          this.notSameXY = true;
          // pitagora's theorem
          return Math.sqrt(
            Math.pow(this.PosDifference.x, 2) +
              Math.pow(this.PosDifference.y, 2),
          );
        } else {
          // 0 means they aren't moving
          return 0;
        }
      }
    }

    console.log(new Line());
    // console.log("❌", _CurrentObj);
  }

  generate() {
    GcodeAPI.array.forEach((_posObj, _index) => {
      this.drawLine(_posObj, _index);
    });
  }
}
