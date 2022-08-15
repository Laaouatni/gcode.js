import Gcommands from "../Gcommands.js";
import MoveTo from "../other/Methods/MoveTo/MoveTo.js";

export default class G0 extends Gcommands {
  constructor(_xyzObj) {
    super(_xyzObj);
    this.prefix = `G0`;
  }

  moveTo(_transformObj) {
    this.newCoordTo = new MoveTo(this, _transformObj).getResult();

    return new G0(this.newCoordTo).getCode();
  }
}