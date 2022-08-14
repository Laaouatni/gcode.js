import Gsimulator from "./Gsimulator.js";

export default class Gcanvas extends Gsimulator {
  constructor(_GcanvasObj) {
    super();
    // in this case we use || instead of ?? to exclude also 0 from being a size
    this.width = _GcanvasObj.width || _GcanvasObj.height || 500;
    this.height = _GcanvasObj.height ||  _GcanvasObj.width || 500;
    this.parentHtmlContainer = _GcanvasObj.parentHtmlContainer ?? document.body;
  }

  create() {
    this.canvasElement = document.createElement("canvas");
    this.appendCanvasToParent();
    this.changeSize();
  }

  appendCanvasToParent() {
    this.parentHtmlContainer.appendChild(this.canvasElement)
  }

  changeSize() {
    this.canvasElement.width = this.width;
    this.canvasElement.height = this.height;
  }
}
