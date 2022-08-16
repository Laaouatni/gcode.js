import Gsimulator from "../Gsimulator.js";
import GcodeAPI from "../../GcodeAPI_main/GcodeAPI.js";
import CssLine from "./CssLine/CssLine.js";

export default class Gcss extends Gsimulator {
  constructor(_GcssObj) {
    super();
    // in this case we use || instead of ?? to exclude also 0 from being a size
    // TODO: in the future add also possibility to to do 100% width/height
    this.width = _GcssObj.width || _GcssObj.height || 500;
    this.height = _GcssObj.height || _GcssObj.width || 500;
    this.parentHtmlContainer =
      _GcssObj.parentHtmlContainer ??
      document.querySelector("#app") ??
      document.body;
    
    this.create();
  }

  create() {
    this.cssContainer = document.createElement("div");
    this.cssContainer.id = "gcss";
    this.parentHtmlContainer.appendChild(this.cssContainer);
    
    this.changeSize();
  }

  changeSize() {
    this.cssContainer.style.width  = `${this.width}px`;
    this.cssContainer.style.height = `${this.height}px`;
  }

  drawLine(_CurrentObj, _index) {
    this.CssLineClass = new CssLine(_CurrentObj, _index);

    if (_index > 0) {
      this.cssContainer.appendChild(this.CssLineClass.lineElement);
    }
  }

  generate() {
    GcodeAPI.array.forEach((_posObj, _index) => {
      this.drawLine(_posObj, _index);
    });
  }
}
