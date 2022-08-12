import Gcommands from "../Gcommands/Gcommands.js";

export default class Gtransform {  
  moveTo(_transformObj) {
    this.left = _transformObj.left ?? 0;

    return this.left;
  }
}


