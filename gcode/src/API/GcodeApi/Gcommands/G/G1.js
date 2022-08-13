import Gcommands from "../Gcommands.js";

export default class G1 extends Gcommands {
  constructor(_xyzObj) {
    super(_xyzObj);
    this.prefix = `G1`;
  }

  moveTo(_transformObj) {
    this.newCoordTo = new Gcommands({}).moveTo(_transformObj);

    return new G1(this.newCoordTo).getCode();
  }
}
