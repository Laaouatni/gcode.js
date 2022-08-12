import Gcommands from "../Gcommands/Gcommands.js";

export default class Gtransform extends Gcommands {
  constructor(_transformObj) {
    super();
    this.position = _transformObj.position ?? "relative";
    
    this.left = _transformObj.left ?? 0;
    this.top = _transformObj.top ?? 0;
    // this.right = _transformObj.right ?? 0;
    // this.bottom = _transformObj.bottom ?? 0;
    // this.Zindex = _transformObj.Zindex ?? 0;
  }
  
  moveTo() {
    console.log("here works")
    this.toX = Gcommands.x + this.left;
    this.toY = Gcommands.y - this.top;

    return {toX: this.toX, toY: this.toY}
  }
}


