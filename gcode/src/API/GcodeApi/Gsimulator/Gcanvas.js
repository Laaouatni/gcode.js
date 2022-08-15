import Gsimulator from "./Gsimulator.js";
import GcodeAPI from '../GcodeAPI_main/GcodeAPI.js';

export default class Gcanvas extends Gsimulator {
  constructor(_GcanvasObj) {
    super();
    // in this case we use || instead of ?? to exclude also 0 from being a size
    this.width = _GcanvasObj.width || _GcanvasObj.height || 500;
    this.height = _GcanvasObj.height ||  _GcanvasObj.width || 500;
    this.parentHtmlContainer = _GcanvasObj.parentHtmlContainer ?? document.body;
    this.create();
  }

  create() {
    this.canvasElement = document.createElement("canvas");
    this.appendCanvasToParent();
    this.changeSize();
    this.reset();
  }

  appendCanvasToParent() {
    this.parentHtmlContainer.appendChild(this.canvasElement)
  }

  changeSize() {
    this.canvasElement.width = this.width;
    this.canvasElement.height = this.height;
  }

  reset() {
    this.ctx = this.canvasElement.getContext("2d");
    this.ctx.beginPath();
  }

  drawLine(_obj) {
    console.log("❌", _obj);
    this.ctx.lineTo(_obj.x, _obj.y);
    this.ctx.stroke();
  }

  generate() {
    GcodeAPI.array.forEach(pos => {
      this.drawLine(pos)
    })
  }
}
