import Gcommands from "../Gcommands.js";

export default class G0 extends Gcommands {
  constructor(_xyzObj) {
    super(_xyzObj);
    this.prefix = `G0`;
  }

  moveTo(_transformObj) {
    this.newCoordTo = new Gcommands({}).moveTo(_transformObj);

    return new G0(this.newCoordTo).getCode();
  }
}