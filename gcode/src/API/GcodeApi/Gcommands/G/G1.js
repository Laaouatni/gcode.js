import Gcommands from "../Gcommands.js";
import MoveTo from "../other/Methods/MoveTo/MoveTo.js";

export default class G1 extends Gcommands {
  constructor(_xyzObj) {
    super(_xyzObj);
    this.prefix = `G1`;
  }

  moveTo(_transformObj) {
    this.newCoordTo = new MoveTo(this, _transformObj).getResult();

    return new G1(this.newCoordTo).getCode();
  }
}
